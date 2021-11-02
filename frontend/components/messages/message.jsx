import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchMessages } from '../../actions/message_actions';
import MessageList from './message_list';
import { openModal } from '../../actions/modal_actions';
import { fetchServerUsers } from '../../actions/session_actions';
import { fetchChannelMessages } from '../../actions/message_actions';

class Message extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount() {
    // this.props.fetchMessages(this.props.channelId)
  }

  // componentDidUpdate(prevProps) {
    //   const { fetchMessages, serverId, channelId } = this.props;

    //   fetchMessages(channelId);

    // this.chatScroller(prevProps);
    // }

    // chatScroller(prevProps) {
      //   const currChannelId = this.props.match.params.channelId;
      //   const prevChannelId = prevProps.match.params.channelId;

      //   const { messages } = this.props;

      //   // Checks to see if the numbers of messages has changed or a channel change has occured
  //   if (this.numMessages != messages.length || currChannelId != prevChannelId) {
  //     this.numMessages = messages.length;
  //     this.bottom.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }

  render() {
    console.log(this.props);
    return (
      <div>
        individual message
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  serverId: parseInt(ownProps.match.params.serverId),
  channelId: parseInt(ownProps.match.params.channelId),
  messages: Object.values(state.entities.messages)
})

const mapDispatchToProps = dispatch => ({
  fetchChannels: channels => dispatch(fetchChannels(channels)),
  openModal: modal => dispatch(openModal(modal)),
  fetchServerUsers: serverId => dispatch(fetchServerUsers(serverId)),
  fetchMessages: (channelId) => dispatch(fetchChannelMessages(channelId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Message));