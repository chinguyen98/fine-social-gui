import React from "react";

import "./signUpForm.scss";
import InputField from "shared-field/InputField";
import FormGroup from "shared-field/FormGroup";
import SelectOptionDateGroup from "shared-field/SelectOption/SelectOptionDateGroup";
import GenderRadioButtonGroup from "shared-field/RadioButton/RadioButtonGroup/GenderRadioButtonGroup.";
import Genders from "constants/gender.constant";
import Button from "shared-field/Button";

SignUpForm.propTypes = {};

function SignUpForm() {
  return (
    <div className="sign-up-form--right">
      <h1 className="text-maya-blue text-center">Create Account</h1>
      <div className="sign-up-form">
        <InputField
          id="email"
          type="email"
          placeholder="Enter your email here!"
          name="email"
          label="Email:"
        />
        <InputField
          id="password"
          type="password"
          placeholder="Enter your password here!"
          name="pasword"
          label="Password:"
        />
        <InputField
          id="confirmPassword"
          type="password"
          placeholder="Enter your confirm password here!"
          name="pasword"
          label="Confirm password:"
        />
        <FormGroup>
          <InputField
            id="firstname"
            type="text"
            placeholder="Firstname"
            name="firstname"
            label="Firstname:"
          />
          <InputField
            id="lastname"
            type="text"
            placeholder="Lastname"
            name="lastname"
            label="Lastname:"
          />
        </FormGroup>
        <FormGroup label="Date of birth" style={{ marginTop: '1em' }}>
          <SelectOptionDateGroup />
        </FormGroup>
        <FormGroup label="Gender" style={{ marginTop: '1em' }}>
          <GenderRadioButtonGroup name="gender" checked={Genders.MALE} />
        </FormGroup>
        <FormGroup classname="form-group-button">
          <Button
            content={"Sign up"}
            classname={"btn btn-success margin-t1"}
          />
        </FormGroup>
      </div>
    </div>
  );
}

export default SignUpForm;
