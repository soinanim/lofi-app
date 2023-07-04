import { React, useState } from 'react';
import Draggable from 'react-draggable';
import TimeWidget from '../DateTimeWidget/DateTimeWidget';
import './TodayWidget.scss';

// const greeting = {morning, afternoon, evening}
const TodayWidget = () => {
  const [colorBg, setColorBg] = useState('rgba(0,0,0,0.3)');
  const [color, setColor] = useState('#fff');

  function changeColor() {
    setColorBg('rgba(255,255,255,0.4)');
    setColor('#000');
  }

  function stopDrag() {
    setColorBg('rgba(0,0,0,0.3)');
    setColor('#fff');
  }

  return (
    <Draggable onDrag={changeColor} onStop={stopDrag}>
      <div className='move' style={{ backgroundColor: colorBg, color: color }}>
        <div className='first'>
          <h3>Good evening</h3>
          <TimeWidget isTime />
        </div>
        <h4>
          It's <TimeWidget isDate />
        </h4>
      </div>
    </Draggable>
  );
};

export default TodayWidget;
