import InviteServer from './invite_server';
import { connect } from 'react-redux';
import {joinServer, clearServerErrors} from '../../../actions/server_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const serverId = ownProps.match.params.serverId;
  return {
    server: state.entities.servers[serverId]
  };
}

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  joinServer: inviteCode => dispatch(joinServer(inviteCode)),
  clearErrors: () => dispatch(clearServerErrors())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(InviteServer));