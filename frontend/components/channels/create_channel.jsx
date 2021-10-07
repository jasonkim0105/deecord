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
    this.props.createChannel(this.state);
  }

  update(field){
    return e => {
      this.setState(
        {
          [field]: Object.assign({}, this.state.channel, { name: e.currentTarget.value })
        }
      )
     }
  }
  // update() {
  //   return (e) => {
  //     this.setState(
  //       {
  //         channel: Object.assign({}, this.state.channel, { name: e.currentTarget.value })
  //       }
  //     );
  //   };
  // }


  render(){
    return(
      <div className="create-channel-form-container">
        CREATE A CHANNEL
        <form className="create-channel-form" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.channel.name} onChange={this.update('name')}/>
        </form>
      </div>
    )
  }
}
export default CreateChannel;