import {
  GetLocation,
  GetLocations,
  GetComments
} from '../../services/LocationService'

import {
  GET_LOCATIONS,
  GET_LOCATION,
  GET_COMMENT_VALUE,
  GET_COMMENTER_VALUE
} from '../types'

export const LoadLocations = () => {
  return async (dispatch) => {
    try {
      const locations = await GetLocations()
      dispatch({
        type: GET_LOCATIONS,
        payload: locations.location
      })
    } catch (error) {}
  }
}

export const LoadLocation = (id) => {
  return async (dispatch) => {
    try {
      const location = await GetLocation(id)
      dispatch({
        type: GET_LOCATION,
        payload: location.location
      })
    } catch (error) {}
  }
}

export const LoadCommenterValue = (commenterValue) => ({
  type: GET_COMMENTER_VALUE,
  payload: commenterValue
})

export const LoadCommentValue = (commentValue) => ({
  type: GET_COMMENT_VALUE,
  payload: commentValue
})
