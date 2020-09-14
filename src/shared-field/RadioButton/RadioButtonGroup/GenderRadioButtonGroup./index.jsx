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
      <RadioButton name={name} value={Genders.MALE.value} label={Genders.MALE.label} checked={checked === Genders.MALE.value} />
      <RadioButton name={name} value={Genders.FEMALE.value} label={Genders.FEMALE.label} checked={checked === Genders.FEMALE.value} />
    </RadioButtonGroup>
  )
};

export default GenderRadioButtonGroup;