import React, { useState } from 'react';
import Header from '../Header/Header';
import TodayWidget from '../Widgets/TodayWidget/TodayWidget';
import ButtonCircle from '../Buttons/ButtonCircle';

import './Main.scss';
import Theme from '../Thems/Theme';
import TimerWidget from '../Widgets/TimerWidget/TimerWidget';
import TodoWidget from '../Widgets/TodoWidget/TodoWidget';

const Main = () => {
  const [openWidget, setOpenWidget] = useState(false);
  const [changeTheme, setChangeTheme] = useState(true);
  const [openTimer, setOpenTimer] = useState(false);
  const [openTodo, setOpenTodo] = useState(false);

  return (
    <div className='main'>
      <Header
        openWidget={openWidget}
        setOpenWidget={setOpenWidget}
        changeTheme={changeTheme}
        setChangeTheme={setChangeTheme}
        openTimer={openTimer}
        setOpenTimer={setOpenTimer}
        openTodo={openTodo}
        setOpenTodo={setOpenTodo}
      />

      {openWidget && <TodayWidget />}
      {openTimer && <TimerWidget />}
      {openTodo && <TodoWidget />}

      <Theme changeTheme={changeTheme} />
      <ButtonCircle name='rain' left='5' top='30' />
      <ButtonCircle name='birds' left='72' top='40' />
    </div>
  );
};

export default Main;
