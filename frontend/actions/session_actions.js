import * as SessionAPIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const RECEIVE_USERS = 'RECEIVE_USERS';

const receiveCurrentUser = (currentUser) => ({
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

const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const login = (user) => dispatch => (
  SessionAPIUtil.login(user)
  .then((currentUser) => dispatch(receiveCurrentUser(currentUser)),
  error => dispatch(receiveErrors(error)))
)

export const logout = () => disaptch => (
  SessionAPIUtil.logout()
  .then( () => dispatch(logoutCurrentUser()))
)

export const signup = (user) => dispatch => (
  SessionAPIUtil.signup(user)
  .then((currentUser) => dispatch(receiveCurrentUser(currentUser)),
  error => dispatch(receiveErrors(error)))
)

export const updateUser = user => dispatch => (
  SessionAPIUtil.updateUser(user)
  .then(user => dispatch(receiveCurrentUser(user)))
)

export const fetchAllUsers = () => dispatch => {
  return SessionAPIUtil.fetchAllUsers()
  .then( users => dispatch(receiveUsers(users)))
}