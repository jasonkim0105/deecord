import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {login, logout, signup } from './util/session_api_util';


document.addEventListener("DOMContentLoaded", () => {


  const root = document.getElementById('root');
  const store = configureStore();

  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  // TESTING END

  ReactDOM.render(<Root store={store} />, root);
})