import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import AddServer from './add_server';

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  openModal: serverSetting => dispatch(openModal(serverSetting))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddServer);