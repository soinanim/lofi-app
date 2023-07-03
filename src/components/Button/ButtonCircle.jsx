import React, { useEffect, useState } from 'react';
import './ButtonCircle.scss';

const ButtonCircle = ({ name, left, top }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const playAudio = () => {
    setIsPlaying((state) => !state);
  };

  const changeVolume = (e) => {
    setVolume(e.target.value);
  };

  useEffect(() => {
    let audioBirds = document.querySelector('.audio-birds');
    let audioRain = document.querySelector('.audio-rain');

    if (name === 'birds') {
      isPlaying ? audioBirds.play() : audioBirds.pause();
      audioBirds.volume = volume;
    }

    if (name === 'rain') {
      isPlaying ? audioRain.play() : audioRain.pause();
      audioRain.volume = volume;
    }
  }, [isPlaying, name, volume]);

  return (
    <div className='popoverAction' style={{ left: left + '%', top: top + '%' }}>
      <div onClick={playAudio} className='circleHover'>
        <audio src='audio/birds.mp3' loop className='audio-birds'></audio>
        <audio src='audio/rain.mp3' loop className='audio-rain'></audio>
      </div>

      <div className='popoverCard'>
        <h5>{name}</h5>
        {isPlaying && (
          <div className='levelInput'>
            <div className='trackFull'>
              <div
                style={{ flex: `${volume} 1 0%`, display: 'initial' }}
                className='track'></div>
            </div>
            <input
              defaultValue={volume}
              type='range'
              min='0'
              max='1'
              step='0.01'
              name='value'
              className='input'
              onChange={changeVolume}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ButtonCircle;
