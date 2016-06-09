import { limit } from './config';

export function createWallReducer(id){
  return function wall(state = [], action) {
    const {post, type} = action;
    switch(type){
      case id:
        return [...state, post].slice(-limit);
      default: 
        return state;
    }
  };
}

export function createCountReducer(id){
  return function count(state = 0, action) {
    const {type} = action;
    switch(type){
      case id:
        return state + 1;
      default: 
        return state;
    }
  };
}
