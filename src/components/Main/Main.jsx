import React, { useState } from 'react'
import styles from "./Main.module.css";
import Header from '../Header/Header';
import TodayWidget from '../TodayWidget/TodayWidget';
const Main = () => {
  const [openWidget, setOpenWidget] = useState(false);

  return (
    <div className={styles.main}>
          <video
        src="/videos/room-night.mp4"
        autoPlay
        loop
        muted
        playsInline
        className={styles.video}
      ></video>
      <Header openWidget={openWidget} setOpenWidget={setOpenWidget} />
      {openWidget && <TodayWidget />}
    </div>
  )
}

export default Main