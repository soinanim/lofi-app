import React from "react";
import classNames from "classnames";
import "./Theme.scss";

const Theme = ({ changeTheme }) => {
  return (
    <div className="theme">
      <video
        src="/videos/room-day.mp4"
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
        src="/videos/room-night.mp4"
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
