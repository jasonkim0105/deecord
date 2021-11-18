import React from 'react';

class CreateChannel extends React.Component {
  constructor(props){
    super(props)
    this.state={
      channel: this.props.channel
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.clearChannelErrors();
  }
  componentWillUnmount(){
    this.props.clearChannelErrors();
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.createChannel(this.state.channel)
      .then( ( {channel} ) => {this.props.closeModal()
    })
  }

  update() {
    return (e) => {
      this.setState(
        {
          channel: Object.assign({}, this.state.channel, { name: e.currentTarget.value })
        }
      );
    };
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


  render(){
    return(
      <div className="create-channel-form-container">

        <div className='create-channel-header'>
        CREATE A CHANNEL
        </div>
        <div className='error-message'>{this.renderErrors()}</div>

        <form className="create-channel-form" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.channel.name} onChange={this.update()}/>
          <button className="create-channel-button">Create Channel</button>

          <div className="close-invite" onClick={() => this.props.closeModal()}>
          Close
          </div>


        </form>
      </div>
    )
  }
}
export default CreateChannel;