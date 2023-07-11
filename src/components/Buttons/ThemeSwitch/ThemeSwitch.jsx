import React from 'react';
import { Switch } from 'antd';
import './ThemeSwitch.scss';

import { Icon } from '@iconify/react';

const ThemeSwitch = ({ setChangeTheme }) => {
  const onChange = () => {
    setChangeTheme((state) => !state);
  };

  return (
    <Switch
      checkedChildren={
        <Icon
          width='18px'
          height='18px'
          icon='tabler:sun'
          style={{ paddingTop: '10%' }}
        />
      }
      unCheckedChildren={
        <Icon width='18px' height='18px' icon='ph:moon-bold' />
      }
      defaultChecked
      onChange={onChange}
    />
  );
};

export default ThemeSwitch;
