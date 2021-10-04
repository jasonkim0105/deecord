import JoinServer from './join_server';
import { connect } from 'react-redux';
import { joinServer } from '../../actions/server_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  errors: state.errors.server,
})

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  joinServer: (serverId) => dispatch(joinServer(serverId)),
  openModal: () => dispatch(openModal('joinServer'))
})

export default connect(mapStateToProps,mapDispatchToProps)(JoinServer);