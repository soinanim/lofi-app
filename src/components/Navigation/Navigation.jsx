import React from 'react';
import { Icon } from '@iconify/react';
import Button from '../Buttons/Button';

import './Navigation.scss';

const Navigation = ({ setIsOpen }) => {
  const widgetHandler = (widgetName) => {
    setIsOpen((state) => ({ ...state, [widgetName]: !state[widgetName] }));
  };

  return (
    <nav className='nav'>
      <Button
        onClick={() => widgetHandler('timer')}
        size='small'
        children={
          <Icon
            width='20px'
            height='20px'
            icon='material-symbols:timer-outline'
          />
        }
        className='nav-icon'
      />
      <Button
        onClick={() => widgetHandler('todo')}
        size='small'
        children={<Icon width='20px' height='20px' icon='gg:board' />}
        className='nav-icon'
      />
      <Button
        onClick={() => widgetHandler('notes')}
        size='small'
        children={<Icon width='20px' height='20px' icon='mdi:notes-outline' />}
        className='nav-icon'
      />
      <Button
        onClick={() => widgetHandler('scenes')}
        size='small'
        children={
          <Icon
            width='20px'
            height='20px'
            icon='material-symbols:window-outline'
          />
        }
        className='nav-icon'
      />
    </nav>
  );
};

export default Navigation;
