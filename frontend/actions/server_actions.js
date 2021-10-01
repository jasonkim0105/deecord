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
    type: RECEIVE_SERVERs,
    servers
  }
}

const removeServer = serverId => {
  return {
    type: RECEIVE_SERVER,
    serverId
  }
}

const receiveServerErrors = errors => {
  return {
    type: RECEIVE_SERVER_ERRORS,
    errors
  }
}

const clearServerErrors = () => {
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
  .then((serverId) => dispatch(receiveServer(serverId)),
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

export const joinServer = (serverUser) => dispatch => {
  ServerAPIUtil.joinServer(serverUser)
  .then((server) => dispatch(receiveServer(server)),
  (error) => dispatch(receiveServerErrors(error)))
}

export const leaveServer = (serverUser) => dispatch => {
  ServerAPIUtil.leaveServer(serverUser)
  .then((serverId) => dispatch(receiveServer(serverId)),
  (error) => dispatch(receiveServerErrors(error)))
}