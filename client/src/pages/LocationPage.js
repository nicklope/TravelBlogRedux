import axios from 'axios'
import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { LoadLocation } from '../store/actions/LocationActions'
import { connect } from 'react-redux'

const mapStateToProps = ({ locationState }) => {
  return { locationState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLocation: (id) => dispatch(LoadLocation(id))
  }
}

const LocationPage = (props) => {
  let { id } = useParams()

  useEffect(() => {
    props.fetchLocation(id)
    console.log(props)
  }, [id])

  console.log(props.locationState.location)

  let location = props.locationState.location
  console.log(location.locationName)

  return (
    <div>
      Hello World!
      <div>{location.locationName}</div>
    </div>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(LocationPage)
