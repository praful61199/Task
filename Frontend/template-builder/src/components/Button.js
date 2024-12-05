import React from 'react';
import './Button.css'; // Optional styling for the button

const Button = ({ onClick, children, className }) => {
  return (
    <button onClick={onClick} className={`btn ${className}`}>
      {children}
    </button>
  );
};

export default Button;
