import React from "react";
import "./HighFive.scss";
import five from "../../../assets/icons/high-five.png";
import { Space } from "antd";
const HighFive = ({ widgetHandler }) => {
  return (
    <Space
      direction="vertical"
      size="low"
      align="center"
      className="low-five"
      onClick={() => widgetHandler("donate")}
    >
      <h4>
        Lo<b>w</b> Fi<b>ve</b>
      </h4>
      <img src={five} alt="five" className="five" />
    </Space>
  );
};

export default HighFive;
