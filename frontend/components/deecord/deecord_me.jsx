// import React from 'react';
// import CreateServerContainer from '../servers/create_server_container';
// import ServerIndexContainer from '../servers/server_index_container';
// import ServerSettingsContainer from '../servers/settings/server_settings_container'
// class DeecordMe extends React.Component {
//   // constructor(props){
//   //   super(props);
//   //   this.handleLogout = this.handleLogout.bind(this);
//   // }
//   // handleLogout() {
//   //   this.props.logout();
//   // }

//   render(){
//     let { currentUser, logout } = this.props;
//     let auth = (currentUser) ?
//       <div>
//         <p>{currentUser.username}</p>
//         <button onClick={logout}>Log Out</button>
//       </div>
//       :
//       <div>hel</div>
//     return (
//       <div className="deecord-container">
//         <div className="servers-index">
//           <ServerIndexContainer/>
//         </div>
//         <div className="servers-setting">
//           {/* <ServerSettingsContainer/> */}
//           hello me
//         </div>
//         {auth}

//       </div>
//     )
//   }
// }

// // export default DeecordMe

// // import React from 'react'
// import { connect } from "react-redux";
// import { logout } from '../../actions/session_actions';
// // import Deecord from "./deecord"

// const mapStateToProps = (state) => {
//   return {
//     currentUser: state.entities.users[state.session.id]
//   }
// }

// const mapDispatchToProps = dispatch => ({
//   logout: () => dispatch(logout())
// });

// export default connect(mapStateToProps, mapDispatchToProps)(DeecordMe)