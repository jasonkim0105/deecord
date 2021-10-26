import React from 'react';
import MessagesContainer from './messages_container';
import MessageForm from './message_form';
import Message from './message';

class Messages extends React.Component {

  constructor(props){
    super(props)
  }

  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState){
  }


  render(){
    console.log(this.props)
    const {currChannel} = this.props;
    let channelName;
    if (currChannel) channelName = currChannel.name;
    // console.log(channelName)
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