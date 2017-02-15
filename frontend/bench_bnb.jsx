import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import {fetchBenches} from './actions/bench_actions';
import {fetchBenches} from './util/bench_api_util';


import {signup, login, logout} from './actions/session_actions';


window.fetchBenches = fetchBenches;

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
