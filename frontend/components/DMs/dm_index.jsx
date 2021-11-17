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
      <div className="channel-component">
        <div className='create-channel' onClick={openModal}>
          <div className='create-channel-text'>
            New Direct Message
          </div>
        <div className="channel-button" >+</div>
        </div>
      </div>
      <div className="channel-list">
        {DMLists}
      </div>

    </div>
  )
  }

}

export default DMIndex;