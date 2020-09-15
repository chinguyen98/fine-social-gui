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
  errors: PropTypes.object,
  innerRef: PropTypes.func,
};

function InputField({ id, type, value, placeholder, name, label, innerRef, errors, classname = 'input-field-auth' }) {
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
      <div>
        {
          label !== null
          &&
          <label className='input-field-label'><b>{label}</b></label>
        }
        {
          errors !== null
          && <span className="input-field__error">{errors?.message}</span>
        }
      </div>
    </div>
  );
}

export default InputField;
