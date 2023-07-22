import React, { useState } from 'react';
import { Col, Row } from 'antd';
import Header from '../Header/Header';
import TodayWidget from '../Widgets/TodayWidget/TodayWidget';
import ButtonCircle from '../Buttons/ButtonCircle';
import Theme from '../Theme/Theme';
import TimerWidget from '../Widgets/TimerWidget/TimerWidget';
import TodoWidget from '../Widgets/TodoWidget/TodoWidget';
import Navigation from '../Navigation/Navigation';

import './Main.scss';

const Main = () => {
  const [isOpen, setIsOpen] = useState({
    timer: false,
    todo: false,
    scenes: false,
  });
  const [openToday, setOpenToday] = useState(false);
  const [changeTheme, setChangeTheme] = useState(true);
  const [isMute, setIsMute] = useState(false);

  return (
    <div className='main'>
      <Row>
        <Header
          isMute={isMute}
          setIsMute={setIsMute}
          setOpenToday={setOpenToday}
          setChangeTheme={setChangeTheme}
        />
      </Row>

      <Row>
        <Col flex='auto' className='content'>
          {openToday && <TodayWidget />}
          {isOpen.timer && <TimerWidget />}
          {isOpen.todo && <TodoWidget />}
          {isOpen.scenes && (
            <div className='scenes'>
              <div className='container'>
                <h4>Scenes</h4>

                <div className='scene'>
                  <img
                    src='/images/cozy-house.jpg'
                    alt=''
                    className='scene-img'
                  />
                </div>
                <div className='scene'>
                  {' '}
                  <img
                    src='/images/retro-disc-day.jpg'
                    alt=''
                    className='scene-img'
                  />
                </div>
                <div className='scene'>
                  <img
                    src='/images/station-day.jpg'
                    alt=''
                    className='scene-img'
                  />
                </div>
              </div>
            </div>
          )}
        </Col>

        <Col flex='100px' className='navigation'>
          <Navigation setIsOpen={setIsOpen} />
        </Col>
      </Row>

      <div className='background'>
        <Theme changeTheme={changeTheme} />
        <ButtonCircle name='rain' left='5' top='30' />
        <ButtonCircle name='birds' left='72' top='40' />
      </div>
    </div>
  );
};

export default Main;
