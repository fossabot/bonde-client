import React from 'react'
import { Route } from 'react-router-dom'
import Register from './scenes/Register'

export default ({ match }) => (
  <React.Fragment>
    <Route path={`${match.path}/register`} component={Register} />
  </React.Fragment>
)
