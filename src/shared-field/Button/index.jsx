import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

Button.propTypes = {
  content: PropTypes.string,
  classname: PropTypes.string,
  buttonType: PropTypes.string,
};

function Button({ content, buttonType = 'button', classname = 'btn' }) {
  return (
    <button type={buttonType} className={classname}>
      {content}
    </button>
  )
}

export default Button;