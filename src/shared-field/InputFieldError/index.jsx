import React from 'react';
import PropTypes from 'prop-types';

InputFieldError.propTypes = {
  content: PropTypes.string,
  classname: PropTypes.string,
};

function InputFieldError({ content, classname = 'text-danger' }) {
  return (
    <span className={classname}>
      {content}
    </span>
  );
};

export default InputFieldError;