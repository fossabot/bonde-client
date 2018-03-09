import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const initialState = {}

const rootReducer = combineReducers({
  form: formReducer
})

export default createStore(rootReducer, initialState)
