import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import {
  LoadCommenterValue,
  LoadCommentValue
} from '../store/actions/LocationActions'
const NewComment = (props) => {
  const navigate = useNavigate()

  const handleChange = (event) => {
    props.createComment(event.target.value)
  }

  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   props.addTodo(props.todoState.newTodo)
  // }
  return (
    <div>
      <input
        className="form"
        type="text"
        name="commenter"
        placeholder="Your Name"
        // value={commenter}
        // onChange={handleChange}
      />
      <textarea
        className="form"
        type="text"
        name="comment"
        placeholder="Leave Comment Here..."
        value={props.commentState.comment}
        onChange={handleChange}
      />
      <button>Submit</button>
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
    createComment: (formValue) => dispatch(LoadCommentValue(formValue))
  }
}
export default connect(mapStateToProps, mapActionsToProps)(NewComment)
