import React from 'react';


class LeaveServer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: `${props.user.username}'s server`, owner_id: props.user.id}
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    let { serverId } = this.props
    e.preventDefault();
    this.props.leaveServer(serverId)
      .then(this.props.history.push(`/channels/@me`))
    this.props.closeModal();
    this.props.fetchServers();
  }

  componentWillUnmount(){
    this.props.fetchServers();
  }


  render() {
    return (
      <div className='delete-server-modal-container'>
        <div className='delete-server-header'>
          Are you sure you want to leave this server?
        </div>
        <form className="create-server-form" onSubmit={this.handleSubmit}>
          <button className="delete-server-button">Leave</button>
        </form>
      </div>
    )
  }
}

export default LeaveServer;