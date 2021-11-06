import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_USERS } from "../actions/session_actions";
import { RECEIVE_ALL_USERS, RECEIVE_USER } from "../actions/user_actions";
import {merge} from "lodash";
import {RECEIVE_MESSAGES} from "../actions/message_actions";


const UsersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch(action.type){

        case RECEIVE_CURRENT_USER:
            newState[action.currentUser.id] = action.currentUser
            return newState;

        case LOGOUT_CURRENT_USER:
            return {};

        case RECEIVE_USERS:
            Object.keys(action.users).forEach(userId => {
            newState[userId] = action.users[userId];
            });
            return newState;

        case RECEIVE_ALL_USERS:
            return Object.assign({}, state, action.users);

        case RECEIVE_USER:
            return merge({}, state, {[action.user.id]: action.user});

        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });

        case RECEIVE_MESSAGES:
            return merge({}, state, action.payload.users);

        default:
            return state;
        }
}

export default UsersReducer

