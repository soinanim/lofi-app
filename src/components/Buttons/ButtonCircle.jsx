import React, { useEffect, useState } from 'react';
import VolumeRange from '../Inputs/VolumeRange/VolumeRange';
import './ButtonCircle.scss';

const ButtonCircle = ({ name, left, top }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const playStopAudio = () => {
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
      <div onClick={playStopAudio} className='circleHover'>
        <audio src='audio/birds.mp3' loop className='audio-birds'></audio>
        <audio src='audio/rain.mp3' loop className='audio-rain'></audio>
        <audio src='audio/cat.mp3' loop className='audio-cat'></audio>
        <audio src='audio/comfort.mp3' loop className='audio-comfort'></audio>
        <audio src='audio/fire.mp3' loop className='audio-fire'></audio>
        <audio src='audio/plastinc.mp3' loop className='audio-plastinc'></audio>
        <audio src='audio/sea.mp3' loop className='audio-sea'></audio>
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
