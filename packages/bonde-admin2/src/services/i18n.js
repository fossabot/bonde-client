import React from 'react'
import { connect } from 'react-redux'
import { IntlProvider, injectIntl } from 'react-intl'

export default ({ messages }) => (Component) => connect(
  (state) => ({
    locale: state.currentLocale
  })
)(({ locale, ...props }) => {
  const IntlComponent = injectIntl(Component)
  
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <IntlComponent {...props} />
    </IntlProvider>
  )
})
