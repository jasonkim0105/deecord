import React from 'react';

class AddServer extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="add-server-container">
        <div className="create-server-container">
          <div onClick={() => this.props.openModal('createServer')}>
          <button className="create-server-button">Create Server</button>
          </div>
        </div>

        <div className="join-server-container">
          <div onClick={() => this.props.openModal('joinServer')}>
            <button className="join-server-button">Join Server</button>
          </div>
        </div>
      </div>
    )
  }
}
export default AddServer;
