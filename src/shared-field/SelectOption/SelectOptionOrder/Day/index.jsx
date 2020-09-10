import React from 'react';
import SelectOptionOrder from '..';

Day.propTypes = {};

function Day() {
  const getCurrentDay = () => {
    return parseInt(new Date().getDate());
  }

  return (
    <SelectOptionOrder min={1} max={31} selected={getCurrentDay()} />
  )
}

export default Day;