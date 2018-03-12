import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import es from 'react-intl/locale-data/es'
import pt from 'react-intl/locale-data/pt'
import App from './scenes/Sign/scenes/Register'
import store from './store'
import registerServiceWorker from './registerServiceWorker'

addLocaleData([...en, ...es, ...pt])

ReactDOM.render((
  <Provider store={store}>
    {/* Router */}
    <App />
  </Provider>
), document.getElementById('root'))

registerServiceWorker()
