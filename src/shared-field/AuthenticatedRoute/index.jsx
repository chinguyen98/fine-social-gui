import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { decodeToken } from 'features/Auth/helper/token.helper';

AuthenticatedRoute.propTypes = {

};

function AuthenticatedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        const tokenData = decodeToken();

        if (tokenData) {
          const expiredTime = tokenData.exp;
          if (expiredTime < Date.now() / 1000) {
            localStorage.removeItem('accessToken');
            return <Redirect exact to="/auth" />
          }
          if (tokenData.isVerify === false) {
            return <Redirect exact to="/verify/email" />
          }
          else {
            return <Component {...props} />
          }
        } else {
          return <Redirect exact to="/auth" />
        }
      }}
    />
  )
};

export default AuthenticatedRoute;