import React, { useCallback, useEffect } from 'react';
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom';
import { decodeToken } from './helper/token.helper';

import Main from './pages/Main';
import VerifyAccount from './pages/VerifyAccount';

Auth.propTypes = {

}

function Auth() {
  const match = useRouteMatch();
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

  useEffect(() => {

  });

  return (
    <div>
      <Switch>
        <Route exact path={`${match.url}`} component={Main} />
        <Route exact path={`${match.url}/verify/account`} component={VerifyAccount} />
      </Switch>
    </div>
  )
}

export default Auth;