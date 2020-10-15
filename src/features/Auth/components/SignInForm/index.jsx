import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import './signInForm.scss';
import InputField from 'shared-field/InputField';
import FormGroup from 'shared-field/FormGroup';
import Button from 'shared-field/Button';
import { yupResolver } from '@hookform/resolvers';
import { useDispatch, useSelector } from 'react-redux';
import { setErrorNotify, unsetNotify } from 'app/redux/notifySlice';
import { signIn } from 'app/redux/authSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useHistory } from 'react-router-dom';

SignInForm.propTypes = {

};

function SignInForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const authState = useSelector(state => state.auth);

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

  const handleSignIn = async ({ email, password }) => {
    try {
      dispatch(unsetNotify());
      const signInResult = await dispatch(signIn({ email, password }));
      unwrapResult(signInResult);
      history.push('/');
    } catch (err) {
      dispatch(setErrorNotify({
        content: err.message,
      }));
    }
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
            buttonType={"submit"}
            content={`${authState.isLoading ? 'Đang đăng nhập' : 'Đăng nhập'}`}
            classname={`${authState.isLoading ? 'btn btn-pending' : 'btn btn-success'}`}
            disabled={authState.isLoading}
            loading={authState.isLoading}
          />
        </FormGroup>
      </form>
    </div>
  )
}

export default SignInForm;