import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import SignIn from './pages/SignIn';

Auth.propTypes = {

}

function Auth() {
  const match = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route exact path={`${match.url}/signin`} component={SignIn} />
      </Switch>
    </div>
  )
}

export default Auth;