import {
  GetLocation,
  GetLocations,
  GetComments
} from '../../services/LocationService'

import { GET_LOCATIONS, GET_LOCATION, GET_COMMENTS } from '../types'

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
