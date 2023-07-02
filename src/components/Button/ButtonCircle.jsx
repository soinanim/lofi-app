import React, { useEffect, useState } from 'react';
import styles from './ButtonCircle.module.css';

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
    <div
      className={styles.popoverAction}
      style={{ left: left + '%', top: top + '%' }}>
      <div onClick={playAudio} className={styles.circleHover}>
        <audio src='audio/birds.mp3' loop className='audio-birds'></audio>
        <audio src='audio/rain.mp3' loop className='audio-rain'></audio>
      </div>

      <div className={styles.popoverCard}>
        <h5>{name}</h5>
        {isPlaying && (
          <div className={styles.levelInput}>
            <div className={styles.trackFull}>
              <div
                style={{ flex: `${volume} 1 0%`, display: 'initial' }}
                className={styles.track}></div>
            </div>
            <input
              defaultValue={volume}
              type='range'
              min='0'
              max='1'
              step='0.01'
              name='value'
              className={styles.input}
              onChange={changeVolume}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ButtonCircle;
