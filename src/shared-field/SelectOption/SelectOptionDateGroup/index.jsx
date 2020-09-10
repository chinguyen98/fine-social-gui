import React from 'react';

import SelectOption from "shared-field/SelectOption";
import './selectOptionDateGroup.scss';

SelectOptionDateGroup.propTypes = {

};

function SelectOptionDateGroup() {
  return (
    <div className="select-option-date-group">
      <SelectOption.Day />
      <SelectOption.Month />
      <SelectOption.Year />
    </div>
  )
}

export default SelectOptionDateGroup;