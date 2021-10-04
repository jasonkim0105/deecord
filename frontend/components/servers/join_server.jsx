import React from 'react';

class JoinServer extends React.Component {
  constructor(props){
    super(props);
    this.state = {inviteCode: this.props.inviteCode};
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.joinServer(this.state.inviteCode);
  }

  update(field){
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  render() {
    return (
      <div>
        JOIN A SERVER
        <form className="join-server-form" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.inviteCode} onChange={this.update('inviteCode')}/>
          <button className="join-server-button">Join</button>
        </form>
      </div>
    )
  }
}

export default JoinServer;