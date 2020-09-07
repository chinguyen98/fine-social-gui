import React from 'react';
import PropTypes from 'prop-types';
import './changingButton.scss';

ChangingButton.propTypes = {
  title: PropTypes.string,
  handlingClick: PropTypes.func,
};

function ChangingButton({ title, handlingClick }) {
  return (
    <button
      className="changing-button"
      onClick={handlingClick}
    >
      {title}
    </button>
  )
}

export default ChangingButton;