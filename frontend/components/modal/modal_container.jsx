import {connect} from "react-redux";
import {closeModal} from '../../actions/modal_actions';
import Modal from "./modal";

const mapStateToProps = state => ({
  modal: state.ui.modal,
  // currentServer: state.entities.servers[ownProps.match.params.serverId]
})

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal);