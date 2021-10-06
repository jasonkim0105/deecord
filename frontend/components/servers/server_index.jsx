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
        <div className='server-name-hide'>Home</div>
          <Link to="/channels/@me">
            {/* <img src="deecordlogo.jpeg" className="discord-home-logo"/> */}
            <div className="discord-home-logo"></div>
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