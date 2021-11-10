import * as ServerAPIUtil from '../util/server_api_util';

export const RECEIVE_SERVER = "RECEIVE_SERVER";
export const RECEIVE_SERVERS = "RECEIVE_SERVERS";
export const REMOVE_SERVER = "REMOVE_SERVER";
export const RECEIVE_SERVER_ERRORS = "RECEIVE_SERVER_ERRORS";
export const CLEAR_SERVER_ERRORS = "CLEAR_SERVER_ERRORS";

const receiveServer = server => ({
    type: RECEIVE_SERVER,
    server
})

const receiveServers = servers => ({
    type: RECEIVE_SERVERS,
    servers
})

const removeServer = server => ({
    type: REMOVE_SERVER,
    server
})

const receiveServerErrors = errors => ({
    type: RECEIVE_SERVER_ERRORS,
    errors
})

export const clearServerErrors = () => ({
    type: CLEAR_SERVER_ERRORS,
})

export const fetchServers = () => dispatch => (
  ServerAPIUtil.fetchServers()
  .then( (servers) => dispatch(receiveServers(servers)),
  (errors) => dispatch(receiveServerErrors(errors)))
)

export const fetchServer = (serverId) => dispatch => (
  ServerAPIUtil.fetchServer(serverId)
  .then((server) => dispatch(receiveServer(server)),
  (errors) => dispatch(receiveServerErrors(errors)))
)

export const createServer = (server) => dispatch => (
  ServerAPIUtil.createServer(server)
  .then((server) => dispatch(receiveServer(server)),
  (errors) => dispatch(receiveServerErrors(errors)))
)

export const updateServer = server => dispatch => (
  ServerAPIUtil.updateServer(server)
  .then((server) => dispatch(receiveServer(server)),
  (errors) => dispatch(receiveServerErrors(errors)))
)

export const deleteServer = (serverId) => dispatch => (
  ServerAPIUtil.deleteServer(serverId)
  .then((server) => dispatch(removeServer(server)),
  (errors) => dispatch(receiveServerErrors(errors)))
)

export const joinServer = (inviteCode) => dispatch => (
  ServerAPIUtil.joinServer(inviteCode)
  .then((server) => dispatch(receiveServer(server)),
  (errors) => dispatch(receiveServerErrors(errors)))
)

export const leaveServer = (serverId) => dispatch => (
  ServerAPIUtil.leaveServer(serverId)
  .then((server) => dispatch(receiveServer(server)),
  (errors) => dispatch(receiveServerErrors(errors)))
)