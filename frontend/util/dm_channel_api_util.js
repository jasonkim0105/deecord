export const createDmChannel = dm_channel => {
  return $.ajax({
      method: "post",
      url: "/api/dm_channels",
      data: { dm_channel }
  })
}

export const fetchDmChannels = userId => {
  return $.ajax({
      method: "get",
      url: "/api/dm_channels",
      data: { userId }
  })
}