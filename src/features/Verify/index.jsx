import React from 'react';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';

import VerifyEmailPage from 'features/Auth/pages/VerifyEmail';
import { decodeToken } from 'features/Auth/helper/token.helper';

Verify.propTypes = {

}

function Verify() {
  const match = useRouteMatch();

  const handleVerifyEmailRedirect = () => {
    const accessToken = decodeToken();

    if (accessToken && accessToken.isVerify) {
      return '/';
    }

    if (!accessToken) {
      return '/auth';
    }

    return null;
  }

  return (
    <div>
      <Switch>
        <Route exact path={`${match.url}/email`}>
          {
            handleVerifyEmailRedirect() !== null ? <Redirect exact to={handleVerifyEmailRedirect()} /> : <VerifyEmailPage />
          }
        </Route>
      </Switch>
    </div>
  )
}

export default Verify;