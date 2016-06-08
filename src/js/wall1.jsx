import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Tweet from './tweet.jsx';
import { maxWidth, limit, tweetHeight } from './config';

function Wall1(props){
  const tweets = props.wall;
  var styleContainer = {
    maxWidth: maxWidth,
    margin: 'auto'
  };
  var styleContainerLeft = {
    width: 49 + '%',
    height: limit * tweetHeight,
    float: 'left'
  };
  return <div style={styleContainer} className="container-wall" id="container-wall">
    <div style={styleContainerLeft} className="container-wall-left">
      {tweets.map((item, i) => <Tweet key={item._id} index={-i} {...item} />)}
    </div>
  </div>;
}

Wall1.propTypes = {
  wall: PropTypes.any,
  attributes: PropTypes.any
};
export default connect(wall => {
  return {
    wall
  };
})(Wall1);