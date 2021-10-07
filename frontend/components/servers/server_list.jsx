import React from 'react';
import { NavLink } from 'react-router-dom';

// const ServerList = ( { server }) => {
//   let serverName;

//   if (server) {
//     if (server.name.length > 20) {
//       serverName = server.name.slice(0, 21) + '...';
//     } else {
//       serverName = server.name;
//     }
//   }

//   return(
//     <li className='servers-list-short-name'>
//       <NavLink
//         to={`/channels/${server.id}`}
//         className='servers-nav-link'>
//         {server.name[0]}
//       </NavLink>

//       {/* <div className='servers-list-names'>{serverName}</div> */}
//     </li>
//   );
// };


// import { connect } from 'react-redux';

// const mapStateToProps = state => {

// };

// const mapDispatchToProps = dispatch => {

// };

// export default connect(null, null)(ServerList);
 class ServerList extends React.Component {
   constructor(props) {
     super(props);
   }
   render() {
     console.log(this.props)
    //  const {server} = this.props;
     return (
      <li className='servers-list-short-name'>
             <NavLink
              to={`/channels/${this.props.server.id}`}
              className='servers-nav-link'>
              {this.props.server.name[0]}
            </NavLink>

            {/* <div className='servers-list-names'>{serverName}</div> */}
          </li>
     )
   }
 }

 import {connect} from 'react-redux';

 const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = dispatch => ({ fetchChannels: channels => dispatch(fetchChannels(channels)),
  openModal: modal => dispatch(openModal(modal)), // fetchServerMembers: serverId => dispatch(fetchServerMembers(serverId))
});

export default connect(null, mapDispatchToProps)(ServerList);