import React from 'react';
import { Link } from 'react-router-dom';

class ServerIndex extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    const { openModal, fetchServers } = this.props
    const {servers} = this.props;
    return (
      <div className="add-server">
        <button onClick={openModal}>+</button>

      </div>
    )
  }
}

export default ServerIndex;