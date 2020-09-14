import React from 'react';
import PropTypes from 'prop-types';

import SelectOption from "shared-field/SelectOption";
import './selectOptionDateGroup.scss';

SelectOptionDateGroup.propTypes = {
  innerRef: PropTypes.func,
};

function SelectOptionDateGroup({ innerRef }) {
  return (
    <div className="select-option-date-group">
      <SelectOption.Day innerRef={innerRef} />
      <SelectOption.Month innerRef={innerRef}  />
      <SelectOption.Year innerRef={innerRef}  />
    </div>
  )
}

export default SelectOptionDateGroup;