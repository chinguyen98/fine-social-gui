import React from 'react';
import RadioButton from 'shared-field/RadioButton';
import PropTypes from 'prop-types';

import RadioButtonGroup from '..';
import Genders from 'constants/gender.constant';

GenderRadioButtonGroup.propTypes = {
  name: PropTypes.string,
  checked: PropTypes.string,
};

function GenderRadioButtonGroup({ name, checked }) {
  return (
    <RadioButtonGroup>
      <RadioButton name={name} value={Genders.MALE} checked={checked === Genders.MALE} />
      <RadioButton name={name} value={Genders.FEMALE} checked={checked === Genders.FEMALE} />
    </RadioButtonGroup>
  )
};

export default GenderRadioButtonGroup;