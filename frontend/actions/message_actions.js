import * as MessageAPIUtil from "../util/message_api_util";

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const CLEAR_MESSAGES = "CLEAR_MESSAGES";

export const fetchMessages = channelID => dispatch => {
    return(
        MessageAPIUtil.fetchMessages(channelID).then(payload => dispatch(receiveMessages(payload)))
    );
};

const receiveMessages = payload => {
    return({
        type: RECEIVE_MESSAGES,
        payload
    });
};

export const clearMessages = () => {
    return ({
        type: CLEAR_MESSAGES
    });
};