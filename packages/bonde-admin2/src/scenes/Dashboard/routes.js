import React from 'react'
import { Title, Button } from 'bonde-styleguide'
import { AuthAPI, RedirectHOC } from 'services/auth'

const Dashboard = ({ redirectTo }) => (
  <div>
    <Title.H1>Welcome to dashboard.</Title.H1>
    <Button
      onClick={() => {
        AuthAPI
          .logout()
          .then(() => {
            redirectTo('/sign/register')
          })
      }}
    >
      Logout
    </Button>
  </div>
)

export default RedirectHOC(Dashboard)
