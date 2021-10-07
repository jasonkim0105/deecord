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
  }
  render(){
    // console.log(this.props)
    const { currentServerId, channels, openModal } = this.props;
    console.log(this.props)
    const ChannelsList = channels.map((channel, idx) => {
      return (
        <ChannelListContainer
          key={idx}
          channel={channel}/>
      );
    });


    return (
      <div className="channel-component">
        <div className="create-channel">
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