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

  componentDidUpdate() {
    if (this.subscription &&
        this.currentChannelId !== this.props.newChannelId) {
      this.currentChannelId = this.props.newChannelId;

      this.subscription.unsubscribe();
      this.createNewSubscription(this.currentChannelId);
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