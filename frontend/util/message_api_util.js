
export const fetchChannelMessages = (serverId, channelId) => {
  return $.ajax({
    url: `/api/servers/${serverId}/channels/${channelId}/messages`,
    method: "GET",
    // data: { channelId }
  })
}

// export const fetchChannelMessages = channelId => {
//   return $.ajax({
//     url: `api/messages`,
//     method: "GET",
//     data: { channelId }
//   })
// }

// export const createMessage = message => {
//   return $.ajax({
//     url: "api/messages",
//     method: "POST",
//     data: { message }
//   })
// }

// export const deleteMessage = message => {
//   return $.ajax({
//     url: `/api/messages/${message.id}`,
//     method: "DELETE"
//   })
// }