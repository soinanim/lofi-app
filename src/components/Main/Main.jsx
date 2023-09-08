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
import NotesWidget from "../Widgets/NotesWidget/NotesWidget";
import { useEffect } from "react";
import Login from "../Modals/Login/Login";

const Main = () => {
  const [isOpen, setIsOpen] = useState({
    timer: false,
    todo: false,
    scenes: false,
    notes: false,
    login: false,
    today: false,
  });
  const [changeTheme, setChangeTheme] = useState(0);
  const [isMute, setIsMute] = useState(false);
  const [isTheme, setTheme] = useState("room");
  return (
    <main className="main">
      <Row>
        <Header
          isMute={isMute}
          setIsMute={setIsMute}
          setIsOpen={setIsOpen}
          changeTheme={changeTheme}
          setChangeTheme={setChangeTheme}
        />
      </Row>

      <Row>
        <Col flex="auto" className="content">
          {isOpen.login && <Login setIsOpen={setIsOpen} />}
          {isOpen.today && <TodayWidget setIsOpen={setIsOpen} />}
          {isOpen.timer && <TimerWidget setIsOpen={setIsOpen} />}
          {isOpen.todo && <TodoWidget setIsOpen={setIsOpen} />}
          {isOpen.scenes && (
            <ScenesWidget setIsOpen={setIsOpen} setTheme={setTheme} />
          )}
          {isOpen.notes && <NotesWidget setIsOpen={setIsOpen} />}
        </Col>

        <Col flex="100px" className="navigation">
          <Navigation setIsOpen={setIsOpen} />
        </Col>
      </Row>

      <div className="background">
        <Theme
          changeTheme={changeTheme}
          isTheme={isTheme}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
        {isTheme === "room" && (
          <div>
            <ButtonCircle name="rain" left="5" top="30" />
            <ButtonCircle name="birds" left="72" top="40" />
          </div>
        )}
        {isTheme === "cozy-house" && (
          <div>
            <ButtonCircle name="rain" left="25" top="20" />
            <ButtonCircle name="cat" left="2" top="50" />
            <ButtonCircle name="fire" left="80" top="60" />
          </div>
        )}
        {isTheme === "retro-disc" && (
          <div>
            <ButtonCircle name="plastinc" left="57" top="75" />
            <ButtonCircle name="rain" left="20" top="20" />
          </div>
        )}
        {isTheme === "station" && (
          <div>
            <ButtonCircle name="sea" left="57" top="75" />
            <ButtonCircle name="comfort" left="20" top="20" />
          </div>
        )}
      </div>
    </main>
  );
};

export default Main;
