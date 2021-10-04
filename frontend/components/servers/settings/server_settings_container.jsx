  import { connect } from 'react-redux';
  import { withRouter } from 'react-router-dom';
  import { leaveServer, deleteServer, updateServer, fetchServer } from '../../../actions/server_actions';
  import ServerSettings from './server_settings';


  const mapStateToProps = (state, ownProps) => {
    // debugger
    return (
      {
      currentUser: state.entities.users[state.session.id],
      currentServer: state.entities.servers[ownProps.match.params.serverId]
    }
    )
  }

  const mapDispatchToProps = dispatch => ({
    leaveServer: serverId => dispatch(leaveServer(serverId)),
    deleteServer: serverId => dispatch(deleteServer(serverId)),
    updateServer: server => dispatch(update(server)),
    fetchServer: serverId => dispatch(fetchServer(serverId))
  });

  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerSettings));