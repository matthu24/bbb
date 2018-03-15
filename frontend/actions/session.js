import { postUser, postSession, deleteSession } from '../util/session';


export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser= currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = user => dispatch => (
  postUser(user).then(user => dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  )
)

export const login = user => dispatch => (
  postSession(user).then(user => dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  )
)

export const logout = () => dispatch => (
  deleteSession().then(user => receiveCurrentUser(null))
)
