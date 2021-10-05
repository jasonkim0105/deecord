import React from 'react';
import { connect } from 'react-redux';
import ServerSettings from './server_settings'
import { withRouter } from 'react-router-dom';

const ServerMenu = ({ serverId }) => {

  if (serverId === '@me') {
    return(
      <div className='menu-container'>
        <div className='dms-container'>
          dms
        </div>
      </div>
    );
  } else return(
    <div className='menu-container'>

      <ServerSettings/>
    </div>
  );
};


const msp = (state, ownProps) => ({
  serverId: ownProps.match.params.serverId
});

const mdp = () => {
};

export default withRouter(connect(msp, null)(ServerMenu));