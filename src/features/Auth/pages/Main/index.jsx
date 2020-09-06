import React from 'react';
import './main.scss';
import AuthIntro from '../../components/AuthIntro';

Main.propTypes = {

}

function Main() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="main-container">
        <AuthIntro />
      </div>
    </div>
  )
}

export default Main;