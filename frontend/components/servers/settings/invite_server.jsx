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
        INVITE A FRIEND TO THE SERVER
        </div>
        <div className="invite-code-display">
          Invite Code: {serverInviteCode}
        </div>

      </div>
      // <div>test</div>
    )
  }
}

export default InviteServer;