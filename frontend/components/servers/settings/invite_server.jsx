import React from 'react';

class InviteServer extends React.Component {
  constructor(props) {
    super(props);
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   this.props.deleteServer(this.state);
  // }

  update(field){
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  render() {
    const { server } = this.props;
    console.log(this.props)
    const serverInviteCode = server.invite_code
    return (
      <div className="invite-container">
        <div className="invite-message">
        INVITE A FRIEND
        </div>

        <div className="invite-message-with-invite-code">
          Get your friends in here!
        </div>

        <div className="invite-code-display">
          Invite Code: {serverInviteCode}
        </div>
        <div className="close-invite" onClick={() => this.props.closeModal()}>
          Close
        </div>

      </div>
      // <div>test</div>
    )
  }
}

export default InviteServer;