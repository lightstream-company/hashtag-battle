import React, { Component, PropTypes } from 'react';
import { maxWidth } from './config';

class Tweet extends Component {
  render() {
    const { text, user, pictureSize } = this.props;
    const profilePicture = pictureSize ?
      user.profile_picture.replace('_normal', '_' + pictureSize) :
      user.profile_picture;
    var styleTweet = {
      height: 48,
      width: ( maxWidth / 2 ) - 30
    };
    function reSize() {
      if(maxWidth > window.innerWidth) {
        styleTweet.width = ( window.innerWidth / 2 ) - 30;
        console.log(styleTweet.width);
      }
    }
    window.addEventListener('resize', reSize);
    return <div className="tweet" style={styleTweet} >
      <img src={profilePicture} />
      <p>{text}</p>
    </div>;
  }
}

Tweet.propTypes = {
  index: PropTypes.number,
  pictureSize: PropTypes.string,
  user: PropTypes.object.isRequired,
  entities: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired
};
export default Tweet;