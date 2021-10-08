import React from 'react';
import { connect } from 'react-redux';
import ServerSettings from './server_settings'
import { withRouter } from 'react-router-dom';

const ServerMenu = ({ serverId, currentServer }) => {

  // console.log(currentServer)
  // if (serverId === '@me') {
  //   return(
  //     <div className='server-settings-menu'>
  //       <div className='dms-container'>
  //         dms
  //       </div>
  //     </div>
  //   );
  // } else
  return(
    <div className='server-settings-menu'>
      <ServerSettings currentServer={currentServer}/>
    </div>
  );
};


const mapStateToProps = (state, ownProps) => ({
  serverId: ownProps.match.params.serverId
});

const mapDispatchToProps = () => {
};

export default withRouter(connect(mapStateToProps, null)(ServerMenu));