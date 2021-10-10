import React from 'react';

class CreateChannel extends React.Component {
  constructor(props){
    super(props)
    this.state={
      channel: this.props.channel
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.createChannel(this.state.channel)
      .then( ( {channel} ) => {this.props.closeModal()
    })
  }

  // update(field){
  //   return e => this.setState({ [field]: Object.assign({}, this.state, {name: e.currentTarget.value })
  //   })
  // }

  // update(field){
  //   return e => {
  //     this.setState(
  //       {
  //         [field]: Object.assign({}, this.state.channel, { name: e.currentTarget.value })
  //       }
  //     )
  //    }
  // }
  update() {
    return (e) => {
      this.setState(
        {
          channel: Object.assign({}, this.state.channel, { name: e.currentTarget.value })
        }
      );
    };
  }


  render(){
    console.log(this.props)
    // console.log(this.state);
    return(
      <div className="create-channel-form-container">

        <div className='create-channel-header'>
        CREATE A CHANNEL
        </div>

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