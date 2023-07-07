import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { Icon } from '@iconify/react';
import Button from '../Buttons/Button';
import { tracks } from './utils.js';

import './MusicPlayer.scss';
import VolumeRange from '../Inputs/VolumeRange/VolumeRange';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [isVolume, setIsVolume] = useState(false);

  const playStopAudio = () => {
    setIsPlaying(!isPlaying);
  };

  const playNext = () => {
    const newIndex = currentTrack < tracks.length - 1 ? currentTrack + 1 : 0;
    setCurrentTrack(newIndex);
  };

  const playPrev = () => {
    const newIndex = currentTrack > 0 ? currentTrack - 1 : tracks.length - 1;
    setCurrentTrack(newIndex);
  };

  const changeVolume = (e) => {
    setVolume(e.target.value);
  };

  useEffect(() => {
    let audio = document.querySelector('#track');
    isPlaying ? audio.play() : audio.pause();
    audio.volume = volume;
  }, [isPlaying, volume, currentTrack]);

  return (
    <div className='player'>
      <div className='buttons'>
        <audio id='track' src={tracks[currentTrack]} />

        <Button
          onClick={playPrev}
          size='small'
          children={
            <Icon
              width='18px'
              height='18px'
              icon='tabler:player-track-prev-filled'
            />
          }
          className={classNames('prev', { isVolume })}
        />

        <Button
          onClick={playStopAudio}
          size='small'
          children={
            isPlaying ? (
              <Icon
                width='18px'
                height='18px'
                icon='tabler:player-pause-filled'
              />
            ) : (
              <Icon
                width='20px'
                height='20px'
                icon='tabler:player-play-filled'
              />
            )
          }
          className='play'
        />

        <Button
          onClick={playNext}
          size='small'
          children={
            <Icon
              width='18px'
              height='18px'
              icon='tabler:player-track-next-filled'
            />
          }
          className='next'
        />

        <Button
          onClick={() => setIsVolume(!isVolume)}
          size='small'
          children={<Icon width='18px' height='18px' icon='bxs:volume-full' />}
          className={classNames('volume', { isVolume })}
        />
      </div>

      <div className={classNames('card', { isVisible: isVolume })}>
        <VolumeRange volume={volume} changeVolume={changeVolume} />
      </div>
    </div>
  );
};

export default MusicPlayer;
