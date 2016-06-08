import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { limit } from './config';

function wall(state = [], action) {
  const {post, type} = action;
  switch(type){
    case 'NEW_POST':
      return [...state, post].slice(-limit);
    default: 
      return state;
  }
}

const store1 = createStore(wall, [], compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

export default store1;