import React from 'react';
import CreateServerContainer from '../servers/create_server_container';
import ServerIndexContainer from '../servers/server_index_container';
class Deecord extends React.Component {
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
      <div className="deecord-container">
        <div className="servers-index">
          <ServerIndexContainer/>
        </div>
        {auth}

      </div>
    )
  }
}

export default Deecord