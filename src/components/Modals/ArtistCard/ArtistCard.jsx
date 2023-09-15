import React from "react";
import "./ArtistCard.scss";
import { InstagramOutlined, MessageOutlined } from "@ant-design/icons";

const ArtistCard = () => {
  return (
    <div className="ArtistCard">
      <div className="title">
        <h5>Sound producer: <b style={{ color: "rgba(147,149,241,0.4)" }}>Владислав Головченко</b></h5>
      </div>
      <div className="buttons">
        <p>Contacts:</p>
        <a
          href="https://instagram.com/vladislavgolovchenko?igshid=NzZhOTFlYzFmZQ=="
          className="icon"
        >
          <InstagramOutlined className="icon-btn" />
        </a>
        <a href="https://t.me/vladislavgolovchenko" className="icon">
          <MessageOutlined className="icon-btn" />
        </a>
      </div>
    </div>
  );
};

export default ArtistCard;
