import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import FormValueReducer from './reducers/FormValueReducer'
import LocationReducer from './reducers/LocationReducer'
import LocationsReducer from './reducers/LocationsReducer'
import CommentReducer from './reducers/CommentReducer'

const store = createStore(
  combineReducers({
    locationsState: LocationsReducer,
    locationState: LocationReducer,
    commenterState: FormValueReducer,
    commentState: FormValueReducer,
    commentsState: CommentReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
