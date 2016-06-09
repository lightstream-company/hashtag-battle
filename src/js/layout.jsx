import React from 'react';
import { connect } from 'react-redux';
import Battle from './battle.jsx';
import Header from './header.jsx';
import Wall from './Wall.jsx';
import { maxWidth } from './config';

const Wall1 = connect(store => {
  return {
    wall: store.wall1
  };
})(Wall);

const Wall2 = connect(store => {
  return {
    wall: store.wall2
  };
})(Wall);

function Layout() {
  const styleWallContainer = {
    maxWidth: maxWidth,
    margin: 'auto'
  };
  return <div>
    <Header />
    <Battle />
    <div style={styleWallContainer} className="container-all-wall">
      <Wall1 />
      <Wall2 />
    </div>
  </div>;
}

export default Layout;
