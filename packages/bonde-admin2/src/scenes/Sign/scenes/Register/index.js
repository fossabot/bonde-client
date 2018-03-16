import React from 'react'
import { Text } from 'bonde-styleguide'
import { AuthAPI, RedirectHOC } from 'services/auth'
import HalfPage from '../../components/HalfPage'
import RegisterForm from './components/RegisterForm'

const RegisterPage = (props) => (
  <HalfPage>
    <Text
      fontSize={60}
      lineHeight={1.17}
      fontWeight={900}
      margin={{ bottom: 53 }}
    >
      O Bonde tá na área! Chega mais.
    </Text>
    <RegisterForm
      onSuccess={({ data }) => {
        AuthAPI
          .authenticate(data.register.jwtToken)
          .then(() => {
            props.redirectTo('/')
          })
      }}
      onFail={(error) => {
        console.log('there was an error sending the query', error)
      }}
    />
  </HalfPage>
)

export default RedirectHOC(RegisterPage)
