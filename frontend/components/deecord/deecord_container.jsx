import React from 'react'
import { connect } from "react-redux";
import { logout, fetchAllUsers } from '../../actions/session_actions';
import Deecord from "./deecord"
import { fetchServers } from '../../actions/server_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.entities.users[state.session.id],
    currentServer: state.entities.servers[ownProps.match.params.serverId],
    serverId: ownProps.match.params.serverId
  })
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchServers: () => dispatch(fetchServers()),
  fetchAllUsers: () => dispatch(fetchAllUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Deecord)