import React, { useState } from "react";
import styles from "./Header.module.css";
import Button from "../Button/Button";
import { Switch } from "antd";
import { SunOutlined } from '@ant-design/icons';
const Header = ({ openWidget, setOpenWidget }) => {
  const [checked, setChecked] = useState(false);
  const handleChange = (checked) => {
    setChecked(checked);
    console.log(`Switch is ${checked ? "on" : "off"}`);
  };

  return (
    <header className={styles.header}>
      <div>Logo</div>
      <div className={styles.control}>
        <div
          className={styles.widget}
          onClick={() => setOpenWidget(!openWidget)}
        >
          Время
        </div>

        <div className={styles.switch}>
          {checked ? <p>On</p> : <p>Off</p>}
          <Switch onChange={handleChange} />
        </div>

        <div>Проигрыватель</div>
        <Button type="button" text="Войти" />
      </div>
    </header>
  );
};

export default Header;
