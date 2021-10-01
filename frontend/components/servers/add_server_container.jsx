import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import AddServer from './add_server';

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddServer);