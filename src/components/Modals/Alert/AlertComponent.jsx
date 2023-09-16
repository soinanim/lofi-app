import React from "react";
import { Alert, Space } from "antd";
import "./AlertComponent.scss";

const AlertComponent = ({ value, text }) => (
  <Space direction="vertical" className="alert">
    {value == "success" && <Alert message={text} type="success" />}
    {value == "info" && <Alert message={text} type="info" />}
    {value == "warning" && <Alert message={text} type="warning" />}
    {value == "error" && <Alert message={text} type="error" />}
  </Space>
);

export default AlertComponent;
