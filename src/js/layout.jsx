import Battle from './battle.jsx';
import Header from './header.jsx';
import React from 'react';

function Layout() {
  return <div>
    <Header />
    <Battle />
  </div>;
}

Layout.propTypes = {
};
export default Layout;