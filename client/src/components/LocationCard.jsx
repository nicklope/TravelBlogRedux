import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoadLocations } from '../store/actions/LocationActions' 
import { useNavigate } from 'react-router-dom'



const mapStateToProps = ({locationsState}) => {
  return {locationsState}
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetchLocations: () => dispatch(LoadLocations())
  }
}

const LocationCard = (props) => {
  let navigate = useNavigate()

  const navLocation = (id) => {
    navigate(`/location/${id}`)
  }

  useEffect(()=>{
    props.fetchLocations()
    console.log(props)
  },[])

return (
  <div>
    {props.locationsState.locations.map((location)=>(
      <div>
      <img src={location.locationImage} onClick={()=> {
        navLocation(location._id)
      }}/>
      <h1>{location.locationName}</h1>
      </div>
    ))}
  </div>
)
}
export default connect(mapStateToProps, mapDispatchToProps)(LocationCard)