import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import FormValueReducer from './reducers/FormValueReducer'
import LocationReducer from './reducers/LocationReducer'
import LocationsReducer from './reducers/LocationsReducer'

const store = createStore(
  combineReducers({
    locationsState: LocationsReducer,
    locationState: LocationReducer,
    commenterState: FormValueReducer,
    commentState: FormValueReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
