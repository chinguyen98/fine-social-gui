import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import './signInForm.scss';
import InputField from 'shared-field/InputField';
import FormGroup from 'shared-field/FormGroup';
import Button from 'shared-field/Button';
import { yupResolver } from '@hookform/resolvers';

SignInForm.propTypes = {

};

function SignInForm() {
  const schema = yup.object().shape({
    email: yup.string()
      .email('Vui lòng nhập đúng định dạng email!')
      .required('Vui lòng nhập email!'),
    password: yup.string()
      .required('Vui lòng nhập mật khẩu!'),
  });

  const { handleSubmit, errors, register } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSignIn = () => {
    console.log('ok')
  }

  return (
    <div className="sign-in-form--left">
      <h1 className="text-maya-blue text-center">Đăng nhập</h1>
      <form
        className="sign-in-form"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <InputField
          id="email"
          type="email"
          placeholder="Nhập email vô đây!"
          name="email"
          label="Email:"
          classname="input-field-auth input-field-auth-w20"
          errors={errors.email}
          innerRef={register}
        />
        <InputField
          id="password"
          type="password"
          placeholder="Nhập mật khẩu vô đây!"
          name="password"
          label="Mật khẩu:"
          errors={errors.password}
          innerRef={register}
        />
        <FormGroup classname="form-group-button">
          <Button
            buttonType="submit"
            content="Đăng nhập"
            classname="btn btn-primary"
          />
        </FormGroup>
      </form>
    </div>
  )
}

export default SignInForm;