import React from 'react';
import './formGroup.scss';

FormGroup.propTypes = {

}

function FormGroup({ children }) {
  return (
    <div className="form-group-auth">
      {children}
    </div>
  )
}

export default FormGroup;