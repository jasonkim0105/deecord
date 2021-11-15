import React from 'react';
import DMList from './dm_list';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
  return ({
    // currentUser: state.entities.users[state.session.id],
    // currentServer: state.entities.servers[ownProps.match.params.serverId],
    // serverId: ownProps.match.params.serverId
  })
}

const mapDispatchToProps = dispatch => ({
  openModal: () => dispatch(openModal('createDM')),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DMList)