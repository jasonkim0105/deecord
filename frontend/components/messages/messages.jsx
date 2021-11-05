import React from 'react'
import { withRouter } from 'react-router';
import MessagesContainer from './messages_container';
import MessageForm from './message_form';
import Message from './message';


class Messages extends React.Component {
   constructor(props) {
      super(props)
      // this.serverId = parseInt(this.props.match.params.id.substring(0, 10));
      this.state = {
         channel_id: this.props.match.params.channelId,
         user_id: this.props.currentUser.id,
         body: '',
      }
      this.subscription = null;
      this.currentChannelId = null;
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleInput = this.handleInput.bind(this);
   }

   componentDidMount() {
    this.currentChannelId = this.props.newChannelId;

    this.createNewSubscription(this.currentChannelId);
  }

  createNewSubscription(channelId) {
    this.subscription = App.cable.subscriptions.create(
      { channel: "ChatChannel" },
      {
         received: data => {
            this.props.receiveMessage(data);
         },
         speak: function (data) {
            return this.perform("speak", data);
         }
      }
   );
   this.props.getMessagesIndex(this.props.match.params.channelId)
  }

   componentDidUpdate(prevProps) {
      if (this.subscription &&
        this.currentChannelId !== this.props.newChannelId) {
        this.currentChannelId = this.props.newChannelId;

        this.subscription.unsubscribe();
        this.createNewSubscription(this.currentChannelId);
     }
   }
   componentWillUnmount(){
     this.subscription.unsubscribe();
   }

   handleSubmit(e) {
      e.preventDefault();
      App.cable.subscriptions.subscriptions[1].speak(this.state);
      this.setState({
         body: '',
      })
   }

   handleInput(input) {
      return (e) => {
         this.setState({
            [input]: e.currentTarget.value
         })
      }
   }


   render() {


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

            <form onSubmit={this.handleSubmit}>
               <input
                  id='message-input'
                  type='text'
                  value={this.state.body}
                  autoComplete="off"
                  onChange={this.handleInput('body')}
               />
            </form>
          </div>

          <div className="user-list">
            user list goes here
          </div>

        </div>

      </div>
    )
  }
}

export default withRouter(Messages);