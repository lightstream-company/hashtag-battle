import React, { PropTypes } from 'react';
import { maxWidth, tweetHeight } from './config';

const Tweet = (props) => {
  const { text } = props;
  var styleTweet = {
    height: tweetHeight,
    width: 96 + '%',
    margin: 'auto'
  };
  //var myText;
  var myText = text.replace('RT', '<i class="fa fa-retweet" aria-hidden="true"></i>');
  //myText = myText.replace(/#[a-z]+/gi, '<span style="color:blue;">__</span>');
  function htmText() {
    return { __html: myText };
  }
  var styleP = {
    fontSize: 16,
    fontWeight: 400,
    height: tweetHeight,
    textOverflow: 'hidden'
  };
  if (window.innerWidth > maxWidth) {
    styleP.fontSize = 14;
  }
  return <div className="tweet" style={styleTweet} >
    <p style={styleP} dangerouslySetInnerHTML={htmText()}/>
  </div>;
};

Tweet.propTypes = {
  text: PropTypes.string
};
export default Tweet;