import React from 'react';
import {Route} from 'react-router';
import CreateServerContainer from '../servers/create_server_container';
import AddServerContainer from '../servers/add_server_container';
import JoinServerContainer from '../servers/join_server_container';
import InviteServerContainer from '../servers/settings/invite_server_container';
import CreateChannelContainer from '../channels/create_channel_container';
import EditChannelContainer from '../channels/edit_channel_container';
import DeleteChannelContainer from '../channels/delete_channel_container';
// import ChannelSettingsContainer from '../channels/channel_settings_container';

class Modal extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let {modal, closeModal} = this.props;
    let component;
    // console.log(this.props)
    switch(modal) {
      case 'addServer':
        component = <AddServerContainer />
        break;
      case 'createServer':
        component = <Route path="/channels" component = {CreateServerContainer} />
        break;
      case 'joinServer':
        component = <Route path="/channels" component = {JoinServerContainer} />
        break;
      case 'inviteServer':
        component = <Route path="/channels/:serverId" component = {InviteServerContainer} />
        break;
      case 'createChannel':
        component = <Route path="/channels/:serverId" component = {CreateChannelContainer} />
        break;
      // case 'channelSettings';
      //   component = <Route path="/channels/:serverId/channels/:channelId" component = {ChannelSettingsContainer}/>
      //   break;
      case 'editChannel':
        // component = <EditChannelContainer channel={channel}/>
        component = <Route path="/channels/:serverId/channels/:channelId" component = {EditChannelContainer}/>
        break;
      case 'deleteChannel':
        component = <Route path='/channels/:serverId/channels/:channelId' component = {DeleteChannelContainer}/>
        break;
      default:
        return null;
    }

    return (
      <div className='modal-background' onClick={closeModal}>
        <div className='modal-child' onClick={e => e.stopPropagation()}>
          {component}
        </div>
    </div>
    )
  }
}

export default Modal;