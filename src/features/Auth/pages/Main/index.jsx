import React, { useState } from 'react';
import './main.scss';
import AuthIntro from 'features/Auth/components/AuthIntro';
import Auths from 'constants/auth';

Main.propTypes = {

}

function Main() {
  /* begin useState */

  const [currentAuth, setCurrentAuth] = useState(Auths.SIGN_UP);

  /* end useState */

  /* begin custom function */

  function changeCurrentAuth() {
    currentAuth === Auths.SIGN_IN ? setCurrentAuth(Auths.SIGN_UP) : setCurrentAuth(Auths.SIGN_IN);
  }

  /* end custom function */

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="main-container">
        <AuthIntro
          handlingClick={changeCurrentAuth}
          currentAuth={currentAuth}
        />
      </div>
    </div>
  )
}

export default Main;