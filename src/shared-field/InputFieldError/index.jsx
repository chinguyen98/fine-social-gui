import React from 'react';
import PropTypes from 'prop-types';

import './inputFieldError.scss';

InputFieldError.propTypes = {
  content: PropTypes.string,
  classname: PropTypes.string,
};

function InputFieldError({ content, classname = 'input-field-error' }) {
  return (
    <span className={classname}>
      {content}
    </span>
  );
};

export default InputFieldError;