// import { RECEIVE_MESSAGE, RECEIVE_MESSAGES, CLEAR_MESSAGES} from '../actions/message_actions';

// const MessagesReducer = (state = {}, action) => {
//   Object.freeze(state);
//   switch(action.type) {
//     case RECEIVE_MESSAGES:
//       return Object.assign({}, action.messages)
//     case RECEIVE_MESSAGE:
//       return Object.assign({}, state, { [action.message.id]: action.message })
//     case CLEAR_MESSAGES:
//       return {}
//   }
// }