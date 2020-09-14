import React from 'react';
import PropTypes from 'prop-types';

import SelectOptionOrder from '..';

Year.propTypes = {
  innerRef: PropTypes.func,
};

function Year({ innerRef }) {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <SelectOptionOrder name={"year"} innerRef={innerRef} min={1990} max={getCurrentYear()} />
  )
}

export default Year;