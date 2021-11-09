import React from 'react';
import { withRouter } from 'react-router';

class CreateServer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: `${props.user.username}'s server`, owner_id: props.user.id}
    this.handleSubmit = this.handleSubmit.bind(this)
    ;
    this.renderErrors = this.renderErrors.bind(this);
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
      // console.log(this.props)
    })
    this.props.fetchServers()

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
    console.log(this.props)
    const { errors } = this.props;
    // if (!errors) {
    //   return (
    //     <div className="create-server-form-container">
    //       CREATE A SERVER
    //       <form className="create-server-form" onSubmit={this.handleSubmit}>
    //         <input type="text" value={this.state.name} onChange={this.update('name')} />
    //         <button className="create-server-button">Create</button>
    //       </form>
    //     </div>
    //   )
    // } else {
    //   return (
    //     <div className="create-server-form-container">
    //       CREATE A SERVER
    //       <p>{this.renderErrors()}</p>
    //       <form className="create-server-form" onSubmit={this.handleSubmit}>
    //         <input type="text" value={this.state.name} onChange={this.update('name')} />
    //         <button className="create-server-button">Create</button>
    //       </form>
    //     </div>
    //   )
    // }
    return (
      <div className="create-server-form-container">
        <div className="create-server-form-header">
        Customize your server
        </div>

        <div className='error-message'>{this.renderErrors()}</div>

        <form className="create-server-form" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.name} onChange={this.update('name')} />
          <button className="create-server-button-modal">Create</button>
        </form>
      </div>
    )
  }
}

export default CreateServer;