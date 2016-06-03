import React from 'react';

function Wall(){
  var styleContainer = {
    width: 1100,
    margin: 'auto'
  };
  var styleContainerLeft = {
    width: ( styleContainer.width / 2 ) - ( 15 / 2 ),
    float: 'left'
  };
  var styleContainerRight = {
    width: ( styleContainer.width / 2 ) - ( 15 / 2 ),
    float: 'right'
  };
  return <div style={styleContainer} className="container-wall">
    <div style={styleContainerLeft} className="container-wall-left"></div>
    <div style={styleContainerRight} className="container-wall-right"></div>
  </div>;
}
export default Wall;