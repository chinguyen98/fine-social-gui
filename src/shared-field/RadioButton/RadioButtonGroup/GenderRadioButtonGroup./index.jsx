import React from 'react';
import RadioButton from 'shared-field/RadioButton';
import PropTypes from 'prop-types';

import RadioButtonGroup from '..';
import Genders from 'constants/gender.constant';

GenderRadioButtonGroup.propTypes = {
  name: PropTypes.string,
  checked: PropTypes.string,
  innerRef: PropTypes.func,
};

function GenderRadioButtonGroup({ name, checked, innerRef }) {
  return (
    <RadioButtonGroup>
      <RadioButton innerRef={innerRef} name={name} value={Genders.MALE.value} label={Genders.MALE.label} checked={checked === Genders.MALE.value} />
      <RadioButton innerRef={innerRef} name={name} value={Genders.FEMALE.value} label={Genders.FEMALE.label} checked={checked === Genders.FEMALE.value} />
    </RadioButtonGroup>
  )
};

export default GenderRadioButtonGroup;