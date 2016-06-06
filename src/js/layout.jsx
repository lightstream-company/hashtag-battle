import Battle from './battle.jsx';
import Header from './header.jsx';
import Wall1 from './wall1.jsx';
import Wall2 from './wall2.jsx';
import React from 'react';

function Layout() {
  return <div>
    <Header />
    <Battle />
    <Wall1 />
    <Wall2 />
  </div>;
}

export default Layout;