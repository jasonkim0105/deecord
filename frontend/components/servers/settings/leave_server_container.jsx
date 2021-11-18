import LeaveServer from './leave_server';
import { connect } from 'react-redux';
import { leaveServer, fetchServers } from '../../../actions/server_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[state.session.id],
  errors: state.errors.server,
  serverId: parseInt(ownProps.match.params.serverId)
})

const mapDispatchToProps = dispatch => ({
  openModal: () => dispatch(openModal('addServer')),
  closeModal: () => dispatch(closeModal()),
  leaveServer: serverId => dispatch(leaveServer(serverId)),
  fetchServers: () => dispatch(fetchServers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(LeaveServer);