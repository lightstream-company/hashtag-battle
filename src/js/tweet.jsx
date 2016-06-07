import React, { Component, PropTypes } from 'react';

class Tweet extends Component {
  render() {
    const { text, user, pictureSize } = this.props;
    const profilePicture = pictureSize ?
      user.profile_picture.replace('_normal', '_' + pictureSize) :
      user.profile_picture;

    const styleTweet = {
      minHeight: 48
    };

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