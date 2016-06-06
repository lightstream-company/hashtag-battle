import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import data from './action';
import reducer from './reducer';
import React from 'react';
import Layout from './layout.jsx';

const store = createStore(reducer);

setTimeout(function(){
  store.dispatch(data());
}, 2000);

render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById('hashtagbattle')
);