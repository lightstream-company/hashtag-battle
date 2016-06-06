import React from 'react';

function Wall2(){
  var styleContainer = {
    maxWidth: 1100,
    margin: 'auto'
  };
  var styleContainerLeft = {
    width: 49 + '%',
    float: 'right'
  };
  return <div style={styleContainer} className="container-wall">
    <div style={styleContainerLeft} className="container-wall-left">
    </div>
  </div>;
}
export default Wall2;