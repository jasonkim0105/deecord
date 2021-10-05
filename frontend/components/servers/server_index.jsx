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


      <ul className="add-server">
        <li className="server-home-button">
          <Link to="/channels/@me">
            HOME
          </Link>
        </li>
        <div className="server-list-on-index">
          {ServerLists}
        <button className="add-server-button-server-list" onClick={openModal}>+</button>
        </div>

      </ul>
    )
  }
}

export default ServerIndex;