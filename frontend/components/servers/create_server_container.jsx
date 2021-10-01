import CreateServer from './create_server';
import { connect } from 'react-redux';
import {createServer} from '../../actions/server_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  user: state.entities.users[state.session.id],
  errors: state.errors.server,
})

const mapDispatchToProps = dispatch => ({
  openModal: () => dispatch(openModal('addServer')),
  closeModal: () => dispatch(closeModal()),
  createServer: server => dispatch(createServer(server))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateServer);