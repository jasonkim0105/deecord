import * as ChannelAPIUtil from '../util/channel_api_util';

export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';
export const RECEIVE_CHANNEL_ERRORS = "RECEIVE_CHANNEL_ERRORS";
export const CLEAR_CHANNEL_ERRORS = "CLEAR_CHANNEL_ERRORS";

const receiveChannels = channels => ({
  type: RECEIVE_CHANNELS,
  channels
})
const receiveChannel = channel => ({
  type: RECEIVE_CHANNEL,
  channel
})

const removeChannel = channel => ({
  type: REMOVE_CHANNELS,
  channel
})

const receiveChannelErrors = errors => {
  return {
    type: RECEIVE_CHANNEL_ERRORS,
    errors
  }
}

export const clearChannelErrors = () => {
  return {
    type: CLEAR_CHANNEL_ERRORS,
  }
}

export const fetchChannels = () => dispatch => {
  ChannelAPIUtil.fetchChannels()
  .then( (channels) => dispatch(receiveChannels(channels)),
  (error) => dispatch(receiveChannelErrors(error)))
}

export const fetchChannel = (channel) => dispatch => {
  ChannelAPIUtil.fetchChannel(channel)
  .then((channel) => dispatch(receiveChannel(channel)),
  (error) => dispatch(receiveChannelErrors(error)))
}

export const createChannel = (channel) => dispatch => {
  ChannelAPIUtil.createChannel(channel)
  .then((channel) => dispatch(receiveChannel(channel)),
  (error) => dispatch(receiveChannelErrors(error)))
}

export const updateChannel = channel => dispatch => {
  ChannelAPIUtil.updateChannel(channel)
  .then((channel) => dispatch(receiveChannel(channel)),
  (error) => dispatch(receiveChannelErrors(error)))
}

export const deleteChannel = (channel) => dispatch => {
  ChannelAPIUtil.deleteChannel(channel)
  .then((channel) => dispatch(removeChannel(channel)),
  (error) => dispatch(receiveChannelErrors(error)))
}

// export const leaveChannel = (channel) => dispatch => {
//   ChannelAPIUtil.leaveChannel(channel)
//   .then((channel) => dispatch(receiveChannel(channel)),
//   (error) => dispatch(receiveChannelErrors(error)))
// }