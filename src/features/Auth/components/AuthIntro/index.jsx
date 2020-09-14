import React from 'react';
import PropTypes from 'prop-types';
import './authIntro.scss';
import Auths from 'constants/auth.constant';
import ChangingButton from '../ChangingButton';

AuthIntro.propTypes = {
  currentAuth: PropTypes.string,
  handlingClick: PropTypes.func,
};

function AuthIntro({ currentAuth, handlingClick }) {
  return (
    <div
      className={
        `auth-intro
        ${currentAuth === Auths.SIGN_UP ? 'auth-intro--left' : 'auth-intro--right'}
        `
      }
    >
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h1 className="auth-intro__firstLine margin-auto text-white">
          {
            currentAuth === Auths.SIGN_UP ? 'Chào mừng quay trở lại!' : 'Hế lô bạn'
          }
        </h1>
        <p className="auth-intro__secondLine text-white">
          <span>
            {
              currentAuth === Auths.SIGN_UP ? 'Để giữ kết nối với mọi người' : 'Điền thông tin đăng ký của bạn'
            }
          </span>
          <span>
            {
              currentAuth === Auths.SIGN_UP ? 'vui lòng đăng nhập tài khoản của bạn!' : 'và bắt đầu khám phá <3'
            }
          </span>
        </p>
        <ChangingButton
          title={`${currentAuth === Auths.SIGN_UP ? 'Đăng nhập' : 'Đăng ký'}`}
          handlingClick={handlingClick}
        />
      </div>
    </div>
  )
};

export default AuthIntro;

