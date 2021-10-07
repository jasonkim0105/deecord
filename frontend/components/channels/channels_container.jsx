import React from 'react'
import { connect } from "react-redux";
import Channels from "./channels"
import { fetchChannels } from '../../actions/channel_actions';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
  currentServerId: parseInt(ownProps.match.params.serverId),
  channels: Object.values(state.entities.channels)
})

const mapDispatchToProps = dispatch => ({
  fetchChannels: channels => dispatch(fetchChannels(channels)),
  openModal: modal => dispatch(openModal(modal)),
  // fetchServerMembers: serverId => dispatch(fetchServerMembers(serverId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Channels))