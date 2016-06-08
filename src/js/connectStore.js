import createConnection from 'tweetping-connect';
import { limit } from './config';

export default function connectStore(store, id){

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
    }).then(posts => {
      function loop(n){
        dispatchPost(posts[n]);
        setTimeout(()=>{
          loop(n<limit-1 ? n+1:0);
        }, 30 / 10);
      }
      loop(0);
    });
}
