import React from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';

import "./signUpForm.scss";
import InputField from "shared-field/InputField";
import FormGroup from "shared-field/FormGroup";
import SelectOptionDateGroup from "shared-field/SelectOption/SelectOptionDateGroup";
import GenderRadioButtonGroup from "shared-field/RadioButton/RadioButtonGroup/GenderRadioButtonGroup.";
import Genders from "constants/gender.constant";
import Button from "shared-field/Button";
import Regex from "constants/regex.constant";

SignUpForm.propTypes = {};

function SignUpForm() {
  const schema = yup.object().shape({
    email: yup.string().required('Vui lòng nhập địa chỉ email!').email('Địa chỉ email không đúng định dạng!'),
    password: yup.string().required('Vui lòng nhập mật khẩu!').matches(Regex.STRONG_PASSWORD, 'Mật khẩu yếu quá!'),
    confirmPassword: yup.string().required('Vui lòng nhập lại mật khẩu xác nhận!').oneOf([yup.ref('password')], 'Mật khẩu xác nhận không khớp!'),
  })

  const { handleSubmit, register, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handlingSignUp = async (data) => {
    console.log(data);
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
          errors={errors.email}
        />
        <InputField
          id="password"
          type="password"
          placeholder="Nhập mật khẩu vô đây!"
          name="password"
          label="Mật khẩu:"
          innerRef={register}
          errors={errors.password}
        />
        <InputField
          id="confirmPassword"
          type="password"
          placeholder="Xác nhận lại mật khẩu ở đây!"
          name="confirmPassword"
          label="Xác nhận mật khẩu:"
          innerRef={register}
          errors={errors.confirmPassword}
        />
        <FormGroup>
          <InputField
            id="firstname"
            type="text"
            placeholder="Tên"
            name="firstname"
            label="Tên:"
            innerRef={register}
            errors={errors.firstname}
          />
          <InputField
            id="lastname"
            type="text"
            placeholder="Họ"
            name="lastname"
            label="Họ:"
            innerRef={register}
            errors={errors.lastname}
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
