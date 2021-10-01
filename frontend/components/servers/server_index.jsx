import React from 'react';
import { Link } from 'react-router-dom';

class ServerIndex extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    const {servers} = this.props;
    return (
      <div className="add-server">
        <button onClick={this.props.openModal}>+</button>

      </div>
    )
  }
}

export default ServerIndex;