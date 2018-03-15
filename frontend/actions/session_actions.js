import { postUser, postSession, deleteSession } from '../utils/session';


export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

const receiveCurrentUser= currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

export const signup = user => dispatch => (
  postUser(user).then(user => dispatch(receiveCurrentUser(user)))
)
