import React from 'react'
import { Route } from 'react-router-dom'
import { PrivateRoute } from 'services/auth'
import DashboardRoute from './Dashboard/routes'
import SignRoute from './Sign/routes'

export default () => (
  <React.Fragment>
    <PrivateRoute exact path='/' component={DashboardRoute} />
    <Route path='/sign' component={SignRoute} />
  </React.Fragment>
)
