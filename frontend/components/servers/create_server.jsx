import React from 'react';
import { withRouter } from 'react-router';

class CreateServer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: `${props.user.username}'s server`, owner_id: props.user.id}
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.clearServerErrors();
  }
  componentWillUnmount(){
    this.props.clearServerErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createServer(this.state)
    .then( ({server}) => {this.props.closeModal()
    this.props.history.push(`/channels/${server.id}`)
    console.log(this.props)
    })

  }

  update(field){
    return e => this.setState({ [field]: e.currentTarget.value })
  }



  render() {
    console.log(this.props)
    const { errors } = this.props;
    if (!errors) {
      return (
        <div className="create-server-form-container">
          CREATE A SERVER
          <form className="create-server-form" onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.name} onChange={this.update('name')} />
            <button className="create-server-button">Create</button>
          </form>
        </div>
      )
    } else {
      return (
        <div className="create-server-form-container">
          CREATE A SERVER
          <p>{errors}</p>
          <form className="create-server-form" onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.name} onChange={this.update('name')} />
            <button className="create-server-button">Create</button>
          </form>
        </div>
      )
    }
  }
}

export default CreateServer;