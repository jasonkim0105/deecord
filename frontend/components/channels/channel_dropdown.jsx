import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

class ChannelsDropdown extends React.Component {
  render() {
    const { openModal } = this.props;
    return (
      <div className="channel-dropdown">
        <div className="edit-channel-button" onClick={()=> openModal('editChannel')}>
        EDIT
        </div>

        <div className="edit-channel-button" onClick={()=> openModal('deleteChannel')}>
        DELETE
      </div>
    </div>
    )
  }
}

const mapStateToProps = state => {
}

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
})

export default connect(null, mapDispatchToProps)(ChannelsDropdown);