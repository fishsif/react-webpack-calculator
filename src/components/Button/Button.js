import React from 'react';
import './Button.css';

const Button = ({ val, handleBtnClick }) => {
    return (
      <div className="btn" onClick={() => handleBtnClick(val)}>
        <span>{val}</span>
      </div>
    );
}

export default Button;
