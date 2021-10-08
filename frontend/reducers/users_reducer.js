import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_USERS } from "../actions/session_actions";


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
        default:
            return state;
    }
}

export default UsersReducer