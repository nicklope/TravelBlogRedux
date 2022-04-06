import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import LocationsReducer from './reducers/LocationsReducer'

const store = createStore(
  combineReducers({
    locationsState: LocationsReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
