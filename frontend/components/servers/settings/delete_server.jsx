import React from 'react';


class DeleteServer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: `${props.user.username}'s server`, owner_id: props.user.id}
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    let { serverId } = this.props
    e.preventDefault();
    this.props.deleteServer(serverId)
      .then(this.props.history.push(`/channels/@me`))
    this.props.closeModal();
    this.props.fetchServers();
  }


  render() {
    return (
      <div>
        Are you sure you want to delete this server?
        <form className="create-server-form" onSubmit={this.handleSubmit}>
          <button className="create-server-button">Delete</button>
        </form>
      </div>
    )
  }
}

export default DeleteServer;