import createConnection from 'tweetping-connect';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import store from './store';
import Layout from './layout.jsx';

const {connect, load} = createConnection('overwatch');

function dispatchPost(post) {
  store.dispatch({
    type: 'NEW_POST',
    post
  });
}

connect('wall', dispatchPost);
load('wall/', {
  query: {
    size: 40
  }
}).then(posts => {
  posts.forEach((post, i) => {
    setTimeout(() => {
      dispatchPost(post);
    }, i * 1000);
  });
});

render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById('hashtagbattle')
);