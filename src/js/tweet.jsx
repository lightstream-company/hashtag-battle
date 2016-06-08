import React, { PropTypes } from 'react';
import { maxWidth } from './config';

const Tweet = (props) => {
  const { text, user, pictureSize } = props;
  const profilePicture = pictureSize ?
    user.profile_picture.replace('_normal', '_' + pictureSize) :
    user.profile_picture;
  var styleTweet = {
    height: 48,
    width: ( maxWidth / 2 ) - 30
  };
  var myText = text.replace('RT', '<i class="fa fa-retweet" aria-hidden="true"></i>');
  function htmText() {
    return { __html: myText };
  }
  var styleP = {
    fontSize: 16,
    fontWeight: 400,
    height: 48,
    paddinRight: 15,
    textOverflow: 'hidden'
  };
  if (window.innerWidth < maxWidth) {
    styleP.fontSize = 13;
    styleP.fontSize = 13;
    styleTweet.width = ( window.innerWidth / 2 ) - 40;
  }
  return <div className="tweet" style={styleTweet} >
    <img src={profilePicture} />
    <p style={styleP} dangerouslySetInnerHTML={htmText()}/>
  </div>;
};

Tweet.propTypes = {
  index: PropTypes.number,
  pictureSize: PropTypes.string,
  user: PropTypes.object.isRequired,
  entities: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired
};
export default Tweet;