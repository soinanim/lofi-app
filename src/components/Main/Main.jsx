import React, { useState } from "react";
import Header from "../Header/Header";
import TodayWidget from "../Widgets/TodayWidget/TodayWidget";
import ButtonCircle from "../Button/ButtonCircle";

import "./Main.scss";
import Theme from "../Thems/Theme";

const Main = () => {
  const [openWidget, setOpenWidget] = useState(false);
  const [changeTheme, setChangeTheme] = useState(true);
  return (
    <div className="main">
      <Header
        openWidget={openWidget}
        setOpenWidget={setOpenWidget}
        changeTheme={changeTheme}
        setChangeTheme={setChangeTheme}
      />
      {openWidget && <TodayWidget />}
      <Theme changeTheme={changeTheme}/>
      <ButtonCircle name="rain" left="5" top="30" />
      <ButtonCircle name="birds" left="72" top="40" />
    </div>
  );
};

export default Main;
