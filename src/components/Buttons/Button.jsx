import React from 'react';
import classNames from 'classnames';
import './Button.scss';

const Button = ({ size, children, className, ...props }) => {
  let classnames = classNames({
    button: true,
    [`${size}`]: size,
    [`${className}`]: className,
  });

  return (
    <button className={classnames} {...props}>
      {children}
    </button>
  );
};

export default Button;
