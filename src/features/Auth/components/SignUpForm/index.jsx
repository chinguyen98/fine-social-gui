import React from "react";

import "./signUpForm.scss";
import InputField from "shared-field/InputField";
import FormGroup from "shared-field/FormGroup";
import SelectOption from "shared-field/SelectOption";

SignUpForm.propTypes = {};

function SignUpForm() {
  return (
    <div className="sign-up-form--right">
      <h1 className="text-maya-blue text-center">Create Account</h1>
      <form className="sign-up-form">
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
        <FormGroup>
          <SelectOption.Day />
          <SelectOption.Month />
          <SelectOption.Year />
        </FormGroup>
      </form>
    </div>
  );
}

export default SignUpForm;
