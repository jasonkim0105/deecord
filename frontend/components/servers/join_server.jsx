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
    .then(()=> this.props.closeModal())
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
            <div>
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
    console.log(this.props)
    return (
      <div className="join-server-form-container">
        JOIN A SERVER
        <form className="join-server-form" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.inviteCode} onChange={this.update('inviteCode')}/>
          <button className="join-server-button">Join</button>
          {/* <div className='error-message'>{this.renderErrors()}</div> */}
        </form>
      </div>
    )
  }
}

export default JoinServer;