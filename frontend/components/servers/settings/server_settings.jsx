import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ServerSettingsDropdown from './server_settings_dropdown'
import { openModal, closeModal } from '../../../actions/modal_actions.js';
// import downarrow from '../../../../app/assets/images/downarrow.png';

class ServerSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      droppedDown: false
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.turnOffDropdown = this.turnOffDropdown.bind(this);
  }

  toggleDropdown() {
    this.setState(prevState => ({ droppedDown: !prevState.droppedDown }));

  }

  turnOffDropdown() {
    this.setState(prevState => ({ droppedDown: false }))
  }

  render() {
    const { server, openModal } = this.props;
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


    return (
      <div
        onClick={() => openModal('editServer')}
        className='server-setting-top'>
        <div className='server-setting-title'>
          {serverName}
        </div>

        <div className='server-setting-icon'>
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state, ownProps) => ({
  server: state.entities.servers[ownProps.match.params.serverId]
});

const mapDispatchToProps = (dispatch) => ({
  openModal: modal => dispatch(openModal(modal)),
  closeModal: modal => dispatch(closeModal())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerSettings));