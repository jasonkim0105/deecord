import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { leaveServer, deleteServer, fetchServers } from '../../../actions/server_actions';
import { updateUser } from '../../../actions/session_actions';
import { openModal, closeModal } from '../../../actions/modal_actions.js';
import DeecordContainer from '../../deecord/deecord_container';

class ServerSettingsDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: this.props.currentUser,
      currentServer: this.props.currentServer
    };
  }

  removeServer(removeType) {
    const { history } = this.props;

    removeType(this.state.currentServer.id)
    this.props.updateUser(this.props.currentUser);
    this.props.fetchServers();
    this.props.history.push("/channels/@me");

  }

  render() {
    const { currentUser, currentServer } = this.state;
    const { deleteServer, leaveServer, openModal } = this.props;

    const dropdownOptions = currentUser.id === currentServer.owner_id ?
      <>
        <li className='server-setting-invite-dropdown'
        onClick={() => openModal('inviteServer')}>
          Invite Friend
        </li>
        <li
          className='server-setting-delete-dropdown'
          onClick={() => openModal('deleteServer')}>
          Delete Server
        </li>
      </> :
      <>
        <li className='server-setting-invite-dropdown'
        onClick={() => openModal('inviteServer')}>
          Invite Friend
        </li>
        <li
          className='server-setting-delete-dropdown'
          onClick={() => openModal('leaveServer')}>
          Leave Server
        </li>
      </>

    return (
      <ul className='server-setting-dropdown'>
        {dropdownOptions}
      </ul>
    );
  }
}


const mapStatetoProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  currentServer: state.entities.servers[ownProps.match.params.serverId]
});

const mapDispatchToProps = dispatch => ({
  leaveServer: serverId => dispatch(leaveServer(serverId)),
  deleteServer: serverId => dispatch(deleteServer(serverId)),
  openModal: modal => dispatch(openModal(modal)),
  updateUser: user => dispatch(updateUser(user)),
  fetchServers: () => dispatch(fetchServers()),
  closeModal: modal => dispatch(closeModal())
});

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(ServerSettingsDropdown));