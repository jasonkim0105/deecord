import React from 'react'
import { withRouter } from 'react-router';
import Message from './message';
import UserListContainer from '../user_list/user_list_container'


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
      // element.scrollTop = element.scrollHeight;
      if (this.state.user_id !== this.props.currentUser.id) this.setState({user_id: this.props.currentUser.id});

      if (prevProps.match.params.channelId !== this.props.match.params.channelId) {
        this.props.getMessagesIndex(this.props.match.params.channelId)
      }

      if (this.subscription &&
         this.currentChannelId !== this.props.newChannelId) {
       this.currentChannelId = this.props.newChannelId;
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
      console.log(this.props)
      const { currChannel } = this.props;
      let username, avatarLetter, time, channelName;

      if (currChannel) channelName = currChannel.name;
      if (!this.props.server) return null


      return (
         <div className='messages-component'>
            <div className="messages-with-title-container">
               <div className='channel-title-container'>
                  <i className="fas fa-hashtag" ></i>
                  <div className='channel-name-chatbox'>
                     {channelName}
                  </div>
               </div>

               <div className="messages-container">

                  <div id='offset'>
                     {this.props.messages.map( message => {
                        return (
                           <li key={message.id} className="message-list-item">
                                       <div className='message-icon'>
                                          <i className="fab fa-discord"></i>
                                       </div>

                                       <div className='message-content'>
                                          <p className="message-sender">
                                             <div className='message-sender-username'>
                                                {message.user.username}
                                             </div>
                                                <span className="timestamp">
                                                   {message.created_at.slice(11,19)} {message.created_at.slice(5,7)}/
                                                   {message.created_at.slice(8,10)}/
                                                   {message.created_at.slice(0,4)}
                                                </span>
                                          </p>
                                          <p className="message-body">{message.body}</p>

                                       </div>
                                    </li>
                                 )
                              })}

                  </div>

                  <div className='message-form-input-container'>
                     {/* <div className='message-form-inner-container'> */}
                        <form className="message-form-container" onSubmit={this.handleSubmit}>
                           <input
                              className='message-input'
                              type='text'
                              value={this.state.body}
                              autoComplete="off"
                              onChange={this.handleInput('body')}
                              placeholder={`Message #${channelName}`}
                              />
                        </form>
                     {/* </div> */}
                  </div>
               </div>
            </div>





         <div className="server-member-container">
            <div className="empty-member-header"></div>
            <div className="member-list">
               <p className="member-list-header"> MEMBERS — {this.props.server.users.length} </p>
               <ul className="users-list">
                 {this.props.server.users.map( user => {
                  return < UserListContainer user={user} key={user.id} />
                 })}
               </ul>
            </div>
         </div>
         </div>
      )
   }
}

export default withRouter(Messages);