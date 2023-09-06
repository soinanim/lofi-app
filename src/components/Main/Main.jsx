import React, { useState } from "react";
import { Col, Row } from "antd";
import Header from "../Header/Header";
import TodayWidget from "../Widgets/TodayWidget/TodayWidget";
import ButtonCircle from "../Buttons/ButtonCircle";
import Theme from "../Theme/Theme";
import TimerWidget from "../Widgets/TimerWidget/TimerWidget";
import TodoWidget from "../Widgets/TodoWidget/TodoWidget";
import Navigation from "../Navigation/Navigation";

import "./Main.scss";
import ScenesWidget from "../Widgets/ScenesWidget/ScenesWidget";

const Main = () => {
  const [isOpen, setIsOpen] = useState({
    timer: false,
    todo: false,
    scenes: false,
  });
  const [openToday, setOpenToday] = useState(false);
  const [changeTheme, setChangeTheme] = useState(0);
  const [isMute, setIsMute] = useState(false);

  return (
    <main className="main">
      <Row>
        <Header
          isMute={isMute}
          setIsMute={setIsMute}
          setOpenToday={setOpenToday}
          changeTheme={changeTheme}
          setChangeTheme={setChangeTheme}
        />
      </Row>

      <Row>
        <Col flex="auto" className="content">
          {openToday && <TodayWidget />}
          {isOpen.timer && <TimerWidget />}
          {isOpen.todo && <TodoWidget />}
          {isOpen.scenes && <ScenesWidget />}
        </Col>

        <Col flex="100px" className="navigation">
          <Navigation setIsOpen={setIsOpen} />
        </Col>
      </Row>

      <div className="background">
        <Theme changeTheme={changeTheme} />
        <ButtonCircle name="rain" left="5" top="30" />
        <ButtonCircle name="birds" left="72" top="40" />
      </div>
    </main>
  );
};

export default Main;
