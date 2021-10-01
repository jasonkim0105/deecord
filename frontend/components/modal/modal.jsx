import React from 'react';
import {Route} from 'react-router';
import {CreateServerContainer} from '../servers/create_server_container';

class Modal extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let {modal, closeModal} = this.props;
    let component;
    switch(modal) {
      case 'createServer':
        component = <CreateServerContainer closeModal={closeModal}/>
      default:
        return null;
    }

    return (
      <div id="modal">
        {component}
      </div>
    )
  }
}

export default Modal;