import React from 'react';
import SelectOptionOrder from '..';

Month.propTypes = {

};

function Month() {
  const getCurrentMonth = () => {
    return parseInt(new Date().getMonth() + 1);
  }
  return (
    <SelectOptionOrder min={1} max={12} selected={getCurrentMonth()} />
  )
}

export default Month;