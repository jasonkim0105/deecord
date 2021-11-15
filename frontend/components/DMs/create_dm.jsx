import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';


class CreateDM extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      show: false,
      dmExist: false,
      value: ""
  }
  }

  render() {
    return (
      <div className='create-server-container'>
        <div className='create-channel-header'>
          Create DM
        </div>


        <select className="dm-dropdown" value={this.state.value} onChange={this.handleChange}>
          <option value="" >Choose a Friend!</option>
              {this.props.users.map(user => {
                if(user.username != this.props.username) {
                  return <option key={user.id} value={user.id}>{user.username}</option>
                }
                })}
        </select>

      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  users: state.
})

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateDM));