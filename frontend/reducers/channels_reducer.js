import { RECEIVE_CHANNEL, RECEIVE_CHANNELS, REMOVE_CHANNEL} from '../actions/channel_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const ChannelsReducer = ( state={}, action) => {
  Object.freeze(state);
  let newState = Object.assign( {}, state);
  switch(action.type) {
    case RECEIVE_CHANNELS:
      return action.channels;
    case RECEIVE_CHANNEL:
      return Object.assign({}, state, { [action.channel.id]: action.channel });
    case REMOVE_CHANNEL:
      delete newState[action.id]
      return newState
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
}

export default ChannelsReducer;