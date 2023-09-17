import React, { useState } from "react";
import {
  CreditCardOutlined,
  LineOutlined,
  QrcodeOutlined,
} from "@ant-design/icons";
import { Space } from "antd";

import qrcode from "../../../assets/icons/qr-pay.jpg";

import "./DonateWidget.scss";
import Draggable from "react-draggable";
const DonateWidget = ({ widgetHandler }) => {
  const [openQr, setOpenQr] = useState(false);
  return (
    <Draggable>
      <Space
        direction="vertical"
        size="middle"
        align="center"
        className="donate"
      >
        <Space
          direction="horizontal"
          size="middle"
          align="center"
          className="title"
        >
          <h2>Provide support</h2>
          <LineOutlined
            className="close"
            onClick={() => widgetHandler("donate")}
          />
        </Space>

        <p>
          If you would like to provide support, we would appreciate any
          donation. We appreciate every amount you can donate as it will help us
          continue our important work
        </p>
        {openQr && <img src={qrcode} alt="qrcode" className="donate-qr" />}

        <Space direction="gorizontal" size="low" align="center">
          <a
            title="Donate-link"
            target="_blank"
            rel="noreferrer"
            href="https://www.tinkoff.ru/rm/lipovka.mikhail1/oVnzl51691"
            className="icon"
          >
            <CreditCardOutlined style={{ fontSize: "16px" }} />
          </a>

          <QrcodeOutlined
            style={{ fontSize: "16px" }}
            onClick={() => setOpenQr((state) => !state)}
            className="qrcode"
          />
        </Space>
      </Space>
    </Draggable>
  );
};

export default DonateWidget;
