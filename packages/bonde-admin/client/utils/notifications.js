import { addNotification } from 'reapop'

export const genericRequestError = intl => ({
  title: intl.formatMessage({
    id: 'notification--generic-request-error.title',
    defaultMessage: 'Ops!'
  }),
  status: 'error',
  message: intl.formatMessage({
    id: 'notification--generic-request-error.message',
    defaultMessage: (
      'Parece que teve algum problema técnico nessa última requisição. ' +
      'Pedimos que tente de novo daqui a pouco.'
    )
  }),
  dismissAfter: 0,
  dismissible: true,
  closeButton: false
})

export const genericSaveSuccess = intl => ({
  title: intl.formatMessage({
    id: 'notification--generic-save-success.title',
    defaultMessage: 'Oba!'
  }),
  status: 'success',
  message: intl.formatMessage({
    id: 'notification--generic-save-success.message',
    defaultMessage: (
      'A requisição foi feita com sucesso e, os seus ' +
      'dados estão salvos em segurança.'
    )
  }),
  dismissAfter: 7000,
  dismissible: true,
  closeButton: false
})

export const slugUpdatedMessage = intl => ({
  title: intl.formatMessage({
    id: 'notification--slug-updated-message.title',
    defaultMessage: 'Importante'
  }),
  status: 'warning',
  message: intl.formatMessage({
    id: 'notification--slug-updated-message.message',
    defaultMessage: 'O slug da sua mobilização foi alterado. ' +
      'Se você faz algum redirecionamento de DNS via ' +
      'CNAME, não se esqueça de atualizá-lo.'
  }),
  dismissAfter: 0,
  dismissible: true,
  closeButton: false
})

export const messagePressureTargetsRemoveAll = intl => ({
  title: intl.formatMessage({
    id: 'notification--message-pressure-targets-remove-all.title',
    defaultMessage: 'Lembre-se...'
  }),
  status: 'info',
  message: intl.formatMessage({
    id: 'notification--message-pressure-targets-remove-all.message',
    defaultMessage:
      'Não se esqueça que é necessário clicar no botão salvar, no canto superior direito ' +
      'da tela pra que a ação se torne permanente. Se quiser reverter os alvos removidos, ' +
      'basta atualizar a página. (:'
  }),
  dismissAfter: 7000,
  dismissible: true,
  closeButton: false
})

export const accountPasswordRetrieveSuccess = intl => ({
  title: intl.formatMessage({
    id: 'notification--account-password-retrieve-success.title',
    defaultMessage: 'Recuperação de senha'
  }),
  status: 'success',
  message: intl.formatMessage({
    id: 'notification--account-password-retrieve-success.message',
    defaultMessage: 'Acabamos de enviar um email com a sua nova senha. Confira na ' +
      'caixa de entrada do seu email para acessar o BONDE novamente. Relaxe pois, ' +
      'pode alterar essa senha quando você quiser, nas configurações da sua conta.'
  }),
  dismissAfter: 0,
  dismissible: true,
  closeButton: false
})

export const communityInviteSuccess = (intl, email) => ({
  title: intl.formatMessage({
    id: 'notification--community-invite-success.title',
    defaultMessage: 'Oba!'
  }),
  status: 'success',
  message: intl.formatMessage({
    id: 'notification--community-invite-success.message',
    defaultMessage: 'O convite para {email} foi enviado com sucesso! ' +
      'Mais um passo foi dado pra sua comunidade crescer ainda mais (:'
  }, { email }),
  dismissAfter: 15000,
  dismissible: true,
  closeButton: false
})

export const subscriptionCancelSuccess = intl => ({
  title: intl.formatMessage({
    id: 'notification--subscription-cancel-success.title',
    defaultMessage: 'Assinatura cancelada'
  }),
  status: 'success',
  message: intl.formatMessage({
    id: 'notification--subscription-cancel-success.message',
    defaultMessage: 'Sua assinatura foi cancelada e, o valor da sua ' +
      'doação não será debitado até que você faça uma nova doação recorrente.'
  }),
  dismissAfter: 15000,
  dismissible: true,
  closeButton: false
})

// Standardize use of these functions

const applyIntl = (value, intl) => {
  if (typeof value === 'object') {
    const { context, ...message } = value
    return intl.formatMessage(message, context)
  }
  return value
}

export const notify = ({ status, title, message }, dispatch, ownProps) => {
  const { intl } = ownProps || {}
  dispatch(addNotification({
    status,
    title: applyIntl(title, intl),
    message: applyIntl(message, intl),
    dismissAfter: 0,
    dismissable: true,
    closeButton: false
  }))
}