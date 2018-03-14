import React from 'react'
import { Route } from 'react-router-dom'
import DashboardRoute from './Dashboard/routes'
import SignRoute from './Sign/routes'

export default () => (
  <React.Fragment>
    <Route exact path='/' component={DashboardRoute} />
    <Route path='/sign' component={SignRoute} />
  </React.Fragment>
)
