import React, { useState } from 'react';
import Draggable from 'react-draggable';
import VolumeRange from '../../Inputs/VolumeRange/VolumeRange';
import { LineOutlined } from '@ant-design/icons';

import './MixerWidget.scss';

let SOUNDS = [
  {
    title: 'Birds',
    name: 'birds',
  },
  {
    title: 'Night Birds',
    name: 'comfort',
  },
  {
    title: 'Cat',
    name: 'cat',
  },
  {
    title: 'Bonfire',
    name: 'bonfire',
  },
  {
    title: 'Fireplace',
    name: 'fireplace',
  },
  {
    title: 'Forest Night',
    name: 'forest_night',
  },
  {
    title: 'Keyboard',
    name: 'keyboard',
  },
  {
    title: 'City Traffic',
    name: 'city_traffic',
  },

  {
    title: 'People Talk',
    name: 'people_talk_inside',
  },
  {
    title: 'Rain',
    name: 'rain',
  },
  {
    title: 'Thunders',
    name: 'thunders',
  },
  {
    title: 'Wind',
    name: 'wind',
  },
  {
    title: 'River',
    name: 'river',
  },
  {
    title: 'Sea',
    name: 'sea',
  },
  {
    title: 'Ocean',
    name: 'ocean',
  },
  {
    title: 'Waves',
    name: 'waves',
  },
  {
    title: 'Underwater',
    name: 'underwater',
  },
  {
    title: 'Train',
    name: 'train',
  },
  {
    title: 'Airplane',
    name: 'airplane',
  },
  {
    title: 'Vinyl',
    name: 'vinyl',
  },
  {
    title: 'Deepspace',
    name: 'deepspace',
  },
  {
    title: 'White Noise',
    name: 'white-noise',
  },

  {
    title: 'Brown Noise',
    name: 'brown-noise',
  },
  {
    title: 'Pink Noise',
    name: 'pink-noise',
  },
];

const MixerWidget = ({ widgetHandler }) => {
  const [volume, setVolume] = useState({
    ...SOUNDS.reduce((obj, sound) => ((obj[sound.name] = 0), obj), {}),
  });

  const changeVolume = (e, name) => {
    setVolume((state) => ({
      ...state,
      [name]: e.target.value,
    }));

    let sound = document.querySelector(`#sound-${name}`);
    sound.play();
    sound.volume = e.target.value;
  };

  return (
    <Draggable handle='.handle'>
      <div className='mixer widget'>
        <dib className='handle'>
          <h3>Sounds</h3>
          <LineOutlined
            className='close'
            onClick={() => widgetHandler('mixer')}
          />
        </dib>

        <div className='sounds'>
          {SOUNDS.map((audio) => (
            <div className='sound'>
              <span>{audio.title}</span>
              <VolumeRange
                volume={volume[audio.name]}
                changeVolume={(e) => changeVolume(e, audio.name)}
              />
              <audio
                id={`sound-${audio.name}`}
                src={`audio/${audio.name}.mp3`}
                loop></audio>
            </div>
          ))}
        </div>
      </div>
    </Draggable>
  );
};

export default MixerWidget;
