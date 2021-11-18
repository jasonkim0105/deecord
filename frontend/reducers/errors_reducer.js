import { combineReducers } from "redux";
import SessionErrorsReducer from "./session_errors_reducer";
import ServersErrorsReducer from './servers_errors_reducer';
import ChannelsErrorsReducer from './channels_errors_reducer';
import DMChannelErrorsReducer from './dm_channel_errors_reducer';

const ErrorsReducer = combineReducers({
  session: SessionErrorsReducer,
  servers: ServersErrorsReducer,
  channels: ChannelsErrorsReducer,
  DMChannels: DMChannelErrorsReducer
});

export default ErrorsReducer;