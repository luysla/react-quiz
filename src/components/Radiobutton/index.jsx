import React from 'react';

const Radiobutton = ({ option, selectedOption, onChange }) => {
  return (
    <div>
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
    </div>
  );
};

export default Radiobutton;
