import React from 'react';
import './ScenesWidget.scss';
import { LineOutlined } from '@ant-design/icons';
import { SCENES } from '../../../utils/scenes.js';

const ScenesWidget = ({ setIsOpen, setCurrentTheme }) => {
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

        {Object.keys(SCENES).map((scene) => (
          <div className='scene' onClick={() => setCurrentTheme(scene)}>
            <img
              src={`/images/${scene}.jpg`}
              alt={scene}
              className='scene-img'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScenesWidget;
