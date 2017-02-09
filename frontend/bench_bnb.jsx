import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import {signup, login, logout} from './actions/session_actions';

window.signup = signup;
window.login = login;
window.logout = logout;

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<h1>benchbnb</h1>, root);
});
