import React from 'react'
import { connect } from "react-redux";
import { logout } from '../../actions/session_actions';
import Deecord from "./deecord"
import { fetchServers } from '../../actions/server_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchServers: () => dispatch(fetchServers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Deecord)