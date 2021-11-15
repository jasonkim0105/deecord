import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';


class CreateDM extends React.Component {
  constructor(props){
    super(props);

    // this.state = {
    //   username: '',
    //   server_id:
    // }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render() {
    console.log(this.props)
    return (
      <div className='create-server-container'>
        <div className='create-channel-header'>
          Create DM
        </div>

        {/* <form className='create-dm-form' action='' onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.username} onChange={this.update('username')} />
          <button className='create-dm-button'>Create Message</button>
        </form> */}

        {/* <select className="dm-dropdown" value={this.state.value} onChange={this.handleChange}>
          <option value="" >Choose a Friend!</option>
              {this.props.users.map(user => {
                if(user.username != this.props.username) {
                  return <option key={user.id} value={user.id}>{user.username}</option>
                }
                })}
        </select> */}

      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  users: state.entities.users
})

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateDM));