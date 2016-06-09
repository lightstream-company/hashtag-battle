import React, { PropTypes } from 'react';
import Tweet from './tweet.jsx';

function Wall(props){
  const tweets = props.wall;
  var styleContainer = {
    width: 49 + '%'
  };
  return <div style={styleContainer} className="container-wall">
    {tweets.map((item, i) => <Tweet key={item._id} index={i} {...item} />)}
  </div>;
}

Wall.propTypes = {
  wall: PropTypes.any,
  attributes: PropTypes.any
};
  
export default Wall;