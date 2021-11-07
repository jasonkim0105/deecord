import * as MessageAPIUtil from '../util/message_api_util';

export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_MESSAGE_ERRORS = "RECEIVE_MESSAGE_ERRORS";
export const CLEAR_MESSAGES = "CLEAR_MESSAGES";
export const DELETE_MESSAGE = "DELETE_MESSAGE";

const receiveMessage = message => {
  return {
    type: RECEIVE_MESSAGE,
    message
  }
}

const receiveMessages = messages => {
  return {
    type: RECEIVE_MESSAGES,
    messages
  }
}

const receiveErrors = errors => {
  return {
    type: RECEIVE_MESSAGE_ERRORS,
    errors
  }
}

export const clearMessages = () => {
  return {
    type: CLEAR_MESSAGES
  }
}

const deleteMessage = messageId => {
  return {
    type: DELETE_MESSAGE,
    messageId
  }
}

export const createMessage = message => dispatch => (
  MessageAPIUtil.createMessage(message)
  .then( message => dispatch(receiveMessage(message)))
)

// export const fetchChannelMessages = channelId => dispatch => (
//   MessageAPIUtil.fetchChannelMessages(channelId)
//   .then( messages => dispatch(receiveMessages(messages)))
// )

// export const deleteIndividualMessage = message => dispatch => (
//   MessageAPIUtil.deleteMessage(message).then(() => dispatch(deleteMessage(message.id)))
// )

export const fetchMessages = (serverId, channelId) => dispatch => (
  MessageAPIUtil.fetchChannelMessages(serverId, channelId)
  .then( messages => dispatch(receiveMessages(messages)))
)