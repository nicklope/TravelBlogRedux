import axios from 'axios'
import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { LoadLocation, LoadComments } from '../store/actions/LocationActions'
import { connect } from 'react-redux'

const mapStateToProps = ({ locationState }) => {
  return { locationState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLocation: (id) => dispatch(LoadLocation(id)),
    fetchComments: (id) => dispatch(LoadComments(id))
  }
}

const LocationPage = (props) => {
  let navigate = useNavigate()

  let { id } = useParams()

  const navNewComment = (id) => {
    navigate(`/newcomment/${id}`)
  }

  useEffect(() => {
    props.fetchLocation(id)
  }, [id])

  console.log(props.locationState)
  console.log(props.locationState.locationComments)
  let location = props.locationState.location

  return (
    <div>
      <img src={location.locationImage}></img>
      <div>
        <h1>{location.locationName}</h1>
        <h2>{location.locationOverview}</h2>
        {props.locationState.comments.map((comment) => (
          <div>
            <div>{comment.commenter}</div>
            <div>{comment.comment}</div>
          </div>
        ))}
        <button onClick={() => navNewComment(location._id)}>
          Add New Comment
        </button>
      </div>
    </div>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(LocationPage)