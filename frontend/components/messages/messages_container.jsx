import React from 'react'
import { connect } from "react-redux";
import Messages from "./messages"
import { fetchChannels } from '../../actions/channel_actions';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import { fetchServerUsers } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  newChannelId: ownProps.match.params.channelId,
  currChannel: state.entities.channels[ownProps.match.params.channelId]
})

const mapDispatchToProps = dispatch => ({
  fetchChannels: channels => dispatch(fetchChannels(channels)),
  openModal: modal => dispatch(openModal(modal)),
  fetchServerUsers: serverId => dispatch(fetchServerUsers(serverId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Messages))