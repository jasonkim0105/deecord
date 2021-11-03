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
    this.props.fetchMessages(this.props.serverId, this.props.channelId)
  }

  componentDidUpdate(prevProps) {
      const { fetchMessages, serverId, channelId } = this.props;

      fetchMessages(serverId, channelId);

    // this.chatScroller(prevProps);
    }

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
    const { messages, channelId } = this.props;

    const messageList = messages.map((message, idx) => {
      if (channelId === message.channel_id) {
        return (
          <MessageListItem key={idx} message={message} />
        );
      }
    });

    console.log(this.props);
    return (
      <div>
        individual message
        {messageList}
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
  fetchMessages: (serverId, channelId) => dispatch(fetchMessages(serverId, channelId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Message));