import React from 'react'
import { graphql } from 'react-apollo'
import { Text } from 'bonde-styleguide'
import HalfPage from '../../components/HalfPage'
import RegisterForm from './components/RegisterForm'
import registerMutation from './register.graphql'

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
      onSubmit={(values) => {
        props.mutate({
          variables: {
            user: {
              data: JSON.stringify(values)
            }
          }
        })
        .then(({ data }) => {
          console.log('got data', data)
        })
        .catch((error) => {
          console.log('there was an error sending the query', error)
        })
      }}
    />
  </HalfPage>
)

export default graphql(registerMutation)(RegisterPage)
