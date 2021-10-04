import React from 'react';
import { Link } from 'react-router-dom';

const ServerList = ( {server }) => {
  let serverName;

  if (server) {
    if (server.name.length > 20) {
      serverName = server.name.slice(0, 21) + '...';
    } else {
      serverName = server.name;
    }
  }

  return(
    <li className='servers-list-short-name'>
      <Link
        to={`/servers/${server.id}`}
        className='servers-nav-link'>
        {server.name[0]}
      </Link>
      <div className='servers-list-names'>{serverName}</div>
    </li>
  );
};


import { connect } from 'react-redux';

const mapStateToProps = state => {

};

const mapDispatchToProps = dispatch => {

};

export default connect(null, null)(ServerList);