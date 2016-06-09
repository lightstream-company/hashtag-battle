import { render } from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import store from './store';
import Layout from './layout.jsx';

render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById('hashtagbattle')
);
