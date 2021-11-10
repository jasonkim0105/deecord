import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { fetchMessages } from '../../actions/message_actions';
import MessageList from './message_list';
import { openModal } from '../../actions/modal_actions';
import { fetchServerUsers } from '../../actions/session_actions';
import { fetchChannelMessages } from '../../actions/message_actions';

class Message extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount() {
    // this.props.fetchMessages(this.props.serverId, this.props.channelId)
  }

  componentDidUpdate(prevProps) {
      // const { fetchMessages, serverId, channelId } = this.props;

      // fetchMessages(serverId, channelId);

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

    // console.log(this.props);
            // <div id='offset'>
            //    <ul className='messages-container'>{
            //       Object.keys(messages).map(id =>
            //          <li className='message' key={id}>
            //             <div className='message-avatar'><i className="fab fa-discord"></i></div>
            //             <div className='message-content'>
            //               {/* <p className='message-user'>{messages[id].user} <span className='message-time'>{messages[id].created_at}</span>
            //               </p> */}
            //                <p className='message-body'>
            //                   {messages[id].body}
            //                </p>
            //             </div>
            //          </li>
            //       )
            //    }</ul>
            // </div>
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
  // fetchMessages: (serverId, channelId) => dispatch(fetchMessages(serverId, channelId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Message));