import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import {createWallReducer, createCountReducer} from './createReducer';
import connectStore from './connectStore';
import thunk from 'redux-thunk';
import { stream1, stream2 } from './config';

const store = createStore(combineReducers({
  wall1: createWallReducer(stream1),
  wall2: createWallReducer(stream2),
  count1: createCountReducer(stream1),
  count2: createCountReducer(stream2)
}), [], compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

connectStore(store, stream1);
connectStore(store, stream2);

export default store;
