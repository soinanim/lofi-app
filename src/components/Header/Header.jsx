import React, { useEffect } from 'react';
import { Icon } from '@iconify/react';

import Button from '../Buttons/Button';
import ThemeSwitch from '../Buttons/ThemeSwitch/ThemeSwitch';
import DateTimeWidget from '../Widgets/DateTimeWidget/DateTimeWidget';
import MusicPlayer from '../MusicPlayer/MusicPlayer';
import './Header.scss';

const Header = ({ isMute, setIsMute, setIsOpen, setChangeTheme }) => {
  const muteAll = () => {
    setIsMute((state) => !state);
  };

  const widgetHandler = (widgetName) => {
    setIsOpen((state) => ({ ...state, [widgetName]: !state[widgetName] }));
  };
  useEffect(() => {
    [...document.querySelectorAll('audio')].forEach(
      (el) => (el.muted = isMute)
    );
  }, [isMute]);

  return (
    <header className='header'>
      {/* <div className={styles.logo}><img src={bird} alt="bird" /></div> */}
      <div className='control'>
        <div className='widget' onClick={() => widgetHandler('today')}>
          <DateTimeWidget isTime />
        </div>

        <ThemeSwitch setChangeTheme={setChangeTheme} />

        <MusicPlayer />

        <Button
          onClick={muteAll}
          size='small'
          title={`${isMute ? 'Unmute all' : 'Mute all'}`}
          children={
            <Icon
              width='18px'
              height='18px'
              icon={!isMute ? 'bxs:volume-mute' : 'bxs:volume'}
            />
          }
        />

        <Button
          type='button'
          size='medium'
          children='Login'
          onClick={() => widgetHandler('login')}
        />
      </div>
    </header>
  );
};

export default Header;
