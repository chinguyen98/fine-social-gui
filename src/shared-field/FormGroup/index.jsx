import React from 'react';
import PropTypes from 'prop-types';

import './formGroup.scss';
import InputFieldError from 'shared-field/InputFieldError';

FormGroup.propTypes = {
  label: PropTypes.string,
  classname: PropTypes.string,
  style: PropTypes.object,
  errors: PropTypes.object,
}

function FormGroup({ children, label, style, errors, classname = 'form-group-auth' }) {
  return (
    <div className="form-group-container" style={style}>
      <div className={classname}>
        {children}
      </div>
      <div>
        {
          label !== null
          &&
          <label className='input-field-label'><b>{label}</b></label>
        }
        {
          errors?.dateOfBirth !== undefined
          && <InputFieldError content="Định dạng ngày sinh không hợp lệ!" />
        }
      </div>
    </div>
  )
}

export default FormGroup;