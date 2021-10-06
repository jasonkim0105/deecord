import * as ServerAPIUtil from '../util/server_api_util';

export const RECEIVE_SERVER = "RECEIVE_SERVER";
export const RECEIVE_SERVERS = "RECEIVE_SERVERS";
export const REMOVE_SERVER = "REMOVE_SERVER";
export const RECEIVE_SERVER_ERRORS = "RECEIVE_SERVER_ERRORS";
export const CLEAR_SERVER_ERRORS = "CLEAR_SERVER_ERRORS";

const receiveServer = server => {
  return {
    type: RECEIVE_SERVER,
    server
  }
}

const receiveServers = servers => {
  return {
    type: RECEIVE_SERVERS,
    servers
  }
}

const removeServer = server => {
  return {
    type: RECEIVE_SERVER,
    server
  }
}

const receiveServerErrors = errors => {
  return {
    type: RECEIVE_SERVER_ERRORS,
    errors
  }
}

export const clearServerErrors = () => {
  return {
    type: CLEAR_SERVER_ERRORS,
  }
}

export const fetchServers = () => dispatch => {
  ServerAPIUtil.fetchServers()
  .then( (servers) => dispatch(receiveServers(servers)),
  (error) => dispatch(receiveServerErrors(error)))
}

export const fetchServer = (serverId) => dispatch => {
  ServerAPIUtil.fetchServer(serverId)
  .then((server) => dispatch(receiveServer(server)),
  (error) => dispatch(receiveServerErrors(error)))
}

export const createServer = (server) => dispatch => {
  ServerAPIUtil.createServer(server)
  .then((server) => dispatch(receiveServer(server)),(error) => dispatch(receiveServerErrors(error)))
}

export const updateServer = server => dispatch => {
  ServerAPIUtil.updateServer(server)
  .then((server) => dispatch(receiveServer(server)),
  (error) => dispatch(receiveServerErrors(error)))
}

export const deleteServer = (serverId) => dispatch => {
  ServerAPIUtil.deleteServer(serverId)
  .then((server) => dispatch(removeServer(server.id)),
  (error) => dispatch(receiveServerErrors(error)))
}

export const joinServer = (inviteCode) => dispatch => {
  ServerAPIUtil.joinServer(inviteCode)
  .then((server) => dispatch(receiveServer(server)),
  (error) => dispatch(receiveServerErrors(error)))
}

export const leaveServer = (serverId) => dispatch => {
  ServerAPIUtil.leaveServer(serverId)
  .then((server) => dispatch(receiveServer(server)),
  (error) => dispatch(receiveServerErrors(error)))
}