const { GET_LOCATION } = require('../types')

const iState = {
  location: [],
  comments: []
}

const LocationReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_LOCATION:
      return {
        ...state,
        location: action.payload,
        comments: action.payload.locationComments
      }

    default:
      return { ...state }
  }
}

export default LocationReducer