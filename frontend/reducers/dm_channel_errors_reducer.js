import { RECEIVE_DMCHANNEL_ERRORS, RECEIVE_DMCHANNEL } from '../actions/dm_channel_actions';

const DMChannelErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_DMCHANNEL:
      return [];
    case RECEIVE_DMCHANNEL_ERRORS:
      return action.errors.responseJSON;
    default:
      return state;
  }
};

export default DMChannelErrorsReducer;