import React from 'react';

class Message extends React.Component {
  constructor(props){
    super(props);
    console.log(props)
  }

  componentDidMount() {
    // this.props.fetchMessages(this.props.channelId)
  }

  render(){
    return (
      <div>
        individual message
      </div>
    )
  }
}

export default Message;