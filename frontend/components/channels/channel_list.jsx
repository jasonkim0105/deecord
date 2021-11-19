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

  render(){
    const { channel, openModal } = this.props;
    let displayChannelName
    if (channel.name.length <= 20) {
      displayChannelName = channel.name
    } else {
      displayChannelName = channel.name.slice(0,19) + '...'
    }


    const channelDropdown = this.state.dropdownOpen ? <ChannelsDropdown/> : '';

    return (
    <li className="channel-list-individual">
      <NavLink
        to={`/channels/${channel.server_id}/channels/${channel.id}`}
        className='channels-nav-link'>
        <div className="channel-list-individual-name">
          <i className="fas fa-hashtag" ></i>
          {displayChannelName}
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