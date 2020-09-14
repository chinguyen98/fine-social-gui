import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

Button.propTypes = {
  content: PropTypes.string,
  classname: PropTypes.string,
};

function Button({ content, classname = 'btn' }) {
  return (
    <button className={classname}>
      {content}
    </button>
  )
}

export default Button;