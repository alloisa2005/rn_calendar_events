
import { createStore, combineReducers } from 'redux'

import eventsReducer from './reducers/events.reducer'

const rootReducer = combineReducers({
  events: eventsReducer
})

export default  createStore(rootReducer);