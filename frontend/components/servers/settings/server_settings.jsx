// import React from 'react';

// class ServerSettings extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentUser: this.props.currentUser,
//       currentServer: this.props.currentServer
//     };
//   }

//   componentDidMount(){
//     if (!this.props.currentServer) {
//       this.props.fetchServer(this.props.match.params.serverId);
//     }
//   }

//   render() {
//     const { deleteServer, leaveServer } = this.props;
//     const { currentUser, currentServer } = this.state;

//     let setting;
//     console.log(this.props)
//     console.log(currentServer)
//     console.log(currentUser)
//     if (!currentServer) {
//       return null;
//     }
//     if (currentUser.id === currentServer.owner_id) {
//       setting =
//         <div className="delete-server">
//           <button onClick={deleteServer()}>delete</button>
//         </div>
//     } else {
//       <div className="leave-server">
//           <button onClick={leaveServer()}>leave</button>
//         </div>
//     }
//     return (
//       <div className='server-settings'>
//         {setting}
//       </div>
//     )
//   }
// }
// export default ServerSettings;
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ServerSettingsDropdown from './server_settings_dropdown'

class ServerSettings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown() {
    this.setState(prevState => ({ dropdownOpen: !prevState.dropdownOpen }));
  }

  render() {
    const { server } = this.props;
    let serverName;

    if (server) {
      if (server.name.length > 20) {
        serverName = server.name.slice(0, 21) + '...';
      } else {
        serverName = server.name;
      }
    } else {
      return null;
    }

    const menuDropdown = this.state.dropdownOpen ? <ServerSettingsDropdown /> : '';

    return (
      <div
        onClick={() => this.toggleDropdown()}
        onBlur={() => this.setState({ dropdownOpen: false })}
        tabIndex='0'
        className='menu-header'>
        {menuDropdown}
        <div className='menu-header-title'>
          {serverName}
        </div>

        <div className='menu-header-icon'>
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    );
  }

}

const msp = (state, ownProps) => ({
  server: state.entities.servers[ownProps.match.params.serverId]
});

const mdp = () => {
};

export default withRouter(connect(msp, null)(ServerSettings));