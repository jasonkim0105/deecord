import * as DmAPIUtil from "../util/direct_message_api_util"

export const RECEIVE_DMS = 'RECEIVE_DMS'
export const RECEIVE_DM = 'RECEIVE_DM'
export const REMOVE_DM = 'REMOVE_DM'

const receiveDMs = messages => {
    return {
        type: RECEIVE_DMS,
        messages
    }
}

const receiveDM = message => {
    return {
        type: RECEIVE_DM,
        message
    }
}

const removeDM = messageId => {
    return {
        type: REMOVE_DM,
        messageId
    }
}

export const fetchChannelDMs = dmChannelId => dispatch => {
    return DmAPIUtil.fetchChannelDMs(dmChannelId).then(messages => dispatch(receiveDMs(messages)))
}

export const createDM = message => dispatch => {
    return DmAPIUtil.createDM(message).then(message => dispatch(receiveDM(message)))
}

export const deleteDM = message => dispatch => {
    return DmAPIUtil.deleteDM(message).then(() => dispatch(removeDM(message.id)))
}