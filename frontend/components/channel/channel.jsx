import React from 'react';

class Channel extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.handleLogout = this.handleLogout.bind(this);
  // }
  // handleLogout() {
  //   this.props.logout();
  // }

  render(){
    let { currentUser, logout } = this.props;
    let auth = (currentUser) ?
      <div>
        <p>{currentUser.username}</p>
        <button onClick={logout}>Log Out</button>
      </div>
      :
      <div>hel</div>
    return (
      <div>Channels
        {auth}

      </div>
    )
  }
}

export default Channel