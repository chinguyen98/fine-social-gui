import React, { useState, useEffect } from 'react';
import './authIntro.scss';
import ChangingButton from '../ChangingButton';
import Auths from '../../../../constants/auth';

AuthIntro.propTypes = {

};

function AuthIntro() {
  /* begin useState */

  const [currentAuth, setCurrentAuth] = useState(Auths.SIGN_UP);

  /* end useState */

  /* begin custom function */

  function changeCurrentAuth() {
    currentAuth === Auths.SIGN_IN ? setCurrentAuth(Auths.SIGN_UP) : setCurrentAuth(Auths.SIGN_IN);
  }

  /* end custom function */

  /*begin useEffect */

  useEffect(() => {
    console.log({ currentAuth })
  }, [currentAuth]);

  /*end useEffect */

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
          handlingClick={changeCurrentAuth}
        />
      </div>
    </div>
  )
};

export default AuthIntro;

