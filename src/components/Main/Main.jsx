import React, { useState } from 'react';
import { Col, Row } from 'antd';
import Header from '../Header/Header';
import TodayWidget from '../Widgets/TodayWidget/TodayWidget';
// import ButtonCircle from '../Buttons/ButtonCircle';
import Theme from '../Theme/Theme';
import TimerWidget from '../Widgets/TimerWidget/TimerWidget';
import TodoWidget from '../Widgets/TodoWidget/TodoWidget';
import Navigation from '../Navigation/Navigation';
import ScenesWidget from '../Widgets/ScenesWidget/ScenesWidget';

import './Main.scss';

const Main = () => {
  const [isOpen, setIsOpen] = useState({
    timer: false,
    todo: false,
    scenes: false,
  });
  const [openToday, setOpenToday] = useState(false);
  const [isDayTheme, setIsDayTheme] = useState(true);
  const [isMute, setIsMute] = useState(false);
  const [currentScene, setCurrentScene] = useState('room');

  return (
    <div className='main'>
      <Row>
        <Header
          isMute={isMute}
          setIsMute={setIsMute}
          setOpenToday={setOpenToday}
          isDayTheme={isDayTheme}
          setIsDayTheme={setIsDayTheme}
        />
      </Row>

      <Row>
        <Col flex='auto' className='content'>
          {openToday && <TodayWidget />}
          {isOpen.timer && <TimerWidget />}
          {isOpen.todo && <TodoWidget />}
          {isOpen.scenes && (
            <ScenesWidget
              currentScene={currentScene}
              setCurrentScene={setCurrentScene}
            />
          )}
        </Col>

        <Col flex='100px' className='navigation'>
          <Navigation setIsOpen={setIsOpen} />
        </Col>
      </Row>

      <Theme currentScene={currentScene} isDayTheme={isDayTheme} />
      {/* <ButtonCircle name='rain' left='5' top='30' />
        <ButtonCircle name='birds' left='72' top='40' /> */}
    </div>
  );
};

export default Main;
