import React from 'react';
import SelectOptionOrder from '..';

Year.propTypes = {

};

function Year() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <SelectOptionOrder min={1990} max={getCurrentYear()} />
  )
}

export default Year;