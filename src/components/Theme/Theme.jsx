import React from 'react';
import classNames from 'classnames';
import './Theme.scss';
import { useEffect } from 'react';
import { useState } from 'react';

const Theme = ({ changeTheme, currentTheme }) => {
  const [defaultTheme, setDefaultTheme] = useState('');
  const [defaultDarkTheme, setDefaultDarkTheme] = useState('');

  useEffect(() => {
    if (!currentTheme) {
      setDefaultTheme('station');
      setDefaultDarkTheme('station-night');
    } else {
      setDefaultTheme(currentTheme);
      setDefaultDarkTheme(currentTheme + '-night');
    }
  }, [currentTheme]);

  return (
    <div className='theme'>
      <video
        src={`/videos/${defaultTheme}.mp4`}
        autoPlay
        loop
        muted
        playsInline
        className={classNames({
          video: true,
          isVisible: !changeTheme,
          isHidden: changeTheme,
        })}
      />

      <video
        src={`/videos/${defaultDarkTheme}.mp4`}
        autoPlay
        loop
        muted
        playsInline
        className={classNames({
          video: true,
          isVisible: changeTheme,
          isHidden: !changeTheme,
        })}
      />
    </div>
  );
};

export default Theme;
