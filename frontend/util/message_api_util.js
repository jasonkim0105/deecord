export const fetchMessages = channelId => {
  return $.ajax({
      method: "GET",
      url: `/api/servers/:serverId/channels/${channelId}/messages`,
  });
};