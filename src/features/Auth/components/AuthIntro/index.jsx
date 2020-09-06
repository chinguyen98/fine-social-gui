import React, { useState } from 'react';
import './authIntro.scss';
import ChangingButton from '../ChangingButton';

AuthIntro.propTypes = {

};

function AuthIntro() {
  const [changingButtonTitle, setChangingButtonTitle] = useState('Sign in');

  return (
    <div className="auth-intro">
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h1 className="auth-intro__firstLine margin-auto text-white">Welcome Back!</h1>
        <p className="auth-intro__secondLine text-white">
          To keep connected with other people,
          <br />
          please sign in with your personal info
        </p>
        <ChangingButton title={changingButtonTitle} />
      </div>
    </div>
  )
};

export default AuthIntro;

