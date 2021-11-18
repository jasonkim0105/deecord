import { connect } from 'react-redux';
import EditChannel from './edit_channel';
import { closeModal } from '../../actions/modal_actions';
import { updateChannel, clearChannelErrors } from '../../actions/channel_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  channel: state.entities.channels[ownProps.match.params.channelId],
  errors: state.errors.channels
})

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  updateChannel: channel => dispatch(updateChannel(channel)),
  clearChannelErrors: () => dispatch(clearChannelErrors())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditChannel));