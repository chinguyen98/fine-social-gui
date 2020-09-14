import React from "react";

import "./signUpForm.scss";
import InputField from "shared-field/InputField";
import FormGroup from "shared-field/FormGroup";
import SelectOptionDateGroup from "shared-field/SelectOption/SelectOptionDateGroup";
import GenderRadioButtonGroup from "shared-field/RadioButton/RadioButtonGroup/GenderRadioButtonGroup.";
import Genders from "constants/gender.constant";
import Button from "shared-field/Button";
import { useForm } from "react-hook-form";

SignUpForm.propTypes = {};

function SignUpForm() {
  const { handleSubmit, register } = useForm();

  const handlingSignUp = async (data) => {
    if (validateSignUpForm(data)) {

    } else {
      console.log('err!');
    }
  }

  const validateSignUpForm = (data) => {
    console.log(data)
  }

  return (
    <div className="sign-up-form--right">
      <h1 className="text-maya-blue text-center">Tạo tài khoản mới</h1>
      <form className="sign-up-form" onSubmit={handleSubmit(handlingSignUp)}>
        <InputField
          id="email"
          type="email"
          placeholder="Nhập email vô đây!"
          name="email"
          label="Email:"
          innerRef={register}
        />
        <InputField
          id="password"
          type="password"
          placeholder="Nhập mật khẩu vô đây!"
          name="pasword"
          label="Mật khẩu:"
          innerRef={register}
        />
        <InputField
          id="confirmPassword"
          type="password"
          placeholder="Xác nhận lại mật khẩu ở đây!"
          name="pasword"
          label="Xác nhận mật khẩu:"
          innerRef={register}
        />
        <FormGroup>
          <InputField
            id="firstname"
            type="text"
            placeholder="Tên"
            name="firstname"
            label="Tên:"
            innerRef={register}
          />
          <InputField
            id="lastname"
            type="text"
            placeholder="Họ"
            name="lastname"
            label="Họ:"
            innerRef={register}
          />
        </FormGroup>
        <FormGroup
          label="Ngày sinh"
          style={{ marginTop: '1em' }}
        >
          <SelectOptionDateGroup innerRef={register} />
        </FormGroup>
        <FormGroup label="Giởi tính" style={{ marginTop: '1em' }}>
          <GenderRadioButtonGroup innerRef={register} name="gender" checked={Genders.MALE.value} />
        </FormGroup>
        <FormGroup classname="form-group-button">
          <Button
            buttonType={"submit"}
            content={"Đăng ký"}
            classname={"btn btn-success margin-t1"}
          />
        </FormGroup>
      </form>
    </div>
  );
}

export default SignUpForm;
