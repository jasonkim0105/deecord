import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearErrors, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
  errors: state.errors.session,
  formType: 'Signup',
  link: <Link to="/login">Log in</Link>,
  user: {
    username: '',
    password: '',
    email: '',
  }
})

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);