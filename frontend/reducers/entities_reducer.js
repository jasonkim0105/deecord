import {combineReducers} from 'redux';
import UsersReducer from './users_reducer';
import ServersReducer from './servers_reducer';
import ChannelsReducer from './channels_reducer';
import MessagesReducer from './messages_reducers';

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    servers: ServersReducer,
    channels: ChannelsReducer,
    messages: MessagesReducer
})

export default EntitiesReducer;