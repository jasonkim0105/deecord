import React from 'react'
import { connect } from "react-redux";
import ChannelList from "./channel_list";
import { fetchChannels } from '../../actions/channel_actions';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = dispatch => ({
  fetchChannels: channels => dispatch(fetchChannels(channels)),
  openModal: modal => dispatch(openModal(modal)),
  // fetchServerMembers: serverId => dispatch(fetchServerMembers(serverId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelList))