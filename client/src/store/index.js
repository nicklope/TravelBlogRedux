import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import LocationReducer from './reducers/LocationReducer'
import LocationsReducer from './reducers/LocationsReducer'

const store = createStore(
  combineReducers({
    locationsState: LocationsReducer,
    locationState: LocationReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
