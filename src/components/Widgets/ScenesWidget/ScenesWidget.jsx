import React from 'react';
import './ScenesWidget.scss';
import { LineOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const ScenesWidget = ({ setIsOpen, setTheme }) => {
  const widgetHandler = (widgetName) => {
    setIsOpen((state) => ({ ...state, [widgetName]: !state[widgetName] }));
  };

  return (
    <div className='scenes'>
      <div className='container'>
        <div className='row'>
          <h2>Scenes</h2>
          <LineOutlined
            className='close'
            onClick={() => widgetHandler('scenes')}
          />
        </div>
        <div className='scene' onClick={() => setTheme('cozy-house')}>
          <img
            src='/images/cozy-house.jpg'
            alt='cozy-house'
            className='scene-img'
          />
        </div>
        <div className='scene' onClick={() => setTheme('retro-disc')}>
          <img
            src='/images/retro-disc.jpg'
            alt='retro-disc'
            className='scene-img'
          />
        </div>
        <div className='scene' onClick={() => setTheme('station')}>
          <img src='/images/station.jpg' alt='station' className='scene-img' />
        </div>
        <div className='scene' onClick={() => setTheme('shrine')}>
          <img src='/images/shrine.jpg' alt='shrine' className='scene-img' />
        </div>
        <Button ghost onClick={() => setTheme('room')}>
          Default
        </Button>
      </div>
    </div>
  );
};

export default ScenesWidget;
