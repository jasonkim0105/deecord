import Messages from './messages'
import {connect} from 'react-redux'
import { receiveMessage, getMessagesIndex, getMessageCreate, getMessageDestroy } from '../../actions/message_actions'

const mapStateToProps = (state, ownProps) => {

  return ({
   messages: Object.values(state.entities.messages),
   currentUser: state.entities.users[state.session.id],
   newChannelId: parseInt(ownProps.match.params.channelId),
   currChannel: state.entities.channels[ownProps.match.params.channelId],
   server: state.entities.servers[ownProps.match.params.serverId],
})
}

const mapDispatchToProps = (dispatch) => ({
   getMessagesIndex: channelId => dispatch(getMessagesIndex(channelId)),
   getMessageCreate: formmessage => dispatch(getMessageCreate(formmessage)),
   getMessageDestroy: id => dispatch(getMessageDestroy(id)),
   receiveMessage: message => dispatch(receiveMessage(message)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Messages);