import * as messageAPIUtil from "../util/message_api_util";

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'
export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES'
export const CREATE_MESSAGE = 'CREATE_MESSAGE'
export const DELETE_MESSAGE = 'DELETE_MESSAGE'

export const receiveMessage = message => ({
   type: RECEIVE_MESSAGE,
   message
})

const receiveMessages = messages => ({
   type: RECEIVE_MESSAGES,
   messages
})

const createMessage = message => ({
   type: CREATE_MESSAGE,
   message
})

const deleteMessage = message => ({
   type: DELETE_MESSAGE,
   message
})

export const getMessageShow = id => dispatch => (
   messageAPIUtil.messageShow(id)
      .then( message => dispatch(receiveMessage(message)))
)

export const getMessagesIndex = channelId => dispatch => (
   messageAPIUtil.messagesIndex(channelId)
      .then( messages => dispatch(receiveMessages(messages)))
)

export const getMessageCreate = formmessage => dispatch => (
   messageAPIUtil.messageCreate(formmessage)
      .then( message => dispatch(createMessage(message)))
)

export const getMessageDestroy = id => dispatch => (
   messageAPIUtil.messageDestroy(id)
      .then( message => dispatch(deleteMessage(message)))
)
