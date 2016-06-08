import createConnection from 'tweetping-connect';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import store1 from './store';
import Layout from './layout.jsx';
import { limit, stream1 } from './config';

const {connect, load} = createConnection(stream1);

function dispatchPost(post) {
  store1.dispatch({
    type: 'NEW_POST',
    post
  });
}

connect('wall', dispatchPost);
load('wall/', {
  query: {
    size: limit
  }
}).then(posts => {
	function loop(n){
		dispatchPost(posts[n]);
		setTimeout(()=>{
			loop(n<limit-1 ? n+1:0);
		}, 30 / 1000);
	}
	loop(0);
});

render(
  <Provider store={store1}>
    <Layout />
  </Provider>,
  document.getElementById('hashtagbattle')
);
