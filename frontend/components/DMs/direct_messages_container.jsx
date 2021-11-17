import React from 'react';
import DirectMessages from './direct_messages';
import { connect } from 'react-redux';
import { fetchDmChannels } from '../../actions/dm_channel_actions';
import { fetchChannelDMs } from '../../actions/dm_actions';


const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps)
  return ({
    currentUserId: state.session.id,
    dmChannels: Object.values(state.entities.DMChannels),
    currentUser: state.entities.users[state.session.id],
    dmChannel: state.entities.DMChannels[ownProps.match.params.dmChannelId],
    dmMessages: Object.values(state.entities.directMessages),
    dmChannelId: ownProps.match.params.dmChannelId
  })
}

const mapDispatchToProps = dispatch => ({
  fetchChannelDMs: dmChannelId => dispatch(fetchChannelDMs(dmChannelId))
});

export default connect(mapStateToProps, mapDispatchToProps)(DirectMessages)