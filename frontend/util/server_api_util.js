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