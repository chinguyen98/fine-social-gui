import React from 'react';
import PropTypes from 'prop-types';
import './authIntro.scss';
import Auths from 'constants/auth';
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
            currentAuth === Auths.SIGN_UP ? 'Welcome Back!' : 'Hello, Friend!'
          }
        </h1>
        <p className="auth-intro__secondLine text-white">
          {
            currentAuth === Auths.SIGN_UP ? 'To keep connected with other people,' : 'Enter your personal detail'
          }
          <br />
          {
            currentAuth === Auths.SIGN_UP ? 'please sign in with your personal info' : 'and start journey with us <3'
          }
        </p>
        <ChangingButton
          title={`${currentAuth === Auths.SIGN_UP ? Auths.SIGN_IN : Auths.SIGN_UP}`}
          handlingClick={handlingClick}
        />
      </div>
    </div>
  )
};

export default AuthIntro;

