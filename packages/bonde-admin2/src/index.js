import React from 'react'
import ReactDOM from 'react-dom'
// Router
import { BrowserRouter as Router } from 'react-router-dom'
// i18n
import { addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import es from 'react-intl/locale-data/es'
import pt from 'react-intl/locale-data/pt'
// Redux
import { Provider } from 'react-redux'
import store from 'services/store'
// GraphQL
import { ApolloProvider } from 'react-apollo'
import apolloClient from 'services/apolloClient'
// Run App
import RouteScenesApp from './scenes/routes'
import registerServiceWorker from './registerServiceWorker'

addLocaleData([...en, ...es, ...pt])

ReactDOM.render((
  <Provider store={store}>
    <ApolloProvider client={apolloClient}>
      {/* Router */}
      <Router>
        <RouteScenesApp />
      </Router>
    </ApolloProvider> 
  </Provider>
), document.getElementById('root'))

registerServiceWorker()
