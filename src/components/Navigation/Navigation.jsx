import React from 'react';
import { Icon } from '@iconify/react';
import Button from '../Buttons/Button';

import './Navigation.scss';

const Navigation = ({ setOpenTimer, setOpenTodo }) => {
  return (
    <nav className='nav'>
      <Button
        onClick={() => setOpenTimer((state) => !state)}
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
        onClick={() => setOpenTodo((state) => !state)}
        size='small'
        children={<Icon width='20px' height='20px' icon='gg:board' />}
        className='nav-icon'
      />
      <Button
        size='small'
        children={<Icon width='20px' height='20px' icon='mdi:notes-outline' />}
        className='nav-icon '
      />
        <Button
        size='small'
        children={<Icon width='20px' height='20px' icon='material-symbols:window-outline' />}
        className='nav-icon '
      />
      
    </nav>
  );
};

export default Navigation;
