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
import i18n from 'services/i18n'

const required = (value, allValues, props) => (value ? undefined : props.intl.formatMessage({
  id: 'scenes.sign.registerForm.validation.required',
  defaultMessage: 'Obrigatório'
}))

const RegisterForm = ({ handleSubmit, intl }) => (
  <form onSubmit={handleSubmit}>
    <Grid>
      <Cell size={[6]}>
        <Field
          name='firstName'
          type='text'
          label={intl.formatMessage({
            id: 'scenes.sign.registerForm.label.name',
            defaultMessage: 'Nome'
          })}
          placeholder={intl.formatMessage({
            id: 'scenes.sign.registerForm.placeholder.name',
            defaultMessage: 'Seu nome'
          })}
          component={FormField}
          renderField={Input}
          validate={[required]}
        />
      </Cell>
      <Cell size={[6]}>
        <Field
          name='lastName'
          type='text'
          label={intl.formatMessage({
            id: 'scenes.sign.registerForm.label.lastName',
            defaultMessage: 'Sobrenome'
          })}
          placeholder={intl.formatMessage({
            id: 'scenes.sign.registerForm.placeholder.lastName',
            defaultMessage: 'Seu sobrenome'
          })}
          component={FormField}
          renderField={Input}
          validate={[required]}
        />
      </Cell>
      <Cell size={[12]}>
        <Field
          name='email'
          type='text'
          label={intl.formatMessage({
            id: 'scenes.sign.registerForm.label.email',
            defaultMessage: 'Email'
          })}
          placeholder={intl.formatMessage({
            id: 'scenes.sign.registerForm.placeholder.email',
            defaultMessage: 'exemplo@email.com'
          })}
          component={FormField}
          renderField={Input}
        />
      </Cell>
      <Cell size={[12]}>
        <Field
          name='password'
          type='password'
          label={intl.formatMessage({
            id: 'scenes.sign.registerForm.label.password',
            defaultMessage: 'Senha'
          })}
          placeholder={intl.formatMessage({
            id: 'scenes.sign.registerForm.placeholder.password',
            defaultMessage: 'Sua senha'
          })}
          component={FormField}
          renderField={Input}
        />
      </Cell>
    </Grid>
    <Flexbox padding={{ top: 43 }} alignItems='end'>
      <Button type='submit'>
        {intl.formatMessage({
          id: 'scenes.sign.registerForm.submit',
          defaultMessage: 'Confirmar'
        })}
      </Button>
    </Flexbox>
  </form>
)

export default i18n({ messages: require('./locale').default })(reduxForm({
  form: 'registerForm'
})(RegisterForm))
