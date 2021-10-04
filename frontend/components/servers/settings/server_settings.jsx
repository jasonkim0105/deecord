import React from 'react';

class ServerSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
      currentServer: this.props.currentServer
    };
  }

  componentDidMount(){
    if (!this.props.currentServer) {
      this.props.fetchServer(this.props.match.params.serverId);
    }
  }

  render() {
    const { deleteServer, leaveServer } = this.props;
    const { currentUser, currentServer } = this.state;
    if (!currentServer) {
      return null;
    }
    let setting;
    // console.log(this.props )
    // console.log(currentServer)

    if (serverId === '@me') {

        setting =
        <div className="meme">
          me
        </div>

    } else {

          if (currentUser.id === currentServer.owner_id) {
            setting =
              <div className="delete-server">
                <button onClick={deleteServer()}>delete</button>
              </div>
          } else {
            setting =
              <div className="leave-server">
                  <button onClick={leaveServer()}>leave</button>
              </div>
          }


    };


    return (
      <div className='server-settings'>

        {setting}
      </div>
    )
  }
}
export default ServerSettings;