import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import AuthenticatedRoute from 'shared-field/AuthenticatedRoute';

import Main from './pages/Main';
import VerifyAccount from './pages/VerifyAccount';

Auth.propTypes = {

}

function Auth() {
  const match = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route exact path={`${match.url}`} component={Main} />
        <AuthenticatedRoute exact path={`${match.url}/verify/account`} component={VerifyAccount} />
      </Switch>
    </div>
  )
}

export default Auth;