import React, { PropTypes } from 'react';
import Tweet from './tweet.jsx';
import { maxWidth } from './config';

function Wall(props){
  const tweets = props.wall;
  var styleContainer = {
    maxWidth: maxWidth,
    margin: 'auto'
  };
  var styleContainerLeft = {
    width: 49 + '%',
    float: 'left'
  };
  return <div style={styleContainer} className="container-wall" id="container-wall">
    <div style={styleContainerLeft} className="container-wall-left">
      {tweets.map((item, i) => <Tweet key={item._id} index={i} {...item} />)}
    </div>
  </div>;
}

Wall.propTypes = {
  wall: PropTypes.any,
  attributes: PropTypes.any
};
  
export default Wall;
