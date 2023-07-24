import React from 'react';
import { SCENES } from '../../../utils/scenes';
import classNames from 'classnames';

import './ScenesWidget.scss';

const ScenesWidget = ({ currentScene, setCurrentScene }) => {
  return (
    <div className='scenes'>
      <div className='container'>
        <h4>Scenes</h4>

        {Object.keys(SCENES).map((item) => (
          <div className='scene' onClick={() => setCurrentScene(item)}>
            <img
              src={SCENES[item].image.day}
              alt='background'
              className={classNames({
                'scene-img': true,
                isActive: currentScene === item,
              })}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScenesWidget;
