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
      <h1 className="text-maya-blue text-center">Tạo tài khoản mới</h1>
      <div className="sign-up-form">
        <InputField
          id="email"
          type="email"
          placeholder="Nhập email vô đây!"
          name="email"
          label="Email:"
        />
        <InputField
          id="password"
          type="password"
          placeholder="Nhập mật khẩu vô đây!"
          name="pasword"
          label="Mật khẩu:"
        />
        <InputField
          id="confirmPassword"
          type="password"
          placeholder="Xác nhận lại mật khẩu ở đây!"
          name="pasword"
          label="Xác nhận mật khẩu:"
        />
        <FormGroup>
          <InputField
            id="firstname"
            type="text"
            placeholder="Tên"
            name="firstname"
            label="Tên:"
          />
          <InputField
            id="lastname"
            type="text"
            placeholder="Họ"
            name="lastname"
            label="Họ:"
          />
        </FormGroup>
        <FormGroup label="Ngày sinh" style={{ marginTop: '1em' }}>
          <SelectOptionDateGroup />
        </FormGroup>
        <FormGroup label="Giởi tính" style={{ marginTop: '1em' }}>
          <GenderRadioButtonGroup name="gender" checked={Genders.MALE.value} />
        </FormGroup>
        <FormGroup classname="form-group-button">
          <Button
            content={"Đăng ký"}
            classname={"btn btn-success margin-t1"}
          />
        </FormGroup>
      </div>
    </div>
  );
}

export default SignUpForm;
