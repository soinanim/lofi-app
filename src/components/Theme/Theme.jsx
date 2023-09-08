import React from "react";
import classNames from "classnames";
import "./Theme.scss";
import { useEffect } from "react";
import { useState } from "react";

const Theme = ({ changeTheme, isTheme }) => {
  const [defaultTheme, setDefaultTheme] = useState("");
  const [defaultDarkTheme, setDefaultDarkTheme] = useState("");

  useEffect(() => {
    if (!isTheme) {
      setDefaultTheme("room");
      setDefaultDarkTheme("room-night");
    } else {
      setDefaultTheme(isTheme);
      setDefaultDarkTheme(isTheme + "-night");
    }
  }, [isTheme]);

  return (
    <div className="theme">
      <video
        src={`/videos/${defaultTheme}.mp4`}
        autoPlay
        loop
        muted
        playsInline
        className={classNames({
          video: true,
          isVisible: !changeTheme,
          isHidden: changeTheme,
        })}
      />

      <video
        src={`/videos/${defaultDarkTheme}.mp4`}
        autoPlay
        loop
        muted
        playsInline
        className={classNames({
          video: true,
          isVisible: changeTheme,
          isHidden: !changeTheme,
        })}
      />
    </div>
  );
};

export default Theme;
