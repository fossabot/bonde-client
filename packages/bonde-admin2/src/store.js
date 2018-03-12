import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const currentLocale = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage

const initialState = {
  currentLocale
}

const intlReducer = (state = 'pt-BR', action) => {
  switch (action.type) {
    case 'intl/SET_CURRENT_LOCALE':
      return action.payload
    default:
      return state
  }
}

const rootReducer = combineReducers({
  currentLocale: intlReducer,
  form: formReducer
})

export default createStore(rootReducer, initialState)
