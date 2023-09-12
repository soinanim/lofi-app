import React from 'react';
import Draggable from 'react-draggable';

import './MixerWidget.scss';

const MixerWidget = () => {
  return (
    <Draggable>
      <div className='mixer'>
        <h3>Sounds</h3>
        <div></div>
      </div>
    </Draggable>
  );
};

export default MixerWidget;
