import React, { useEffect, useState } from 'react';
import './ButtonCircle.scss';
import VolumeRange from '../Inputs/VolumeRange/VolumeRange';

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
    let audio = document.querySelector(`.audio-${name}`);
    isPlaying ? audio.play() : audio.pause();
    audio.volume = volume;
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
          <VolumeRange volume={volume} changeVolume={changeVolume} />
        )}
      </div>
    </div>
  );
};

export default ButtonCircle;
