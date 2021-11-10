import React from 'react';
import { NavLink } from 'react-router-dom';
import ChannelsDropdown from './channel_dropdown';

class ChannelList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown(e) {
    e.stopPropagation();
    this.setState(prevState => ({ dropdownOpen: !prevState.dropdownOpen }));
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

    const channelDropdown = this.state.dropdownOpen ? <ChannelsDropdown/> : '';

    return (
    <li className="channel-list-individual">
      <NavLink
        to={`/channels/${channel.server_id}/channels/${channel.id}`}
        className='channels-nav-link'>
        <div className="channel-list-individual-name">
          <i className="fas fa-hashtag" ></i>
          {channel.name}
        </div>

        <div className='channels-nav-settings'>
          <div
            className="channels-dropdown-button"
            onClick={(e) => this.toggleDropdown(e)}>
            {channelDropdown}SETTINGS
            </div>
        </div>
      </NavLink>
    </li>
    )
  }


};
export default ChannelList