const { GET_COMMENTER_VALUE, GET_COMMENT_VALUE, NEW_COMMENT} = require('../types')

const iState = {
    commenter:'',
    comment:''
}

const FormValueReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_COMMENTER_VALUE:
      return { ...state, commenter: action.payload, }
      case GET_COMMENT_VALUE:
        return { ...state, comment: action.payload}
        case NEW_COMMENT:
            return { ...state, newComment: action.payload}
    default:
      return { ...state }
  }
}

export default FormValueReducer