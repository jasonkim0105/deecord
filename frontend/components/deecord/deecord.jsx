import React from 'react';
import CreateServerContainer from '../servers/create_server_container';
import ServerIndexContainer from '../servers/server_index_container';
import ServerSettingsContainer from '../servers/settings/server_settings_container'
import ServerMenu from '../servers/settings/server_menu';
import ChannelsContainer from '../channels/channels_container';
class Deecord extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.handleLogout = this.handleLogout.bind(this);
  // }
  // handleLogout() {
  //   this.props.logout();
  // }

  // componentDidMount(){
  //   this.props.fetchServers();
  // }

  render(){
    let { currentUser, logout, currentServer, serverId } = this.props;
    // console.log(this.props)
    // console.log(currentServer)
    let auth = (currentUser) ?
      <div className='channel-footer'>
        <div className='channel-user'>
          <div className='channel-footer-user-pic'>
            <p>{currentUser.username[0]}</p>
          </div>

          <div className='channel-footer-user'>
            {currentUser.username}
          </div>

        </div>

        <button className='logout-button' onClick={logout}>
          Log Out
        </button>
      </div>
      :
      <div>hel</div>
      if (serverId === '@me') {
          return(
            <div className='deecord-container'>
              <div className="servers-index">
                  <ServerIndexContainer/>
                </div>
              <div className='dm-container'>
                <div className='dm-header'>
                Direct Messages
                </div>
                <div        className="channels-container">
                </div>
                <div className="auth-setting">
                  {auth}
                </div>
              </div>

            </div>
          );
        } else {
            return (
              <div className="deecord-container">
                <div className="servers-index">
                  <ServerIndexContainer/>
                </div>

                <div className="servers-settings-channels-list">
                  <ServerMenu currentServer={currentServer}/>
                  <div className="channels-container">
                    <ChannelsContainer/>
                  </div>
                  <div className="auth-setting">
                    {auth}
                  </div>
                </div>

              </div>
            )
        }
  }
}

export default Deecord