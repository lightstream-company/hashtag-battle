import React from 'react';
import { connect } from 'react-redux';
import Battle from './battle.jsx';
import Header from './header.jsx';
import Wall from './Wall.jsx';

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
  return <div>
    <Header />
    <Battle />
    <Wall1 />
    <Wall2 />
  </div>;
}

export default Layout;
