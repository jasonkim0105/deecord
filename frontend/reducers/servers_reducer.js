import {RECEIVE_SERVER, RECEIVE_SERVERS, REMOVE_SERVER} from '../actions/server_actions'
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const ServersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)
  switch(action.type){
    case RECEIVE_SERVER:
      return Object.assign({}, state, { [action.server.id]: action.server });
    case RECEIVE_SERVERS:
      return action.servers;
    case REMOVE_SERVER:
      return {}
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
}

export default ServersReducer