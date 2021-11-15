import { RECEIVE_DM, RECEIVE_DMS, REMOVE_DM } from "../actions/dm_actions";

const DirectMessagesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_DMS:
            return Object.assign({}, action.messages)
        case RECEIVE_DM:
            return Object.assign({}, state, { [action.message.id]: action.message })
        case REMOVE_DM:
            const newState = Object.assign({}, state)
            delete newState[action.messageId]
            return newState
        default:
            return state
    }
}

export default DirectMessagesReducer;