import { React } from 'react';
import Draggable from 'react-draggable';
import TimeWidget from '../DateTimeWidget/DateTimeWidget';
import { LineOutlined } from '@ant-design/icons';

import './TodayWidget.scss';

// TODO: greeting at different times of the day
// const greeting = {morning, afternoon, evening}
const TodayWidget = ({ widgetHandler }) => {
  // const [colorBg, setColorBg] = useState('rgba(0,0,0,0.3)');
  // const [color, setColor] = useState('#fff');

  // function changeColor() {
  //   setColorBg('rgba(255,255,255,0.4)');
  //   setColor('#000');
  // }

  // function stopDrag() {
  //   setColorBg('rgba(0,0,0,0.3)');
  //   setColor('#fff');
  // }

  return (
    // <Draggable onDrag={changeColor} onStop={stopDrag}>
    <Draggable>
      <div className='move'>
        <div className='first'>
          <h3>Good evening</h3>
          <h3>
            <TimeWidget isTime />
          </h3>
          <LineOutlined
            className='close'
            onClick={() => widgetHandler('today')}
          />
        </div>
        <h4>
          It's <TimeWidget isDate />
        </h4>
      </div>
    </Draggable>
  );
};

export default TodayWidget;
