import React from 'react';
import PropTypes from 'prop-types';

import '../selectOption.scss';

SelectOptionOrder.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  classname: PropTypes.string,
  selected: PropTypes.number,
};

function SelectOptionOrder({ min, max, selected, classname = 'select-option' }) {
  const generateOptionRange = (min, max) => {
    let result = [];
    for (let i = max; i >= min; i--) {
      result.push(i);
    }
    return result;
  }

  return (
    <select className={classname} defaultValue={selected}>
      {
        generateOptionRange(min, max).map(item =>
          <option key={item} value={item}>{item}</option>
        )
      }
    </select>
  )
}

export default SelectOptionOrder;