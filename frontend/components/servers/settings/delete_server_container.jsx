import DeleteServer from './delete_server';
import { connect } from 'react-redux';
import { deleteServer, fetchServers } from '../../../actions/server_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[state.session.id],
  errors: state.errors.server,
  serverId: parseInt(ownProps.match.params.serverId)
})

const mapDispatchToProps = dispatch => ({
  openModal: () => dispatch(openModal('addServer')),
  closeModal: () => dispatch(closeModal()),
  deleteServer: serverId => dispatch(deleteServer(serverId)),
  fetchServers: () => dispatch(fetchServers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(DeleteServer);