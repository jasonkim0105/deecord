import MessageForm from './message_form';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { fetchChannelMessages, createMessage } from '../../actions/message_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  currentServer: state.entities.servers[ownProps.match.params.serverId],
  // newChannelId: parseInt(ownProps.match.params.channelId),
})

const mapDispatchToProps = (dispatch) => ({
  createMessage: message => dispatch(createMessage(message)),
  fetchChannelMessages: channelId => dispatch(fetchChannelMessages(channelId)),

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageForm))
