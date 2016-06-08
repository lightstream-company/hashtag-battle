import { limit } from './config';

export default function createWallReducer(id){
  return function wallReducer(state = [], action) {
    const {post, type} = action;
    switch(type){
      case id:
        return [...state, post].slice(-limit);
      default: 
        return state;
    }
  };
}
