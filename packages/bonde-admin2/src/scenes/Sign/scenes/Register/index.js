import React from 'react'
import { Text } from 'bonde-styleguide'
import HalfPage from '../../components/HalfPage'
import RegisterForm from './components/RegisterForm'

export default () => (
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
        console.log('submit values', values)
      }}
    />
  </HalfPage>
)
