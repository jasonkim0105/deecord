export const fetchServers = () => {
  return $.ajax({
    url: 'api/servers',
    method: 'GET'
  })
}

export const fetchServer = serverId => {
  return $.ajax({
    url: `api/servers/${serverId}`,
    method: "GET",
  })
}

export const createServer = server => {
  return $.ajax({
    url: '/api/servers',
    method: 'POST',
    data: { server }
  })
}

export const updateServer = (server) => {
  return $.ajax({
    url: `api/servers/${server.id}`,
    method: "PATCH",
    data: { server }
  })
}

export const deleteServer = (serverId) => {
  return $.ajax({
    url: `api/servers/${serverId}`,
    method: "DELETE"
  })
}

export const joinServer = (serverUser) => {
  return $.ajax({
    url:'api/server_users',
    method: "POST",
    data: { serverUser }
  })
}

export const leaveServer = (serverUser) => {
  return $.ajax({
    url: 'api/server/users',
    method: "DELETE",
    data: { serverUser }
  })
}