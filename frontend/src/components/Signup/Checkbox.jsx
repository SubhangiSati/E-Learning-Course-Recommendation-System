// src/components/CheckboxList/CheckboxList.jsx
import React, { useState } from 'react';
import './CheckboxList.css';

const CheckboxList = ({ items }) => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  return (
    <div className="signup-form-1">
      {items.map((item, index) => (
        <label key={index} className="checkbox-container">
          {item}
          <input
            type="checkbox"
            name={item}
            checked={checkedItems[item] || false}
            onChange={handleChange}
          />
          <span className="checkmark"></span>
        </label>
      ))}
    </div>
  );
};

export default CheckboxList;
