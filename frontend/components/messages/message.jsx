import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MessageList from './message_list';
import { openModal } from '../../actions/modal_actions';
import { fetchServerUsers } from '../../actions/session_actions';
import { fetchChannelMessages } from '../../actions/message_actions';

class Message extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount() {
  }

  componentDidUpdate(prevProps) {

    }

  render() {
    const { messages, channelId } = this.props;

    const messageList = Object.keys(messages).map((message, idx) => {
      if (channelId === message.channel_id) {
        return (
          <MessageList key={idx} message={message} />
        );
      }
    });

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
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Message));