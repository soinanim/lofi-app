import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

import Button from "../Buttons/Button";
import ThemeSwitch from "../Buttons/ThemeSwitch/ThemeSwitch";
import DateTimeWidget from "../Widgets/DateTimeWidget/DateTimeWidget";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import "./Header.scss";

const Header = ({
  isMute,
  setIsMute,
  setChangeTheme,
  widgetHandler,
  setOpenArtist,
}) => {
  const [logined, setLogined] = useState(false);
  const [user, setUser] = useState([]);
  const isLogin = JSON.parse(localStorage.getItem("login"));

  useEffect(() => {
    if (isLogin) {
      setLogined(true);
      setUser(isLogin);
    } else {
      setLogined(false);
    }
  }, [isLogin]);

  const muteAll = () => {
    setIsMute((state) => !state);
  };

  useEffect(() => {
    [...document.querySelectorAll("audio")].forEach(
      (el) => (el.muted = isMute)
    );
  }, [isMute]);

  return (
    <header className="header">
      {/* <div className={styles.logo}><img src={bird} alt="bird" /></div> */}
      <div className="control">
        <div className="time-widget" onClick={() => widgetHandler("today")}>
          <DateTimeWidget isTime />
        </div>

        <ThemeSwitch setChangeTheme={setChangeTheme} />

        <MusicPlayer setOpenArtist={setOpenArtist} />

        <Button
          onClick={muteAll}
          size="small"
          title={`${isMute ? "Unmute all" : "Mute all"}`}
          children={
            <Icon
              width="18px"
              height="18px"
              icon={!isMute ? "bxs:volume-mute" : "bxs:volume"}
            />
          }
        />

        <Button
          type="button"
          size="medium"
          children={logined ? "Profile" : "Login"}
          onClick={() => widgetHandler(logined ? "profile" : "login")}
        />
      </div>
    </header>
  );
};

export default Header;
