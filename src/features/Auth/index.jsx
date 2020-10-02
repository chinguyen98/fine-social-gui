import React from 'react';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';

import { decodeToken } from './helper/token.helper';
import Main from './pages/Main';

Auth.propTypes = {

}

function Auth() {
  const match = useRouteMatch();

  const handleAuthRedirect = () => {
    const accessToken = decodeToken();

    if (accessToken && accessToken.isVerify) {
      return '/';
    }

    if (accessToken && !accessToken.isVerify) {
      return '/verify/email';
    }

    return null;
  }

  return (
    <div>
      <Switch>
        <Route exact path={`${match.url}`}>
          {
            handleAuthRedirect() !== null ? <Redirect exact to={handleAuthRedirect()} /> : <Main />
          }
        </Route>
      </Switch>
    </div>
  )
}

export default Auth;