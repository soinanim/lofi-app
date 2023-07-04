import React from 'react';
import Button from '../Button/Button';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import DateTimeWidget from '../DateTimeWidget/DateTimeWidget';
import './Header.scss';

const Header = ({ openWidget, setOpenWidget, changeTheme, setChangeTheme }) => {
  return (
    <header className='header'>
      <div></div>
      {/* <div className={styles.logo}><img src={bird} alt="bird" /></div> */}
      <div className='control'>
        <div className='widget' onClick={() => setOpenWidget(!openWidget)}>
          <DateTimeWidget isTime />
        </div>

        <ThemeSwitch changeTheme={changeTheme} setChangeTheme={setChangeTheme}/>

        <div>music player</div>
        <Button type='button' text='Login' />
      </div>
    </header>
  );
};

export default Header;
