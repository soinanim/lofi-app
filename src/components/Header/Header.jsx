import React from 'react';
import { Icon } from '@iconify/react';

import Button from '../Buttons/Button';
import ThemeSwitch from '../Buttons/ThemeSwitch/ThemeSwitch';
import DateTimeWidget from '../Widgets/DateTimeWidget/DateTimeWidget';
import MusicPlayer from '../MusicPlayer/MusicPlayer';
import './Header.scss';

const Header = ({
  openWidget,
  setOpenWidget,
  changeTheme,
  setChangeTheme,
  openTimer,
  setOpenTimer,
  openTodo,
  setOpenTodo,
}) => {
  return (
    <header className='header'>
      <div></div>
      {/* <div className={styles.logo}><img src={bird} alt="bird" /></div> */}
      <div className='control'>
        <div className='widget' onClick={() => setOpenWidget(!openWidget)}>
          <DateTimeWidget isTime />
        </div>
        <Button
          type='button'
          size='medium'
          children='Timer'
          onClick={() => setOpenTimer(!openTimer)}
        />

        <ThemeSwitch
          changeTheme={changeTheme}
          setChangeTheme={setChangeTheme}
        />

        <MusicPlayer />

        <Button
          size='small'
          children={<Icon width='18px' height='18px' icon='bxs:volume-mute' />}
        />

        <Button
          type='button'
          size='medium'
          children='Todo'
          onClick={() => setOpenTodo(!openTodo)}
        />
        <Button type='button' size='medium' children='Login' />
      </div>
    </header>
  );
};

export default Header;
