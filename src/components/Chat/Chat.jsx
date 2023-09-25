import React, { useEffect, useRef, useState } from "react";
import "./Chat.scss";
import Draggable from "react-draggable";
import { Button, Space } from "antd";
import { Icon } from "@iconify/react";
import { LineOutlined, CloseOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";

const Chat = ({ widgetHandler, isOpen }) => {
  const [user, setUser] = useState([]);
  const isLogin = JSON.parse(localStorage.getItem("login"));

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [getMessages, setGetMessages] = useState([]);

  useEffect(() => {
    if (isLogin) {
      setUser(isLogin);
    }
  }, [isLogin]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`/messages.php?id=${user.id}`);
        const data = response.data;
        setGetMessages(data);
      } catch (error) {
        console.error(error);
      }
    };
    if (user) {
      const intervalId = setInterval(() => {
        fetchMessages();
      }, 500);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, []);

  useEffect(() => {
    if (getMessages.length > messages.length) {
      setMessages(getMessages);
    }
  }, [getMessages]);

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("uuid", user.uuid);
    formData.append("message", message);
    formData.append("first_name", user.first_name);
    formData.append("last_name", user.last_name);

    if (user.uuid && message.length > 0) {
      axios
        .post("/message.php", formData)
        .then((response) => {
          console.log(response.data);
          setMessage("");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleKeyPress = (e) => {
    setMessage(e.target.value);
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <Space direction="vertical" className="chat">
      <Space className="chat-header">
        <Space direction="horizontal" size="middle" className="close-buttons">
          <LineOutlined
            className="close"
            onClick={() => widgetHandler("chat")}
          />
        </Space>
      </Space>
      <Space className="chat-body" direction="vertical">
        {messages.map((elem, index) => {
          if (elem.uuid === user.uuid) {
            return (
              <Space className="self-message" key={user.id}>
                <Space direction="vertical">
                  <p className="self-message-author">
                    {elem.first_name + " " + elem.last_name}
                  </p>
                  <p className="self-message-text">{elem.message}</p>
                  <p className="date">{elem.date_created}</p>
                </Space>
              </Space>
            );
          } else {
            return (
              <Space className="other-message" key={elem.id}>
                <Space direction="vertical">
                  <p className="other-message-author">
                    {elem.first_name + " " + elem.last_name}
                  </p>
                  <p className="other-message-text">{elem.message}</p>
                  <p className="date">{elem.date_created}</p>
                </Space>
              </Space>
            );
          }
        })}
      </Space>
      <Space direction="horizontal" className="chat-footer">
        <TextArea
          color="neutral"
          minRows={1}
          variant="soft"
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyPress}
          value={message}
        />
        <Button
          title="send"
          size="small"
          children={<Icon width="20px" height="20px" icon="mdi:send-outline" />}
          className="nav-icon"
          onClick={handleSubmit}
        />
      </Space>
    </Space>
  );
};

export default Chat;
