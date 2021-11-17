import React from 'react';
import DMIndex from './dm_index';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchDmChannels } from '../../actions/dm_channel_actions'


const mapStateToProps = (state, ownProps) => {
  return ({
    currentUserId: state.session.id,
    dmChannels: Object.values(state.entities.DMChannels)
  })
}

const mapDispatchToProps = dispatch => ({
  openModal: () => dispatch(openModal('createDM')),
  closeModal: () => dispatch(closeModal()),
  fetchDmChannels: userId => dispatch(fetchDmChannels(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(DMIndex)