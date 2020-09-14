import React from 'react';
import PropTypes from 'prop-types';

import SelectOptionOrder from '..';

Day.propTypes = {
  innerRef: PropTypes.func,
};

function Day({ innerRef }) {
  const getCurrentDay = () => {
    return parseInt(new Date().getDate());
  }

  return (
    <SelectOptionOrder name={"day"} innerRef={innerRef} min={1} max={31} selected={getCurrentDay()} />
  )
}

export default Day;