import React from 'react'
import { connect } from "react-redux";
import Message from "./message"
import { fetchChannels } from '../../actions/channel_actions';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import { fetchServerUsers } from '../../actions/session_actions';
import { fetchChannelMessages } from '../../actions/message_actions';

const mapStateToProps = (state, ownProps) => ({
  serverId: parseInt(ownProps.match.params.serverId),
  channelId: parseInt(ownProps.match.params.channelId),
  messages: Object.values(state.entities.messages)
})

const mapDispatchToProps = dispatch => ({
  fetchChannels: channels => dispatch(fetchChannels(channels)),
  openModal: modal => dispatch(openModal(modal)),
  fetchServerUsers: serverId => dispatch(fetchServerUsers(serverId)),
  fetchMessages: (channelId) => dispatch(fetchChannelMessages(channelId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Message))