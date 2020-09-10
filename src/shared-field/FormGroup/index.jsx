import React from 'react';
import PropTypes from 'prop-types';

import './formGroup.scss';

FormGroup.propTypes = {
  label: PropTypes.string,
  classname: PropTypes.string,
  style: PropTypes.object,
}

function FormGroup({ children, label, style, classname = 'form-group-auth' }) {
  return (
    <div className="form-group-container" style={style}>
      <div className={classname}>
        {children}
      </div>
      {
        label !== null
        &&
        <label className='input-field-label'><b>{label}</b></label>
      }
    </div>
  )
}

export default FormGroup;