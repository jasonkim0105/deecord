import React from 'react';
import { NavLink } from 'react-router-dom';
import { fetchServers } from '../../actions/server_actions';

 class ServerList extends React.Component {
   constructor(props) {
     super(props);
   }

   componentDidUpdate(prevProps){
   }

   render() {
     const {server} = this.props;
     return (
      <li className='servers-list-short-name'>
             <NavLink
              to={`/channels/${this.props.server.id}`}
              className='servers-nav-link'>
              {this.props.server.name[0]}
            </NavLink>
          </li>
     )
   }
 }

 import {connect} from 'react-redux';

 const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = dispatch => ({
  fetchChannels: channels => dispatch(fetchChannels(channels)),
  openModal: modal => dispatch(openModal(modal)),
  fetchServers: () => dispatch(fetchServers()),
});

export default connect(null, mapDispatchToProps)(ServerList);