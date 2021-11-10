import { RECEIVE_MESSAGE, RECEIVE_MESSAGES, CREATE_MESSAGE, DELETE_MESSAGE }
   from '../actions/message_actions'

const messagesReducer = (state = {}, action) => {
   Object.freeze(state);
   const newState = Object.assign({}, state);

   switch (action.type) {
      case RECEIVE_MESSAGE:
         newState[action.message.id] = action.message
         return newState;

      case RECEIVE_MESSAGES:
         return action.messages
      case CREATE_MESSAGE:
         newState[action.message.id] = action.message;
         return newState;

      case DELETE_MESSAGE:
         delete newState[action.message.id];
         return newState

      default:
         return state;
   }
}

export default messagesReducer;