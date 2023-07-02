import React from 'react';
import { Switch } from 'antd';
import styles from './ThemeSwitch.module.css';

import { Icon } from '@iconify/react';

const ThemeSwitch = () => {
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <Switch
      checkedChildren={<Icon width='18px' height='18px' icon='tabler:sun' />}
      unCheckedChildren={
        <Icon width='18px' height='18px' icon='ph:moon-bold' />
      }
      defaultChecked
      onChange={onChange}
    />
  );
};

export default ThemeSwitch;
