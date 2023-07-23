import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { SCENES } from '../../utils/scenes';
import ButtonCircle from '../Buttons/ButtonCircle';

import './Theme.scss';

const Theme = ({ currentScene, isDayTheme }) => {
  const [background, setBackground] = useState(SCENES[currentScene].video);

  useEffect(() => {
    setBackground(SCENES[currentScene].video);
  }, [currentScene]);

  return (
    <div className='background'>
      <div className='theme'>
        {Object.keys(SCENES).map((item) => (
          <>
            <video
              src={SCENES[item].video.day}
              autoPlay
              loop
              muted
              playsInline
              className={classNames({
                video: true,
                isVisible:
                  isDayTheme && SCENES[item].video.day === background.day,
                isHidden:
                  !isDayTheme || SCENES[item].video.day !== background.day,
              })}
            />
            <video
              src={SCENES[item].video.night}
              autoPlay
              loop
              muted
              playsInline
              className={classNames({
                video: true,
                isVisible:
                  !isDayTheme && SCENES[item].video.night === background.night,
                isHidden:
                  isDayTheme || SCENES[item].video.night !== background.night,
              })}
            />
          </>
        ))}
      </div>

      <ButtonCircle name='rain' left='5' top='30' />
      <ButtonCircle name='birds' left='72' top='40' />
    </div>
  );
};

export default Theme;
