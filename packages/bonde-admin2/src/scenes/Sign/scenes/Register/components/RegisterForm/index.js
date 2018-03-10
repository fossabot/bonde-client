import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {
  Input,
  Button,
  Grid,
  Cell,
  Flexbox
} from 'bonde-styleguide'
import FormField from 'components/FormField'


const RegisterForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Grid>
      <Cell size={[6]}>
        <Field
          name='firstName'  
          type='text'
          label='Nome'
          placeholder='Seu nome'
          component={FormField}
          renderField={Input}
        />
      </Cell>
      <Cell size={[6]}>
        <Field
          name='lastName'  
          type='text'
          label='Sobrenome'
          placeholder='Seu sobrenome'
          component={FormField}
          renderField={Input}
        />
      </Cell>
      <Cell size={[12]}>
        <Field
          name='email'  
          type='text'
          label='Email'
          placeholder='exemplo@email.com'
          component={FormField}
          renderField={Input}
        />
      </Cell>
      <Cell size={[12]}>
        <Field
          name='password' 
          type='password'
          label='Senha'
          placeholder='Sua senha'
          component={FormField}
          renderField={Input}
        />
      </Cell> 
    </Grid>
    <Flexbox padding={{ top: 43 }} alignItems='end'>
      <Button type='submit'>Confirmar</Button>
    </Flexbox>
  </form>
)

export default reduxForm({
  form: 'registerForm'
})(RegisterForm)
