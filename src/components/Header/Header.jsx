import React, { useState } from "react";
import styles from "./Header.module.css";
import Button from "../Button/Button";
import { Switch } from "antd";
const Header = () => {
  const [checked, setChecked] = useState(false)
  const handleChange = (checked) => {
    setChecked(checked)
    console.log(`Switch is ${checked ? "on" : "off"}`);
  };

  return (
    <div className={styles.header}>
      <div>Logo</div>
      <div className={styles.control}>
        <div className={styles.switch}>
          {checked ? (<p>On</p>) : (<p>Off</p>)}
        <Switch onChange={handleChange} />
        </div>
        
        <div>music player</div>
        <Button text="Login" />
      </div>
    </div>
  );
};

export default Header;
