import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ServerSettingsDropdown from './server_settings_dropdown'

class ServerSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      droppedDown: false
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown() {
    this.setState(prevState => ({ droppedDown: !prevState.droppedDown }));
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

    const menuDropdown = this.state.droppedDown ? <ServerSettingsDropdown /> : '';

    return (
      <div
        onClick={() => this.toggleDropdown()}
        onBlur={() => this.setState({ droppedDown: false })}
        className='server-setting-top'>
        {menuDropdown}
        <div className='server-setting-title'>
          {serverName}
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state, ownProps) => ({
  server: state.entities.servers[ownProps.match.params.serverId]
});

const mapDispatchToProps = () => {
};

export default withRouter(connect(mapStateToProps, null)(ServerSettings));