import React from 'react';
import { connect } from 'react-redux';
import CreateDM from './create_dm';
import DMList from './dm_list';

class DMIndex extends React.Component {
  constructor(props){
    super(props);

  }
  componentDidMount() {
    this.props.fetchDmChannels(this.props.currentUserId);
  }

  render() {
    let { openModal, dmChannels } = this.props;

    const DMLists = dmChannels.map((dmChannel, idx) => {
      return (
        <DMList
          key={idx}
          dmChannel={dmChannel}/>
      );
    });

  return (
    <div>
      <div className="create-new-dm">
        <button className="create-new-dm-button" onClick={openModal}>+</button>
      </div>
      <div className="dm-name-list">
        {DMLists}
      </div>

    </div>
  )
  }

}

export default DMIndex;