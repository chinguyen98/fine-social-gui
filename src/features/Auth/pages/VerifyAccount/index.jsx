import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { decodeToken } from 'features/Auth/helper/token.helper';

VerifyAccount.propTypes = {

};

function VerifyAccount() {
  const history = useHistory();

  const check = () => {
    const tokenData = decodeToken();
    if (!tokenData) {
      history.push('/auth');
    }
  }

  const stableCheck = useCallback(check, []);

  useEffect(() => {
    stableCheck();
  }, [stableCheck]);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="main-container">
        <h1>Hello</h1>
      </div>
    </div>
  )
};

export default VerifyAccount;