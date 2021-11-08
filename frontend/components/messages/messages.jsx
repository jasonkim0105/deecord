import React from 'react'
import { withRouter } from 'react-router';
import Message from './message';


class Messages extends React.Component {
   constructor(props) {
      super(props)
      // this.serverId = parseInt(this.props.match.params.id.substring(0, 10));
      console.log("currentChannel", this.props)
      this.state = {
         channel_id: this.props.match.params.channelId,
         user_id: this.props.currentUser.id,
         body: '',
      }
      this.subscription = null;
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleInput = this.handleInput.bind(this);
   }

   componentDidMount() {
      this.currentChannelId = this.props.newChannelId;
     console.log(this.currentChannelId)
      this.createNewSubscription(this.currentChannelId);

      this.props.getMessagesIndex(this.props.match.params.channelId)

    }

    createNewSubscription(channelId) {
      this.subscription = App.cable.subscriptions.create(
        { channel: "ChatChannel", id: channelId },
        {
           received: data => {
              this.props.receiveMessage(data);
           },
          speak: function (data) {
            return this.perform("speak", data);
          }
        }
      );
    }
   componentDidUpdate(prevProps) {
      var element = document.getElementById("offset");
      element.scrollTop = element.scrollHeight;
      if (this.state.user_id !== this.props.currentUser.id) this.setState({user_id: this.props.currentUser.id});

      if (prevProps.match.params.channelId !== this.props.match.params.channelId) {
        this.props.getMessagesIndex(this.props.match.params.channelId)
      }
      if (this.subscription &&
         this.currentChannelId !== this.props.newChannelId) {
       this.currentChannelId = this.props.newChannelId;
            // console.log(this.currentChannelId)
       this.setState({channel_id: this.props.newChannelId})
       this.subscription.unsubscribe();
       this.createNewSubscription(this.currentChannelId);
     }
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

   componentWillUnmount(){
     this.subscription.unsubscribe();
   }

   render() {
      let messages;
      if (this.props.messages.byId) {
         messages = this.props.messages.byId;
      } else {
         messages = this.props.messages;
      }
      this.channel_id = this.props.messages.currentChannelId;
      // console.log(this.props)
      const { currChannel } = this.props;
      let username, avatarLetter, time, channelName;

      if (currChannel) channelName = currChannel.name;


      return (
         <div id='messages-component'>
            <div id='channel-title-container'>
               <div className='channel-name-chatbox'>
                  {channelName}
               </div>
            </div>
            <div id='offset'>
               <ul className='messages-container'>

                  {Object.keys(messages).map(id =>

                     <li className='message' key={id}>
                        <div className='message-avatar'><i className="fab fa-discord"></i></div>

                        <div className='message-content'>

                          <p className='message-user'>
                             {messages[id].username}
                          </p>
                           <div className='message-time'>
                             {messages[id].created_at}
                          </div>

                           <p className='message-body'>
                              {messages[id].body}
                           </p>

                        </div>

                     </li>
                  )
               }
               </ul>
            </div>

            <div className='message-form-container'>
               <div className='message-form-inner-container'>
                  <form onSubmit={this.handleSubmit}>
                     <input
                        id='message-input'
                        type='text'
                        value={this.state.body}
                        autoComplete="off"
                        onChange={this.handleInput('body')}
                        placeholder={`Message #${channelName}`}
                     />
                  </form>
               </div>
            </div>

         </div>
      )
   }
}

export default withRouter(Messages);