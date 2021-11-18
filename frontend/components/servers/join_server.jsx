import React from 'react';

class JoinServer extends React.Component {
  constructor(props){
    super(props);
    this.state = {inviteCode: this.props.inviteCode};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.joinServer(this.state.inviteCode)
    .then(({server})=> {this.props.closeModal(),
    this.props.history.push(`/channels/${server.id}`)
    })
    this.props.fetchServers()
  }
  componentDidMount(){
    this.props.clearServerErrors();
  }
  componentWillUnmount() {
    this.props.clearServerErrors();
  }

  update(field){
    return e => this.setState({ [field]: e.currentTarget.value })
  }
  renderErrors() {
    if (this.props.errors.length){
        return (
            <div className='join-errors'>
                {this.props.errors.map((error, i) => (
                    <p key={`error-${i}`}>
                        {error}
                    </p>
                ))}
            </div>
        )
    } else {
        return null;
    }
}

  render() {
    let { errors } = this.props
    return (
      <div className="join-server-form-container">

        <div className="join-server-header">
        JOIN A SERVER
        </div>
        <div className='join-server-invite-code'>
          Enter an invite code to join an existing server
        </div>

        <div className='error-message'>{this.renderErrors()}</div>

        <form className="join-server-form" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.inviteCode} onChange={this.update('inviteCode')}/>
          <button className="join-server-button-modal">Join</button>
        </form>
      </div>
    )
  }
}

export default JoinServer;