import React, { useEffect, useState } from "react";
import styles from "./Theme.module.scss";
const Theme = ({ changeTheme }) => {
  const [nameVideo, setNameVideo] = useState("/videos/room-day.mp4");

  return (
    <div className={styles.theme}>
      <video
        src="/videos/room-day.mp4"
        autoPlay
        loop
        muted
        playsInline
        className={styles.video}
        style={{ visibility: changeTheme ? "visible" : "hidden" }}
      />

      <video
        src="/videos/room-night.mp4"
        autoPlay
        loop
        muted
        playsInline
        className={styles.video}
        style={{ visibility: !changeTheme ? "visible" : "hidden" }}
      />
    </div>
  );
};

export default Theme;
