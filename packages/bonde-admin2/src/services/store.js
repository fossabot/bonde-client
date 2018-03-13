import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

export const locales = ['pt-BR', 'en', 'es']
export const defaultLocale = 'pt-BR'

export const localeStrategy = locale => {
  const localeWithoutRegionCode = locale.toLowerCase().split(/[_-]+/)[0]

  if (locales.includes(locale)) {
    return locale
  } else if (locales.includes(localeWithoutRegionCode)) {
    return localeWithoutRegionCode
  }

  return defaultLocale
}

const currentLocale = localeStrategy(
  (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage
)

const initialState = {
  currentLocale
}

const intlReducer = (state = defaultLocale, action) => {
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
