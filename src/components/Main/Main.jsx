import React, { useState } from 'react'
import styles from "./Main.module.css";
import Header from '../Header/Header';
import TodayWidget from '../TodayWidget/TodayWidget';
import ButtonCircle from '../Button/ButtonCircle';
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
      <ButtonCircle name="Forest rain" left="5" top="30"/>
      <ButtonCircle name="Window birds" left="72" top="40"/>
      <Header openWidget={openWidget} setOpenWidget={setOpenWidget} />
      {openWidget && <TodayWidget />}
    </div>
  )
}

export default Main