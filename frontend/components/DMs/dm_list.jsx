import React from 'react';
import { connect } from 'react-redux';
import CreateDM from './create_dm';

class DMList extends React.Component {


  render() {
    let { openModal } = this.props

  return (
    <div className="create-new-dm">
      <button className="create-new-dm-button" onClick={openModal}>+</button>
    </div>
  )
  }

}

export default DMList;