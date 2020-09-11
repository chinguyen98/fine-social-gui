import React from 'react';
import PropTypes from 'prop-types';

import './radioButton.scss';

RadioButton.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
};

function RadioButton({ name, value, checked }) {
  const generateCapitalizeText = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  return (
    <div className="radio-button">
      <label htmlFor={`radio-${value}`} className="radio-button__label">
        <span>{generateCapitalizeText(value)}</span>
        <input type="radio" name={name} id={`radio-${value}`} value={value} defaultChecked={checked} />
        <span className="radio-button__checkmark"></span>
      </label>
    </div>
  )
}

export default RadioButton;