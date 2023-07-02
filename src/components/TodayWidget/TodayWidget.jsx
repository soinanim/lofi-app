import React from 'react';
import styles from './TodayWidget.module.css';
import Draggable from 'react-draggable';
import TimeWidget from '../DateTimeWidget/DateTimeWidget';

// const greeting = {morning, afternoon, evening}
const TodayWidget = () => {
  return (
    <Draggable>
      <div className={styles.move}>
        <div className={styles.first}>
          <p className={styles.heading}>Good evening</p>

          <div className={styles.heading}>
            <TimeWidget isTime />
          </div>
        </div>
        <p className={styles.paragraph}>
          It's <TimeWidget isDate />
        </p>
      </div>
    </Draggable>
  );
};

export default TodayWidget;
