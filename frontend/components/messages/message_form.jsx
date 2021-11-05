import React from "react";

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channel_id: this.props.match.params.channelId,
      user_id: this.props.currentUser.id,
      body: '',
   }

   this.handleSubmit = this.handleSubmit.bind(this);
   this.handleInput = this.handleInput.bind(this);
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
    // console.log(this.props)
    const {currChannel} = this.props;
    let channelName;
    if (currChannel) channelName = currChannel.name;

    return (
      <div className='message-form-container'>
        <div className='message-form-inner-container'>
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
      </div>
    );
  }
}

export default MessageForm;