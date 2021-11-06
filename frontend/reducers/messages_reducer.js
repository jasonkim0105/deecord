import {RECEIVE_MESSAGES, CLEAR_MESSAGES} from "../actions/message_actions";
import {merge} from "lodash";

const MessagesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_MESSAGES:
            return merge({}, state, action.payload.messages);
        case CLEAR_MESSAGES:
            return {};
        default:
            return state;
    }
};


export default MessagesReducer;