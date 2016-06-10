import createConnection from 'tweetping-connect';
import { limit } from './config';

export default function connectStore(store, ID) {

  const id = 'uefa' + ID.toLowerCase();

  function dispatchPost(post) {
    store.dispatch({
      type: ID,
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

  load('count').then(values => {
    const {twitter, facebook, instagram} = values;
    store.dispatch({
      type: 'INIT_COUNT_' + ID,
      value: twitter + facebook + instagram - limit
    });
  });
}
