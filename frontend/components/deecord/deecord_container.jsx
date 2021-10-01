import React from 'react'
import { connect } from "react-redux";
import { logout } from '../../actions/session_actions';
import Deecord from "./deecord"

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Deecord)