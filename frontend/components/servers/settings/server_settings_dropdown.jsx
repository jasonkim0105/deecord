// import React from 'react';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import { leaveServer, deleteServer } from '../../../actions/server_actions';
// import { openModal } from '../../../actions/modal_actions.js';
// import DeecordMe from '../../deecord/deecord_me';

// class ServerSettingsDropdown extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       currentUser: this.props.currentUser,
//       currentServer: this.props.currentServer
//     };
//   }

//   removeServer(removeType) {
//     const { history } = this.props;

//     removeType(this.state.currentServer.id)
//       // .then(() => (
//       //   <DeecordMe/>
//       // ));
//   }

//   render() {
//     const { currentUser, currentServer } = this.state;
//     const { deleteServer, leaveServer, openModal } = this.props;

//     const dropdownOptions = currentUser.id === currentServer.owner_id ?
//       <>
//         <li
//           className='menu-header-dropdown-danger'
//           onClick={() => this.removeServer(deleteServer)}>
//           Delete
//           <div className='menu-header-dropdown-icon-container'>
//           </div>
//         </li>
//       </> :
//       <>
//         <li
//           className='menu-header-dropdown-danger'
//           onClick={() => this.removeServer(leaveServer)}>
//           Leave
//           <div className='menu-header-dropdown-icon-container'>
//           </div>
//         </li>
//       </>

//     return (
//       <ul className='menu-header-dropdown'>
//         {dropdownOptions}
//       </ul>
//     );
//   }
// }


// const msp = (state, ownProps) => ({
//   currentUser: state.entities.users[state.session.id],
//   currentServer: state.entities.servers[ownProps.match.params.serverId]
// });

// const mdp = dispatch => ({
//   leaveServer: serverId => dispatch(leaveServer(serverId)),
//   deleteServer: serverId => dispatch(deleteServer(serverId)),
//   openModal: modal => dispatch(openModal(modal))
// });

// export default withRouter(connect(msp, mdp)(ServerSettingsDropdown));
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { leaveServer, deleteServer, fetchServers } from '../../../actions/server_actions';
import { updateUser } from '../../../actions/session_actions';
import { openModal } from '../../../actions/modal_actions.js';
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

    removeType(this.state.currentServer.id);
    this.props.updateUser(this.props.currentUser);
    this.props.fetchServers();
    this.props.history.push("@me");
    window.location.reload();
    // <DeecordContainer/>

  }

  render() {
    const { currentUser, currentServer } = this.state;
    const { deleteServer, leaveServer, openModal } = this.props;

    const dropdownOptions = currentUser.id === currentServer.owner_id ?
      <>
        <li
          className='menu-header-dropdown-danger'
          onClick={() => this.removeServer(deleteServer)}>
          Delete
          <div className='menu-header-dropdown-icon-container'>
          </div>
        </li>
      </> :
      <>
        <li
          className='menu-header-dropdown-danger'
          onClick={() => this.removeServer(leaveServer)}>
          Leave
          <div className='menu-header-dropdown-icon-container'>
          </div>
        </li>
      </>

    return (
      <ul className='menu-header-dropdown'>
        {dropdownOptions}
      </ul>
    );
  }
}


const msp = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  currentServer: state.entities.servers[ownProps.match.params.serverId]
});

const mdp = dispatch => ({
  leaveServer: serverId => dispatch(leaveServer(serverId)),
  deleteServer: serverId => dispatch(deleteServer(serverId)),
  openModal: modal => dispatch(openModal(modal)),
  updateUser: user => dispatch(updateUser(user)),
  fetchServers: () => dispatch(fetchServers())
});

export default withRouter(connect(msp, mdp)(ServerSettingsDropdown));