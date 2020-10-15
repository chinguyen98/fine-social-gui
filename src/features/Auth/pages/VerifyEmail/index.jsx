import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';

import './verifyAccount.scss';
import { verifyEmail } from 'app/redux/authSlice';
import { setErrorNotify, unsetNotify } from 'app/redux/notifySlice';
import InputField from 'shared-field/InputField';
import FormGroup from 'shared-field/FormGroup';
import Button from 'shared-field/Button';

VerifyEmailPage.propTypes = {

};

function VerifyEmailPage() {
  const authState = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const schema = yup.object().shape({
    verifyCode: yup.string()
      .required('Vui lòng nhập mã xác thực!'),
  });

  const { handleSubmit, register, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handlingCheckVerify = async ({ verifyCode: mailCode }) => {
    try {
      dispatch(unsetNotify());
      const verifyEmailResult = await dispatch(verifyEmail({ mailCode }));
      unwrapResult(verifyEmailResult);
      history.push('/');
    } catch (err) {
      dispatch(setErrorNotify({
        content: err.message,
      }))
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="verify-account">
        <h1>Xác thực tài khoản:</h1>
        <p>Một mã xác thực đã được gửi đến địa chỉ Email của bạn.</p>
        <form onSubmit={handleSubmit(handlingCheckVerify)}>
          <InputField
            id="verifyCode"
            name="verifyCode"
            label="Mã xác thực"
            placeholder="Nhập mã xác thực tại đây!"
            type="text"
            classname="input-field-auth input-field-auth-w20"
            innerRef={register}
            errors={errors.verifyCode}
          />
          <FormGroup classname="form-group-button">
            <Button
              buttonType={"submit"}
              content={`${authState.isLoading ? 'Đang xác thực' : 'Xác nhận'}`}
              classname={`${authState.isLoading ? 'btn btn-pending' : 'btn btn-success'}`}
              disabled={authState.isLoading}
              loading={authState.isLoading}
            />
          </FormGroup>
        </form>
      </div>
    </div>
  )
};

export default VerifyEmailPage;