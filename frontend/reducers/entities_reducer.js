import {combineReducers} from 'redux';
import UsersReducer from './users_reducer';
import ServersReducer from './servers_reducer';
import ChannelsReducer from './channels_reducer';
import MessagesReducer from './messages_reducer';
import DirectMessagesReducer from './dm_reducer';
import DMChannelsReducer from './dm_channels_reducer';

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    servers: ServersReducer,
    channels: ChannelsReducer,
    messages: MessagesReducer,
    directMessages: DirectMessagesReducer,
    DMChannels: DMChannelsReducer,
})

export default EntitiesReducer;