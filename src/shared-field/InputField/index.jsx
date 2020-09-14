import React from "react";
import PropTypes from "prop-types";

import './inputField.scss';

InputField.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  classname: PropTypes.string,
  label: PropTypes.string,
  innerRef: PropTypes.func,
};

function InputField({ id, type, value, placeholder, name, label, innerRef, classname = 'input-field-auth' }) {
  return (
    <div className="input-field-container">
      <input
        id={id}
        className={classname}
        type={type}
        value={value}
        placeholder={placeholder}
        name={name}
        ref={innerRef}
      />
      {
        label !== null
        &&
        <label className='input-field-label'><b>{label}</b></label>
      }
    </div>
  );
}

export default InputField;
