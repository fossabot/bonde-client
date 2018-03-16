import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { AuthAPI } from 'services/auth'

const PrivateRoute = ({ component: Component, ...ownProps }) => (
  <Route
    {...ownProps}
    render={(props) => AuthAPI.isAuthenticated() ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/sign/register',
          state: { from: props.location }
        }}
      />
    )}
  />
)

export default PrivateRoute
