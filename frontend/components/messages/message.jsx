import React from 'react'


class Messages extends React.Component {
   constructor(props) {
      super(props)
      this.serverId = parseInt(this.props.match.params.id.substring(0, 10));

      this.state = {
         server_id: this.serverId,
         channel_id: null,
         user_id: this.props.currentUser.id,
         body: '',
      }
      this.channel_id = null;
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleInput = this.handleInput.bind(this);
   }

   componentDidMount() {
      App.cable.subscriptions.create(
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
   }

   componentDidUpdate() {
      var element = document.getElementById("offset");
      element.scrollTop = element.scrollHeight;
      if (this.state.author_id !== this.props.currentUser.id) this.setState({author_id: this.props.currentUser.id});
   }

   handleSubmit(e) {
      e.preventDefault();
      this.serverId = parseInt(this.props.match.params.id.substring(0, 10));
      App.cable.subscriptions.subscriptions[1].speak(this.state);
      this.setState({
         server_id: this.serverId,
         channel_id: null,
         body: '',
      })
   }

   handleInput(input) {
      return (e) => {
         this.setState({
            [input]: e.currentTarget.value,
            channel_id: this.channel_id
         })
      }
   }

   render() {
      let messages;
      if (this.props.messages.byId) {
         messages = this.props.messages.byId;
      } else {
         // Just an empty object, the view will render nothing with this.
         messages = this.props.messages;
      }
      this.channel_id = this.props.messages.currentChannelId;

      return (
         <div id='messages-component'>
            <div id='offset'>
               <ul className='messages-container'>{
                  Object.keys(messages).map(id =>

                     <li className='post' key={id}>
                        <div className='post-avatar'><i className="fab fa-discord"></i></div>

                        <div className='post-content'>

                           <div className='post-reply'>{(messages[id].parent_id) ?
                              <p className='username'>
                                 <i className="fas fa-reply"></i>
                                 {messages[messages[id].parent_id].username}
                                 <span>{messages[messages[id].parent_id].body}</span>
                              </p>
                              : ''}</div>

                           <p className='username'>{messages[id].username} <span className='time'>{messages[id].created_at}</span></p>

                           <p className='post-body'>{messages[id].body}</p>

                        </div>

                     </li>

                  )

               }</ul>
            </div>

            <form onSubmit={this.handleSubmit}>
               <input
                  id='post-input'
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

export default Messages