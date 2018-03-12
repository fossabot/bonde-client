import React from 'react'
import { IntlProvider, injectIntl } from 'react-intl'
import store from '../store'

export default ({ messages }) => (Component) => (props) => {
  const locale = store.getState().currentLocale
  const IntlComponent = injectIntl(Component)
  
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <IntlComponent {...props} />
    </IntlProvider>
  )
}
