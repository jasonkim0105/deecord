import * as ServerAPIUtil from '../util/server_api_util';

export const RECEIVE_SERVER = "RECEIVE_SERVER";
export const RECEIVE_SERVERS = "RECEIVE_SERVERS";
export const REMOVE_SERVER = "REMOVE_SERVER";

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

export const fetchServers = () => dispatch => {
  ServerAPIUtil.fetchServers()
  .then( (servers) => dispatch(receiveServers(servers)))
}

export const fetchServer = (serverId) => dispatch => {
  ServerAPIUtil.fetchServer(serverId)
  .then((serverId) => dispatch(receiveServer(serverId)))
}

export const createServer = (server) => dispatch => {
  ServerAPIUtil.createServer(server)
  .then((server) => dispatch(receiveServer(server)))
}

export const updateServer = server => dispatch => {
  ServerAPIUtil.updateServer(server)
  .then((server) => dispatch(receiveServer(server)))
}

export const deleteServer = (serverId) => {
  ServerAPIUtil.deleteServer(serverId)
  .then((server) => dispatch(removeServer(server.id)))
}