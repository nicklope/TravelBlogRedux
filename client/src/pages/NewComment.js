import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  LoadCommenterValue,
  LoadCommentValue,
  SubmitComment
} from '../store/actions/LocationActions'
const NewComment = (props) => {
  const navigate = useNavigate()

  const handleChange = (event) => {
    props.createComment(event.target.value)
  }
  const handleCommenterChange = (event) => {
    props.createCommenter(event.target.value)
  }
  const { id } = useParams()
  const handleSubmit = (event) => {
    let addedComment = {
      commenter: props.commentState.commenter,
      comment: props.commentState.comment,
      location: id
    }

    props.submitComment(id, addedComment)
    navigate(`/location/${id}`)
  }
  return (
    <div id="newcomment-container">
      <input
        className="form"
        type="text"
        name="commenter"
        placeholder="Your Name"
        value={props.commentState.commenter}
        onChange={handleCommenterChange}
      />
      <textarea
        className="form"
        type="text"
        name="comment"
        placeholder="Leave Comment Here..."
        value={props.commentState.comment}
        onChange={handleChange}
      />
      <button onClick={() => handleSubmit()}>Submit</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    commentState: state.commentState
  }
}
const mapActionsToProps = (dispatch) => {
  return {
    createCommenter: (formValue) => dispatch(LoadCommenterValue(formValue)),
    createComment: (formValue) => dispatch(LoadCommentValue(formValue)),
    submitComment: (id, formValue) => dispatch(SubmitComment(id, formValue))
  }
}
export default connect(mapStateToProps, mapActionsToProps)(NewComment)