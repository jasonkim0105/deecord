import React from 'react';
import MessagesContainer from './messages_container';
import MessageForm from './message_form';
import Message from './message';

class Messages extends React.Component {

  constructor(props){
    super(props);

    this.subscription = null;
    this.currentChannelId = null;
  }

  componentDidMount() {
    this.currentChannelId = this.props.newChannelId;
   console.log(this.currentChannelId)
    this.createNewSubscription(this.currentChannelId);
  }

  createNewSubscription(channelId) {
    this.subscription = App.cable.subscriptions.create(
      { channel: "ChatChannel", id: channelId },
      {
        speak: function (data) {
          return this.perform("speak", data);
        }
      }
    );
  }

  componentDidUpdate(prevProps) {

    if (this.subscription &&
        this.currentChannelId !== prevProps.match.params.channelId) {
      this.currentChannelId = this.props.newChannelId;

      this.subscription.unsubscribe();
      this.createNewSubscription(this.currentChannelId);
    }
   const { fetchMessages, serverId, newChannelId } = this.props;

   if (prevProps.match.params.channelId !== this.props.match.params.channelId){
      fetchMessages(serverId, newChannelId);

   }

  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }



  render(){
    console.log(this.props)
    const {currChannel} = this.props;
    let channelName;
    if (currChannel) channelName = currChannel.name;
    return (
      <div className="side-component">
        <div className='channel-title-container'>
          <div className='channel-name-chatbox'>
            {channelName}
          </div>
        </div>

        <div className="bottom-container">
          <div className="bottom-message-container">
            <Message />
            <MessageForm
              currChannel={this.props.currChannel}
              newChannelId={this.props.newChannelId}
              currUser={this.props.currentUser}
            //   channelId={this.props.newChannel}
            //   props={this.props}
            />
          </div>

          <div className="user-list">
            user list goes here
          </div>

        </div>

      </div>
    )
  }
}
export default Messages