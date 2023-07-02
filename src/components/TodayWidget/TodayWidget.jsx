import {React, useState}from 'react';
import styles from './TodayWidget.module.css';
import Draggable from 'react-draggable';
import TimeWidget from '../DateTimeWidget/DateTimeWidget';

// const greeting = {morning, afternoon, evening}
const TodayWidget = () => {
 const [colorBg, setColorBg] = useState('rgba(0,0,0,0.3)')
 const [color, setColor] = useState('#fff')
function changeColor() {
  setColorBg('rgba(255,255,255,0.4)')
  setColor('#000')
}

function stopDrag() {
  setColorBg('rgba(0,0,0,0.3)')
  setColor('#fff')
}

  return (
    <Draggable onDrag={changeColor} onStop={stopDrag}>
      <div className={styles.move} style={{backgroundColor: colorBg, color:  color}}>
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
