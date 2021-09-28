import React from 'react';

class Channel extends React.Component {
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout() {
    this.props.logout();
  }

  render(){
    return (
      <div>Channels
      <button onClick={() => this.handleLogout()}>Logout</button>
      </div>
    )
  }
}

export default Channel