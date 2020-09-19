import { handleActions } from 'redux-actions'
import { createComment, getComments } from '../actions'

export default handleActions(
  {
    [createComment]: (state, action) => {
      return [...state, action.payload]
    },
    [getComments]: (state, action) => {
      return action.payload
    },
  },
  []
)
