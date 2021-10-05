import React from 'react';

class CreateServer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: `${props.user.username}'s server`, owner_id: props.user.id}
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createServer(this.state);
  }

  update(field){
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  render() {
    return (
      <div>
        CREATE A SERVER
        <form className="create-server-form" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.name} onChange={this.update('name')} />
          <button className="create-server-button">Create</button>
        </form>
      </div>
    )
  }
}

export default CreateServer;