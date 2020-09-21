import React from 'react';
import * as jwt from 'jsonwebtoken';
import { Redirect, Route } from 'react-router-dom';
import VerifyAccount from 'features/Auth/pages/VerifyAccount';

AuthenticatedRoute.propTypes = {

};

function AuthenticatedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        const accessToken = JSON.parse(localStorage.getItem('accessToken'));
        const tokenData = jwt.decode(accessToken);
        console.log(tokenData);

        if (tokenData) {
          if (tokenData.isVerify === false) {
            return <VerifyAccount />
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