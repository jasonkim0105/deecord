import React from 'react';

class AddServer extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="add-server-container">
        <div className="create-or-join-container">
          <div className="create-server-container">
            <p className="create-server-title">Create a server</p>

            <div className="create-server-text">
              Create your server and start hanging out!
            </div>

            <div onClick={() => this.props.openModal('createServer')}>
            <button className="create-server-button">Create My Own</button>
            </div>

            <div className="create-server-bottom-text">
              What are you waiting for?!
            </div>

          </div>

          <div className="join-server-container">

            <div className="join-server-text">
              Have an invite already?
            </div>

            <div onClick={() => this.props.openModal('joinServer')}>
              <button className="join-server-button">Join Server</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default AddServer;
