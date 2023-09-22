import React, { useEffect, useState } from "react";
import "./Chat.scss";
import Draggable from "react-draggable";
import { Button, Space } from "antd";
import { Icon } from "@iconify/react";
import { LineOutlined, CloseOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";

const Chat = ({ widgetHandler }) => {
  const messages = [
    {
      id: "1",
      first_name: "Иван",
      last_name: "Иванов",
      message: "Привет",
    },
    {
      id: "2",
      first_name: "Петр",
      last_name: "Петров",
      message: "Привет",
    },
  ];

  const [message, setMessage] = useState("");
  const [showMessages, setShowMessages] = useState([]);
  const userId = "1";

  const handleSubmit = () => {
    let msg = {
      id: "1",
      first_name: "Иван",
      last_name: "Иванов",
      message: message,
    };
    messages.push(msg);
    setMessage("");
  };

  return (
    <Draggable>
      <Space direction="vertical" className="chat">
        <Space className="chat-header">
          <Space direction="horizontal" size="middle" className="close-buttons">
            <LineOutlined
              className="close"
              onClick={() => widgetHandler("chat")}
            />
            {/* <CloseOutlined
              className="close"
              onClick={() => widgetHandler("chat")}
            /> */}
          </Space>
        </Space>
        <Space className="chat-body" direction="vertical">
          {messages.map((elem) => {
            if (elem.id === userId) {
              return (
                <Space className="self-message">
                  <Space direction="vertical">
                    <p className="self-message-author">
                      {elem.first_name + " " + elem.last_name}
                    </p>
                    <p className="self-message-text">{elem.message}</p>
                  </Space>
                </Space>
              );
            } else {
              return (
                <Space className="other-message">
                  <Space direction="vertical">
                    <p className="self-message-author">
                      {elem.first_name + " " + elem.last_name}
                    </p>
                    <p className="other-message-text">{elem.message}</p>
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
            value={message}
          />
          <Button
            title="send"
            size="small"
            children={
              <Icon width="20px" height="20px" icon="mdi:send-outline" />
            }
            className="nav-icon"
            onClick={handleSubmit}
          />
        </Space>
      </Space>
    </Draggable>
  );
};

export default Chat;
