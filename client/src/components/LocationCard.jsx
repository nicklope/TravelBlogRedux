import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoadLocations } from '../store/actions/LocationActions' 

const mapStateToProps = ({locationsState}) => {
  return {locationsState}
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetchLocations: () => dispatch(LoadLocations())
  }
}

const LocationCard = (props) => {
  
  useEffect(()=>{
    props.fetchLocations()
    console.log(props)
  },[])

return (
  <div>
    {props.locationsState.locations.location.map((location)=>(
      <div>
      <img src={location.locationImage}/>
      <h1>{location.locationName}</h1>
      </div>
    ))}
  </div>
)
}
export default connect(mapStateToProps, mapDispatchToProps)(LocationCard)