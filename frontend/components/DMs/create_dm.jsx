import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import { createDM, fetchChannelDMs } from "../../actions/dm_actions";
import { createDmChannel, fetchDmChannels } from "../../actions/dm_channel_actions";

class CreateDMessage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      value: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    this.setState({
        value: e.currentTarget.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    let dmChannel = {
      user1_id: this.props.currentUserId,
      user2_id: this.state.value
    }
    this.props.createDmChannel(dmChannel)
    this.props.closeModal();
    this.props.fetchDmChannels(this.props.currentUserId);
  }

  render() {
    console.log(this.props)
    return (
      <div className='create-server-container'>
        <div className='create-channel-header'>
          Create DM
        </div>


        <form className="dm-modal-main" onSubmit={this.handleSubmit}>
          <div className="server-header">
            <h1 className="dm-label">Chat with a Friend</h1>

          </div>

          <div className="dm-content">
            Chat with a friend privately!!
          </div>

          <select className="dm-dropdown" value={this.state.value} onChange={this.handleChange}>
            <option value="" >Choose a Friend!</option>
            {this.props.allOtherUsers.map(user => {
              if(user.username != this.props.username) {
                return <option key={user.id} value={user.id}>{user.username}</option>
              }
            })}
          </select>

          <button className="dm-button">Chat</button>

        </form>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  users: Object.values(state.entities.users),
  allOtherUsers: Object.values(state.entities.users).filter(ele => ele.id !== state.session.id),
  currentUserId: state.session.id
})

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  fetchChannelMessages: channelId => dispatch(fetchChannelMessages(channelId)),
  fetchChannelDMs: dmChannelId => dispatch(fetchChannelDMs(dmChannelId)),
  createDM: message => dispatch(createDM(message)),
  fetchDmChannels: userId => dispatch(fetchDmChannels(userId)),
  createDmChannel: channel => dispatch(createDmChannel(channel))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateDMessage));