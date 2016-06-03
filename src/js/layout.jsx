import Battle from './battle.jsx';
import Header from './header.jsx';
import Wall from './wall.jsx';
import React from 'react';

function Layout() {
  return <div>
    <Header />
    <Battle />
    <Wall />
  </div>;
}

Layout.propTypes = {
};
export default Layout;