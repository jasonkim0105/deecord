import { connect } from 'react-redux';
import CreateChannel from './create_channel';
import { closeModal } from '../../actions/modal_actions';
import { createChannel, clearChannelErrors } from '../../actions/channel_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  formType: 'create',
  channel: {
    name: '',
    server_id: ownProps.match.params.serverId
  },
  errors: state.errors.channel
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  createChannel: channel => dispatch(createChannel(channel)),
  clearChannelErrors: () => dispatch(clearChannelErrors())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateChannel));