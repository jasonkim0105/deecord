import React from 'react';

class Message extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    // this.props.fetchMessages(this.props.channelId)
  }

  render(){
    console.log(this.props)
    return (
      <div>
        individual message
      </div>
    )
  }
}

export default Message;