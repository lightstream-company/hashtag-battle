import createConnection from 'tweetping-connect';
import { limit } from './config';

export default function connectStore(store, id) {

  function dispatchPost(post) {
    store.dispatch({
      type: id,
      post
    });
  }
  const {connect, load} = createConnection(id);
  connect('wall', dispatchPost);

  load('wall/', {
    query: {
      size: limit
    }
  }).then(posts => posts.forEach(dispatchPost));
}
