import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'store/store';

import { signup, login, logout, receiveCurrentUser } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Shootr!!!</h1>, root);
});


// test

window.signup = signup;
window.login = login;
window.logout = logout;

window.receiveCurrentUser = receiveCurrentUser;
