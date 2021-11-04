import React from 'react'
import { withRouter } from 'react-router';


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
      var element = document.getElementById("offset");
      element.scrollTop = element.scrollHeight;
      if (this.state.user_id !== this.props.currentUser.id) this.setState({user_id: this.props.currentUser.id});

      if (prevProps.match.params.channelId !== this.props.match.params.channelId) {
        this.props.getMessagesIndex(this.props.match.params.channelId)
      }
   }

   handleSubmit(e) {
      e.preventDefault();
      // this.serverId = parseInt(this.props.match.params.id.substring(0, 10));
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

      return (
         <div id='messages-component'>
            <div id='offset'>
               <ul className='messages-container'>{
                  Object.keys(messages).map(id =>

                     <li className='message' key={id}>
                        <div className='message-avatar'><i className="fab fa-discord"></i></div>

                        <div className='message-content'>
                          {/* <p className='message-user'>{messages[id].user} <span className='message-time'>{messages[id].created_at}</span> */}
                          {/* </p> */}
                          <p className='message-body'>{messages[id].body}</p>

                        </div>

                     </li>

                  )

               }</ul>
            </div>

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
      )
   }
}

export default withRouter(Messages);