import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './scenes/Sign/scenes/Register'
import store from './store'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render((
  <Provider store={store}>
    {/* Router */}
    <App />
  </Provider>
), document.getElementById('root'))
registerServiceWorker()
