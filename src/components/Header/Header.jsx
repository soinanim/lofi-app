import React from 'react';
import styles from './Header.module.css';
import Button from '../Button/Button';

const Header = () => {
  return (
    <div className={styles.header}>
      <div>Logo</div>
      <div className={styles.control}>
        <div>theme switch</div>
        <div>music player</div>
        <Button text='Login' />
      </div>
    </div>
  );
};

export default Header;
