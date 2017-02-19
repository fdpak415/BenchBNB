import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import SearchContainer from './search/search_container';
import BenchFormContainer from './benches/bench_form_container';
import BenchShowContainer from './benches/bench_show_container';
import ReviewFormContainer from './benches/reviews/review_form_container';

const Root = ({store}) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/')
    }
  }

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      return
    } else {
      replace('/')
    }
  }

  return (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={SearchContainer} />
        <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
        <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
        <Route path="/benches/new" component={BenchFormContainer} onEnter={_ensureLoggedIn}/>
        <Route path="/benches/:benchId" component={BenchShowContainer} onEnter={_ensureLoggedIn}/>
        <Route path="/benches/:benchId/review" component={ReviewFormContainer} onEnter={_ensureLoggedIn}/>
      </Route>
    </Router>
  </Provider>
  )
};

export default Root;
