import React from 'react';
import { maxWidth } from './config';

function Header(){
  const styleHeader = {
    maxWidth: maxWidth
  };
  return <div className="header" style={styleHeader}>
  
      <div className="github" >
        <a href="https://github.com/lightstream-company/hashtag-battle" target="blank"><i className="fa fa-github" aria-hidden="true"></i></a>
        <p>View the code <br />on github</p>
      </div>
      <div className="tweetping">
        <p>Powered by</p>
        <p><a href="https://www.tweetping.net/" target="blank">Tweetping</a></p>
      </div>
      <h1>#HASHTAG BATTLE</h1>
  </div>;
}
export default Header;