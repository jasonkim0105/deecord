export const messagesIndex = (channelId) => (
  $.ajax({
     url: `/api/servers/:serverId/channels/${channelId}/messages`,
     method: 'GET'
  })
)

export const messageShow = (id) => (
  $.ajax({
     url: `/api/messages/${id}`,
     method: 'GET'
  })
)

export const messageCreate = (formMessage) => (
  $.ajax({
     url: `/api/messages`,
     method: 'message',
     data: {message: formMessage}
  })
)

export const messageDestroy = (id) => (
  $.ajax({
     url: `/api/messages/${id}`,
     method: 'DELETE'
  })
)