import React, { useState } from 'react';
import css from './Button.module.css';

function Button({ secondary, children, distance }) {
  //   const [value, setValue] = useState('Press here');
  //   const mockFn = () => {
  //     setValue('you clicked');
  //   };
  return (
    <button
      distance={distance}
      //   onClick={mockFn}
      className={secondary === true ? css.secondary : css.primary}
    >
      {children}
    </button>
  );
}

export default Button;
