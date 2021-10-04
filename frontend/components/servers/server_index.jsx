import React from 'react';
import { Link } from 'react-router-dom';
import ServerList from './server_list';

class ServerIndex extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.fetchServers();
  }

  render() {
    const { openModal, fetchServers } = this.props
    const {servers} = this.props;
    const ServerLists = servers.map((server, idx) => {
      return (
        <ServerList
          key={idx}
          server={server}/>
      );
    });


    return (


      <div className="add-server">
        <div className="server-home-button">
          <Link to="/channels/@me">
            HOME
          </Link>
        </div>
        <div className="server-list-on-index">
          {ServerLists}
        </div>
        <button onClick={openModal}>+</button>

      </div>
    )
  }
}

export default ServerIndex;