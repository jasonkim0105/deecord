import React from 'react';
import CreateServerContainer from '../servers/create_server_container';
import ServerIndexContainer from '../servers/server_index_container';
import ServerSettingsContainer from '../servers/settings/server_settings_container'
import ServerMenu from '../servers/settings/server_menu';
import ChannelsContainer from '../channels/channels_container';
import MessagesContainer from '../messages/messages_container';
import DMIndexContainer from '../DMs/dm_index_container';
import DirectMessagesContainer from '../DMs/direct_messages_container';
import { Route } from 'react-router-dom';
// import { AiOutlineLogout } from 'react-icons/ai';

class Deecord extends React.Component {

  componentDidMount() {
    this.props.fetchAllUsers()
    // this.props.fetchServers()
  }
  componentDidUpdate(prevProps){
  }

  render(){
    let { currentUser, logout, currentServer, serverId } = this.props;
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
          Logout
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
              <div className='servers-settings-channels-list'>
                <div className='server-settings-menu'>
                  <div className='dm-setting-title'>
                    Direct Messages
                  </div>
                </div>
                <div className="channels-container">
                  <DMIndexContainer/>
                </div>
                <div className="auth-setting">
                  {auth}
                </div>


              </div>
              <div className='servers-content-container'>
                <Route
                  path='/channels/@me/:dmChannelId'
                  component={DirectMessagesContainer}
                  />
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

                <div className='servers-content-container'>
                <Route
                  path='/channels/:serverId/channels/:channelId'
                  component={MessagesContainer}
                  />
                </div>

              </div>
            )
        }
  }
}

export default Deecord