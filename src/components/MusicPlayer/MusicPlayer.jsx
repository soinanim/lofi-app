import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import './MusicPlayer.scss';
import Button from '../Buttons/Button';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = () => {
    setIsPlaying(!isPlaying);
  };

  const stopAudio = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className='player'>
      <Button
        size='small'
        children={
          <Icon
            width='18px'
            height='18px'
            icon='tabler:player-track-prev-filled'
          />
        }
        className='prev'
      />

      <Button
        onClick={isPlaying ? stopAudio : playAudio}
        size='small'
        children={
          isPlaying ? (
            <Icon
              width='18px'
              height='18px'
              icon='tabler:player-pause-filled'
            />
          ) : (
            <Icon width='20px' height='20px' icon='tabler:player-play-filled' />
          )
        }
        className='play'
      />

      <Button
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
        size='small'
        children={<Icon width='18px' height='18px' icon='bxs:volume-full' />}
        className='volume'
      />
    </div>
  );
};

export default MusicPlayer;
