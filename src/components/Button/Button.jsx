import React from 'react';
import './Button.scss';

const Button = ({ text, click }) => {
  return <button className='button' onClick={click}>{text}</button>;
};

export default Button;
