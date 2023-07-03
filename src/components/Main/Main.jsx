import React, { useState } from 'react';
import Header from '../Header/Header';
import TodayWidget from '../TodayWidget/TodayWidget';
import ButtonCircle from '../Button/ButtonCircle';

import './Main.scss';

const Main = () => {
  const [openWidget, setOpenWidget] = useState(false);

  return (
    <div className='main'>
      <Header openWidget={openWidget} setOpenWidget={setOpenWidget} />
      {openWidget && <TodayWidget />}

      <video
        src='/videos/room-day.mp4'
        autoPlay
        loop
        muted
        playsInline
        className='video'></video>

      <ButtonCircle name='rain' left='5' top='30' />
      <ButtonCircle name='birds' left='72' top='40' />
    </div>
  );
};

export default Main;
