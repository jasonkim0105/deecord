import React from 'react';
import { NavLink } from 'react-router-dom';

class ChannelList extends React.Component {

  constructor(props) {
    super(props);
  }
  // let serverName;

  // if (server) {
  //   if (server.name.length > 20) {
  //     serverName = server.name.slice(0, 21) + '...';
  //   } else {
  //     serverName = server.name;
  //   }
  // } else {
  //   return null;
  // }
  render(){
    const { channel, openModal } = this.props;
    // console.log(this.props)
    return (
    <li className="channel-list-individual">
      <NavLink
        to={`api/channels/${channel.server_id}/channels/${channel.id}`}
        className='channels-nav-link'>
        {channel.name}
      </NavLink>

    </li>
    )
  }


};
export default ChannelList