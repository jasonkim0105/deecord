import Messages from './messages'
import {connect} from 'react-redux'

import {fetchMessages, clearMessages} from "../../actions/message_actions";
import {fetchUser} from "../../actions/user_actions";
// import { receiveUser } from "../../../actions/user_actions";

const mapStateToProps = (state, ownProps) => {

  return ({
   currentUser: state.entities.users[state.session.id],
   currentChannelId: parseInt(ownProps.match.params.channelId),
   currChannel: state.entities.channels[ownProps.match.params.channelId],
   users: state.entities.users,
   messages: state.entities.messages,
   channels: state.entities.channels,
   session: state.session.id,
})
}

const mapDispatchToProps = (dispatch) => ({
   fetchMessages: channelID => dispatch(fetchMessages(channelID)),
   clearMessages: () => dispatch(clearMessages()),
   fetchUser: user => dispatch(fetchUser(user)),
   // fetchServerUsers: serverID => dispatch(receiveServerUsers(serverID)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Messages);





