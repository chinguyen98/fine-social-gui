import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Main from './pages/Main';

Auth.propTypes = {

}

function Auth() {
  const match = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route exact path={`${match.url}`} component={Main} />
      </Switch>
    </div>
  )
}

export default Auth;