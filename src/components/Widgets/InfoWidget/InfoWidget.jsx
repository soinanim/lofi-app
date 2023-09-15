import React from "react";
import "./InfoWidget.scss";
import { LineOutlined } from "@ant-design/icons";
import Draggable from "react-draggable";
import { InstagramOutlined, MessageOutlined } from "@ant-design/icons";

const InfoWidget = ({ widgetHandler }) => {
  return (
    <Draggable>
      <div className="info">
        <div className="row">
          <h4>Authors</h4>
          <LineOutlined
            className="close"
            onClick={() => widgetHandler("info")}
          />
        </div>
        <div className="authors">
          <div className="content">
            <div className="content-item">
              <h5>Developer and author of the idea:</h5>
              <b style={{ color: "rgba(24,99,205,0.5)" }}>Кристина Бабий</b>
              <div className="buttons">
                <p>Contacts:</p>
                <a href="#" className="icon">
                  <InstagramOutlined className="icon-btn" />
                </a>
                <a href="https://t.me/soinanim" className="icon">
                  <MessageOutlined className="icon-btn" />
                </a>
              </div>
            </div>
            <div className="content-item">
              <h5>Developer and innovator:</h5>
              <b style={{ color: "rgba(24,99,205,0.5)" }}>Липовка Михаил</b>
              <div className="buttons">
                <p>Contacts:</p>
                <a href="#" className="icon">
                  <InstagramOutlined className="icon-btn" />
                </a>
                <a href="https://t.me/miwist" className="icon">
                  <MessageOutlined className="icon-btn" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default InfoWidget;
