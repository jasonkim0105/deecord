import React from "react";

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        channel_id: this.props.newChannelId,
        user_id: this.props.currUser,
        body: '',
     }
  }

  update(field) {
    return e =>
      this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    App.cable.subscriptions.subscriptions[1].speak({ body: this.state.body, channel_id: this.state.channel_id, user_id: this.state.user_id });
    this.setState({ body: "" });

  }

  render() {
    // console.log(this.props)
    const {currChannel} = this.props;
    let channelName;
    if (currChannel) channelName = currChannel.name;

    return (
      <div className='message-form-container'>
        <div className='message-form-inner-container'>
          <form
            onSubmit={this.handleSubmit.bind(this)}
            className='message-form'>
            <input
              className='message-form-input'
              type="text"
              value={this.state.body}
              onChange={this.update("body")}
              placeholder={`Message #${channelName}`}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default MessageForm;