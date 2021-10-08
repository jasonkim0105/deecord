import { connect } from 'react-redux';
import DeleteChannel from './delete_channel';
import { closeModal } from '../../actions/modal_actions';
import { deleteChannel, clearChannelErrors, fetchChannels } from '../../actions/channel_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  channel: state.entities.channels[ownProps.match.params.channelId],
  serverId: state.entities.channels.server_id
})

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  deleteChannel: channel => dispatch(deleteChannel(channel)),
  clearChannelErrors: () => dispatch(clearChannelErrors()),
  fetchChannels: serverId => dispatch(fetchChannels(serverId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DeleteChannel));