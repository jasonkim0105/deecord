import React from 'react';

class DeleteChannel extends React.Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    const {channel, closeModal, history, serverId} = this.props;
    this.props.deleteChannel(channel)
      .then(() => {this.props.closeModal(),

      this.props.fetchChannels(channel.server_id)
    })
    this.props.history.push(`/channels/${channel.server_id}`)
  }


  render(){
    return(
      <div className="create-channel-form-container">
        <header className="delete-question">
          ARE YOU SURE YOU WANT TO DELETE CHANNEL?
        </header>
        <p className="delete-question-explanation">
          This can't be undone
        </p>
        <div className='delete-channel-buttons'>
          <button className="delete-channel-no" onClick = {()=> this.props.closeModal()}>
            NO
          </button>
          <button className="delete-channel-yes" onClick={() => this.handleSubmit()}>
            YES
          </button>
        </div>
      </div>
    )
  }
}
export default DeleteChannel;