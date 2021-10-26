import React from 'react';
import MessagesContainer from './messages_container';
import MessageForm from './message_form';
import Message from './message';

class Messages extends React.Component {

  constructor(props){
    super(props)
  }

  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState){
  }


  render(){
    console.log(this.props)
    return (
      <div className="message-component">
        hi
        <Message />
        <MessageForm />

      </div>
    )
  }
}
export default Messages