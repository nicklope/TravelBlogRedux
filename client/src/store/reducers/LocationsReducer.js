const { GET_LOCATIONS } = require('../types')

const iState = {
  locations: []
}

const LocationsReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_LOCATIONS:
      return { ...state, locations: action.payload }
    default:
      return { ...state }
  }
}

export default LocationsReducer
