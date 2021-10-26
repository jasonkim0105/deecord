import React from 'react'
import { connect } from "react-redux";
import Messages from "./messages"
import { fetchChannels } from '../../actions/channel_actions';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import { fetchServerUsers } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  serverId: parseInt(ownProps.match.params.serverId),
  channelId: parseInt(ownProps.match.params.channelId),
  messages: Object.values(state.entities.messages)
})

const mapDispatchToProps = dispatch => ({
  fetchChannels: channels => dispatch(fetchChannels(channels)),
  openModal: modal => dispatch(openModal(modal)),
  fetchServerUsers: serverId => dispatch(fetchServerUsers(serverId)),
  fetchMessages: (serverId, channelId) => dispatch(fetchMessages(serverId, channelId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Messages))