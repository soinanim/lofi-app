import React from "react";
import Button from "../Button/Button";
import ThemeSwitch from "../Button/ThemeSwitch/ThemeSwitch";

import "./Header.scss";
import DateTimeWidget from "../Widgets/DateTimeWidget/DateTimeWidget";

const Header = ({
  openWidget,
  setOpenWidget,
  changeTheme,
  setChangeTheme,
  openTimer,
  setOpenTimer,
  openTodo,
  setOpenTodo
}) => {
  return (
    <header className="header">
      <div></div>
      {/* <div className={styles.logo}><img src={bird} alt="bird" /></div> */}
      <div className="control">
        <div className="widget" onClick={() => setOpenWidget(!openWidget)}>
          <DateTimeWidget isTime />
        </div>
        <Button
          type="button"
          text="Timer"
          click={() => setOpenTimer(!openTimer)}
        ></Button>

        <ThemeSwitch
          changeTheme={changeTheme}
          setChangeTheme={setChangeTheme}
        />
        <Button type="button" text="Todo" click={() => setOpenTodo(!openTodo)}/>
        <div>music player</div>
        <Button type="button" text="Login" />
      </div>
    </header>
  );
};

export default Header;
