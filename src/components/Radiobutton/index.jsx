import React from 'react';
import './style.scss';

const Radiobutton = ({ option, selectedOption, onChange }) => {
  return (
    <label>
      <input
        type="radio"
        name={option}
        id={option}
        value={option}
        checked={selectedOption === option}
        onChange={onChange}
      />
      {option}
    </label>
  );
};

export default Radiobutton;
