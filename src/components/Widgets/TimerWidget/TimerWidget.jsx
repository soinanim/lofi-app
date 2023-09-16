import React, { useState } from 'react';
import Draggable from 'react-draggable';
import Button from '../../Buttons/Button';
import { Icon } from '@iconify/react';
import { useTimer } from 'react-timer-hook';
import { LineOutlined } from '@ant-design/icons';

import './TimerWidget.scss';

const TimerWidget = ({ widgetHandler }) => {
  const TIME = new Date();
  TIME.setSeconds(TIME.getSeconds() + 300); // 5 minutes timer

  const [newTime, setNewTime] = useState(TIME);

  const { seconds, minutes, hours, isRunning, start, pause, resume, restart } =
    useTimer({
      expiryTimestamp: TIME,
      autoStart: false,
    });

  const [isStarted, setStarted] = useState(false);

  const startTimer = () => {
    if (isStarted) {
      resume();
    } else {
      start();
      setStarted(true);
    }
  };

  const addFiveMin = () => {
    let date = new Date(newTime);
    date.setSeconds(date.getSeconds() + 300);

    setNewTime(date);

    restart(date);
  };

  const restartTimer = () => {
    setNewTime(TIME);

    restart(TIME);
  };


  return (
    <Draggable>
      <div className='timer widget'>
        <div className='time'>
          <span>{('0' + hours).slice(-2)} </span>
          <span>:</span>
          <span>{('0' + minutes).slice(-2)}</span>
          <span> : </span>
          <span>{('0' + seconds).slice(-2)}</span>
        </div>
        <LineOutlined
          className='close'
          onClick={() => widgetHandler('timer')}
        />
        <div className='buttons'>
          <Button
            onClick={addFiveMin}
            size='small'
            children={
              <Icon icon='pajamas:plus' color='#fff' width='25' height='25' />
            }
          />

          {isRunning ? (
            <Button
              onClick={pause}
              size='small'
              children={
                <Icon
                  icon='solar:pause-circle-bold-duotone'
                  color='#ffac4d'
                  width='35'
                  height='35'
                />
              }
            />
          ) : (
            <Button
              onClick={startTimer}
              size='small'
              children={
                <Icon
                  icon='solar:play-circle-bold-duotone'
                  color='#ffac4d'
                  width='55px'
                  height='55px'
                />
              }
            />
          )}

          <Button
            onClick={restartTimer}
            size='small'
            children={
              <Icon
                icon='pajamas:repeat'
                width='18'
                height='18'
                hFlip={true}
                color='#fff'
              />
            }
          />
        </div>
      </div>
    </Draggable>
  );
};

export default TimerWidget;
