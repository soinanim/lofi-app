import React from 'react';
import './VolumeRange.scss';

const VolumeRange = ({ volume, changeVolume }) => {
  return (
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
  );
};

export default VolumeRange;
