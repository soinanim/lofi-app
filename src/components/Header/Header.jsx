import React from 'react';
import Button from '../Button/Button';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import styles from './Header.module.css';
import DateTimeWidget from '../DateTimeWidget/DateTimeWidget';

const Header = ({ openWidget, setOpenWidget }) => {
  return (
    <header className={styles.header}>
      <div></div>
      {/* <div className={styles.logo}><img src={bird} alt="bird" /></div> */}
      <div className={styles.control}>
        <div
          className={styles.widget}
          onClick={() => setOpenWidget(!openWidget)}>
          <DateTimeWidget isTime />
        </div>

        <ThemeSwitch />

        <div>music player</div>
        <Button type='button' text='Login' />
      </div>
    </header>
  );
};

export default Header;
