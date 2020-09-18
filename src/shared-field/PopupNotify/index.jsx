import React from 'react';
import PropTypes from 'prop-types';

import './popupNotify.scss';

PopupNotify.propTypes = {
  classname: PropTypes.string,
  content: PropTypes.string,
}

function PopupNotify({ content, classname = 'popup-notify' }) {
  return (
    <div className={classname}>
      {content}
    </div>
  )
}

export default PopupNotify;