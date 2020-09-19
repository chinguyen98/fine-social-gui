import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';
import spinnerGif from 'app/assets/gif/spinner.gif'

Button.propTypes = {
  content: PropTypes.string,
  classname: PropTypes.string,
  buttonType: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};

function Button({ content, loading = false, disabled = false, buttonType = 'button', classname = 'btn' }) {
  return (
    <button type={buttonType} className={classname} disabled={disabled}>
      <img className="btn__spinner" style={{ display: `${loading ? 'inline-block' : 'none'}` }} src={spinnerGif} alt="spinnerGif" />
      <span>{content}</span>
    </button>
  )
}

export default Button;