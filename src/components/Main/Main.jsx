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
  const [openToday, setOpenToday] = useState(false);
  const [changeTheme, setChangeTheme] = useState(true);
  const [openTimer, setOpenTimer] = useState(false);
  const [openTodo, setOpenTodo] = useState(false);
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
          {openTimer && <TimerWidget />}
          {openTodo && <TodoWidget />}
        </Col>

        <Col flex='100px' className='navigation'>
          <Navigation setOpenTimer={setOpenTimer} setOpenTodo={setOpenTodo} />
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
