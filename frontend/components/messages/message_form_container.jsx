import MessageForm from './message_form'
import {connect} from 'react-redux'
// import { fetchMessages, deleteMessage, createMessage, receiveMessage } from '../../actions/message_actions';
// import { fetchChannel, fetchChannels } from "../../actions/channel_actions";
// import { receiveUser } from "../../../actions/user_actions";
// import { fetchServers, clearServers } from "../../actions/server_actions";

const mapStateToProps = (state, ownProps) => {

  return ({
   // messages: Object.values(state.entities.messages),
   // currentUser: state.entities.users[state.session.id],
   // currentChannelId: parseInt(ownProps.match.params.channelId),
   // currChannel: state.entities.channels[ownProps.match.params.channelId],
   // channels: Object.values(state.entities.channels),
   // users: Object.values(state.entities.users),
   current_user: state.session.id
})
}

const mapDispatchToProps = (dispatch) => ({

   // fetchServers: (sessionID, isPublic) => dispatch(fetchServers(sessionID, isPublic)),
   // clearServers: () => dispatch(clearServers()),

})

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);



