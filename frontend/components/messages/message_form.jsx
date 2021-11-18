import React from "react";

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "" };
  }

  update(field) {
    return e =>
      this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const message = Object.assign({}, this.state);
    this.setState({ body: "" });
  }

  render() {
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