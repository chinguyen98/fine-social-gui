import React, { useState } from 'react';
import './main.scss';
import Auths from 'constants/auth';
import AuthIntro from 'features/Auth/components/AuthIntro';
import AuthForm from 'features/Auth/components/AuthForm';

Main.propTypes = {

}

function Main() {
  /* begin useState */

  const [currentAuth, setCurrentAuth] = useState(Auths.SIGN_UP);

  /* end useState */

  /* begin custom function */

  function changeCurrentAuthToSignUp() {
    setCurrentAuth(Auths.SIGN_UP);
  }

  function changeCurrentAuthToSignIn() {
    setCurrentAuth(Auths.SIGN_IN);
  }

  /* end custom function */

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="main-container">
        <AuthIntro
          handlingClick={currentAuth === Auths.SIGN_IN ? changeCurrentAuthToSignUp : changeCurrentAuthToSignIn}
          currentAuth={currentAuth}
        />
        <AuthForm
          currentAuth={currentAuth}
        />
      </div>
    </div>
  )
}

export default Main;