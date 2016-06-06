import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import Battle from './battle.jsx';
import Header from './header.jsx';
import Wall from './wall.jsx';

function Layout() {
  console.log();
  return <div>
    <Header />
    <Battle />
    <Wall />
  </div>;
}

Layout.propTypes = {
  fighters: PropTypes.array.isRequired
};
export default connect(function(state){
  return {
    fighters: state
  };
})(Layout);