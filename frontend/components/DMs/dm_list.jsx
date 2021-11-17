import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class DMList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.currentUser.id === this.props.dmChannel.user1.id) {
      return (
        <li className='channel-list-individual'>

          <NavLink
            to={`/channels/@me/${this.props.dmChannel.id}`}
            className='channels-nav-link'>
              {this.props.dmChannel.user2.username}
          </NavLink>
        </li>
      )
    } else {
      return (
        <li className='channel-list-individual'>

          <NavLink
            to={`/channels/@me/${this.props.dmChannel.id}`}>
              {this.props.dmChannel.user1.username}
          </NavLink>
        </li>
      )
    }
  }
}

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, null)(DMList);