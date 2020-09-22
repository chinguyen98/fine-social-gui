import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import './verifyAccount.scss';
import InputField from 'shared-field/InputField';
import FormGroup from 'shared-field/FormGroup';
import Button from 'shared-field/Button';

VerifyAccount.propTypes = {

};

function VerifyAccount() {

  const schema = yup.object().shape({
    verifyCode: yup.string()
      .required('Vui lòng nhập mã xác thực!'),
  });

  const { handleSubmit, register, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handlingCheckVerify = () => {
    console.log('OK')
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
              content={"Xác nhận"}
              classname={"btn btn-success"}
            />
          </FormGroup>
        </form>
      </div>
    </div>
  )
};

export default VerifyAccount;