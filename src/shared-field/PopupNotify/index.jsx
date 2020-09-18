import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { unsetNotify } from 'app/redux/notifySlice';

import './popupNotify.scss';

PopupNotify.propTypes = {
  classname: PropTypes.string,
  content: PropTypes.string,
  type: PropTypes.string,
}

function PopupNotify({ content, type, classname = `popup-notify` }) {
  const dispatch = useDispatch();

  const hidePopupNotify = () => {
    dispatch(unsetNotify());
  }

  return (
    <div className={`${classname} ${classname}-${type}`}>
      <span>{content}</span>
      <span className={`${classname}__cancelBtn`} onClick={hidePopupNotify}>X</span>
    </div>
  )
}

export default PopupNotify;