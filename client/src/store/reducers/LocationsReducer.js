const { GET_LOCATIONS } = require('../types')

const iState = {
  locations: [],
  comments: []
}

const LocationsReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_LOCATIONS:
      return { ...state, locations: action.payload, comments: action.payload }
    default:
      return { ...state }
  }
}

export default LocationsReducer
