import React, { useState } from 'react';

const CustomRadioButton = (props) => {
  const [selected, setSelected] = useState(false);

  const handleSelection = () => {
    setSelected(!selected);
  };

  return (
    <label className="cursor-pointer">
      <input
        type="checkbox"
        className="peer sr-only"
        name={props.name}
        checked={selected}
        onChange={handleSelection}
      />
      <div
        className={`w-40 p-3 bg-white text-secondary rounded-md hover:shadow ${
          selected ? 'peer-checked:text-green peer-checked:ring-black peer-checked:ring-offset-2 peer-checked:bg-secondary' : ''
        } flex justify-center`}
      >
        <div className="flex gap-1">
          <div className="flex items-center justify-center">
            <p>{props.name}</p>
          </div>
        </div>
      </div>
    </label>
  );
};

export default CustomRadioButton;
