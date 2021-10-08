export const fetchChannels = serverId => {
  return $.ajax({
    url: `api/servers/${serverId}/channels`,
    method: 'GET',
  })
}

export const fetchChannel = channel => {
  return $.ajax({
    url: `api/servers/${channel.server_id}/channels/${channel.id}`,
    method: "GET",
  })
}

export const createChannel = channel => {
  return $.ajax({
    url: `/api/servers/${channel.server_id}/channels`,
    method: 'POST',
    data: { channel }
  })
}

export const updateChannel = (channel) => {
  return $.ajax({
    url: `api/servers/${channel.server_id}/channels/${channel.id}`,
    method: "PATCH",
    data: { channel }
  })
}

export const deleteChannel = (channel) => {
  return $.ajax({
    url: `api/servers/${channel.server_id}/channels/${channel.id}`,
    method: "DELETE"
  })
}

// export const leaveServer = (serverId) => {
//   return $.ajax({
//     url: `api/servers/${serverId}/leave`,
//     method: "DELETE",
//   })
// }