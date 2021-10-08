import React from 'react';
import ChannelListContainer from './channel_list_container';

class Channels extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      currentServerId: this.props.currentServerId
    };
  }

  componentDidMount() {
    this.props.fetchChannels(this.state.currentServerId);
    this.props.fetchServerUsers(this.state.currentServerId);
  }

  componentDidUpdate(prevProps, prevState){
    const currServerId = this.props.match.params.serverId;
    const prevServerId = prevProps.match.params.serverId;

    if (prevServerId !== currServerId) {
      this.props.fetchChannels(currServerId);
      this.props.fetchServerUsers(currServerId);
    }
  }


  render(){
    console.log(this.props)
    const { currentServerId, channels, openModal, currentUser, currentServer } = this.props;
    // console.log(currentServer.owner_id)
    // console.log(this.props)
    const ChannelsList = channels.map((channel, idx) => {
      if (currentServerId === channel.server_id){
        return (
          <ChannelListContainer
            key={idx}
            channel={channel}/>
        );
      }
    });


    return (
      <div className="channel-component">
        <div className="create-channel">
          <div className="create-channel-text">
            TEXT CHANNEL
          </div>
          <div onClick={() => openModal('createChannel')}>+</div>

        </div>

        <div className='channel-list'>
          {ChannelsList}
        </div>
      </div>
    )
  }
}
export default Channels