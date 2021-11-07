import React from 'react'
import { connect } from "react-redux";
import Messages from "./messages"
import { fetchChannels } from '../../actions/channel_actions';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import { fetchServerUsers } from '../../actions/session_actions';
import { fetchMessages } from '../../actions/message_actions';


const mapStateToProps = (state, ownProps) => ({
  newChannelId: parseInt(ownProps.match.params.channelId),
  channelIdString: ownProps.match.params.channelId,
  currChannel: state.entities.channels[ownProps.match.params.channelId],
  currentUser: state.session.id,
  serverId: parseInt(ownProps.match.params.serverId),
})

const mapDispatchToProps = dispatch => ({
  fetchChannels: channels => dispatch(fetchChannels(channels)),
  openModal: modal => dispatch(openModal(modal)),
  fetchServerUsers: serverId => dispatch(fetchServerUsers(serverId)),
  fetchMessages: (serverId, channelId) => dispatch(fetchMessages(serverId, channelId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Messages))