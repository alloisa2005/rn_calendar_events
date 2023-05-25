
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import eventsReducer from './reducers/events.reducer'

const rootReducer = combineReducers({
  events: eventsReducer
})

export default  createStore(rootReducer, applyMiddleware(thunk));