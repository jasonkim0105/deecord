export const createDM = message => {
  return $.ajax({
      method: "post",
      url: "/api/direct_messages",
      data: { message }
  })
}

export const fetchChannelDMs = dmChannelId => {
  return $.ajax({
      method: "get",
      url: "/api/direct_messages",
      data: { dmChannelId }
  })
}

export const deleteDM = message => {
  return $.ajax({
      method: "delete",
      url: `/api/direct_messages/${message.id}`
  })
}