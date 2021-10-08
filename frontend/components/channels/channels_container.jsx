import React from 'react'
import { connect } from "react-redux";
import Channels from "./channels"
import { fetchChannels } from '../../actions/channel_actions';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import { fetchServerUsers } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  currentServerId: parseInt(ownProps.match.params.serverId),
  channels: Object.values(state.entities.channels),
  currentUser: state.entities.users[state.session.id],
  currentServer: state.entities.servers[ownProps.match.params.serverId]
})

const mapDispatchToProps = dispatch => ({
  fetchChannels: channels => dispatch(fetchChannels(channels)),
  openModal: modal => dispatch(openModal(modal)),
  fetchServerUsers: serverId => dispatch(fetchServerUsers(serverId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Channels))