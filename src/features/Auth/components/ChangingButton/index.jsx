import React from 'react';
import PropTypes from 'prop-types';
import './changingButton.scss';

ChangingButton.propTypes = {
  title: PropTypes.string,
};

function ChangingButton({ title }) {
  return (
    <button className="changing-button">
      {title}
    </button>
  )
}

export default ChangingButton;