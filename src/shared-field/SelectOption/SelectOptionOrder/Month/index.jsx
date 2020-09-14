import React from 'react';
import SelectOptionOrder from '..';
import PropTypes from 'prop-types';

Month.propTypes = {
  innerRef: PropTypes.func,
};

function Month({ innerRef }) {
  const getCurrentMonth = () => {
    return parseInt(new Date().getMonth() + 1);
  }
  return (
    <SelectOptionOrder name={"month"} innerRef={innerRef} min={1} max={12} selected={getCurrentMonth()} />
  )
}

export default Month;