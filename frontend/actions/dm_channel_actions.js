import * as DmChannelAPIUtil from "../util/dm_channel_api_util"

export const RECEIVE_DMCHANNEL = 'RECEIVE_DMCHANNEL'
export const RECEIVE_DMCHANNELS = 'RECEIVE_DMCHANNELS'
export const RECEIVE_DMCHANNEL_ERRORS = 'RECEIVE_DMCHANNEL_ERRORS'

const receiveDmChannel = channel => {
    return {
        type: RECEIVE_DMCHANNEL,
        channel
    }
}

const receiveDmChannels = channels => {
    return {
        type: RECEIVE_DMCHANNELS,
        channels
    }
}

export const receiveDmChannelErrors = errors => ({
    type: RECEIVE_DMCHANNEL_ERRORS,
    errors
})

export const createDmChannel = dm_channel => dispatch => {
    return DmChannelAPIUtil.createDmChannel(dm_channel).then(channel => dispatch(receiveDmChannel(channel)))
}

export const fetchDmChannels = userId => dispatch => {
    return DmChannelAPIUtil.fetchDmChannels(userId).then(channels => dispatch(receiveDmChannels(channels)))
}