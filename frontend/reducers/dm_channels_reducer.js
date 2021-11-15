import { RECEIVE_DMCHANNEL, RECEIVE_DMCHANNELS } from "../actions/dm_channel_actions"


const DMChannelsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_DMCHANNELS:
            return Object.assign({}, action.channels)
        case RECEIVE_DMCHANNEL:
            return Object.assign({}, state, { [action.channel.id]: action.channel })
        default:
            return state
    }
}

export default DMChannelsReducer;