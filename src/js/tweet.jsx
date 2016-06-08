import React, { PropTypes } from 'react';

const Tweet = (props) => {
  const { text } = props;
  var styleTweet = {
    height: 48,
    width: 96 + '%',
    margin: 'auto'
  };
  var myText = text.replace('RT', '<i class="fa fa-retweet" aria-hidden="true"></i>');
  function htmText() {
    return { __html: myText };
  }
  var styleP = {
    fontSize: 16,
    fontWeight: 400,
    height: 48,
    textOverflow: 'hidden'
  };
  return <div className="tweet" style={styleTweet} >
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