import React from 'react';
import PropTypes from 'prop-types';
import './authForm.scss';
import Auths from 'constants/auth.constant';
import SignInForm from '../SignInForm';
import SignUpForm from '../SignUpForm';

AuthForm.propTypes = {
  currentAuth: PropTypes.string,
};

function AuthForm({ currentAuth }) {
  return (
    <div
      className={`${currentAuth === Auths.SIGN_UP ? 'auth-form--right' : 'auth-form--left'}`}
    >
      {
        currentAuth === Auths.SIGN_IN ? <SignInForm /> : <SignUpForm />
      }
    </div>
  )
};

export default AuthForm;