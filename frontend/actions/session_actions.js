import * as SessionAPIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receieveCurrentUser = (current_user) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
})

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
})

export const login = (user) => dispatch => (
  SessionAPIUtil.login(user)
  .then((currentUser) => dispatch(receiveCurrentUser(currentUser)),
  error => dispatch(receiveErrors(error)))
)

export const logout = () => disaptch => (
  SessionAPIUtil.logout()
  .then( () => dispatch(logoutCurrentUser(user)))
)

export const signup = (user) => dispatch => (
  SessionAPIUtil.signup()
  .then((currentUser) => dispatch(receiveCurrentUser(currentUser)),
  error => dispatch(receiveErrors(error)))
)