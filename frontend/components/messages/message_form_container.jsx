import MessageForm from './message_form'
import {connect} from 'react-redux'
import { fetchMessages, deleteMessage, createMessage, receiveMessage } from '../../actions/message_actions';
import { fetchChannel, fetchChannels } from "../../actions/channel_actions";
// import { receiveUser } from "../../../actions/user_actions";

const mapStateToProps = (state, ownProps) => {

  return ({
   messages: Object.values(state.entities.messages),
   currentUser: state.entities.users[state.session.id],
   currentChannelId: parseInt(ownProps.match.params.channelId),
   currChannel: state.entities.channels[ownProps.match.params.channelId],
   channels: Object.values(state.entities.channels),
   users: Object.values(state.entities.users),
})
}

const mapDispatchToProps = (dispatch) => ({
   fetchChannel: id => dispatch(fetchChannel(id)),
   fetchChannels: (serverId) => dispatch(fetchChannels(serverId)),
   fetchUsers: () => dispatch(fetchUsers()),
   receiveMessage: (message) => dispatch(receiveMessage(message)),
   fetchMessages: () => dispatch(fetchMessages()),
   deleteMessage: (id) => dispatch(deleteMessage(id)),
   createMessage: (message) => dispatch(createMessage(message))
})

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);



