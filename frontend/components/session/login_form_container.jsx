import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearErrors, login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'Login',
  // navLink: <Link to="/signup">Register</Link>,
})

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);