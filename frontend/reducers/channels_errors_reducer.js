import {
  RECEIVE_CHANNEL,
  RECEIVE_CHANNEL_ERRORS,
  CLEAR_CHANNEL_ERRORS
} from '../actions/channel_actions';

const ChannelErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CHANNEL:
      return [];
    case RECEIVE_CHANNEL_ERRORS:
      return action.errors.responseJSON;
    case CLEAR_CHANNEL_ERRORS:
      return [];
    default:
      return state;
  }
};

export default ChannelErrorsReducer;