import React from 'react';

class DeleteChannel extends React.Component {
  constructor(props){
    super(props)
    // this.state={
    //   channel: this.props.channel
    // }
    this.handleSubmit = this.handleSubmit.bind(this);
    // console.log(this.props.fetchChannels(this.props.channel.server_id))
  }
  handleSubmit(e) {
    const {channel, closeModal, history, serverId} = this.props;
    // e.preventDefault();
    this.props.deleteChannel(channel)
      .then(() => {this.props.closeModal(),

      this.props.fetchChannels(channel.server_id)
    })
    this.props.history.push(`/channels/${channel.server_id}`)
  }


  // componentWillUnmount() {
  //   const {channel} = this.props;
  //   this.props.fetchChannels(channel.server_id)
  //   this.props.history.push(`/channels/${channel.server_id}`)
  //   console.log(channel)
  // }

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
    console.log(this.props)
    // console.log(this.state);
    return(
      <div className="create-channel-form-container">
        <header className="delete-question">
          ARE YOU SURE YOU WANT TO DELETE CHANNEL?
        </header>
        <p className="delete-question-explanation">
          This can't be undone
        </p>
        <button className="delete-channel-no" onClick = {()=> this.props.closeModal()}>
          NO
        </button>
        <button className="delete-channel-yes" onClick={() => this.handleSubmit()}>
          YES
        </button>
      </div>
    )
  }
}
export default DeleteChannel;