const { GET_LOCATION } = require('../types')

const iState = {
  location: []
}

const LocationReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_LOCATION:
      return { ...state, location: action.payload }
    default:
      return { ...state }
  }
}

export default LocationReducer
