import React, {PropTypes} from 'react';

function Battle(){
  const styleContainer = {
    width: 1100
  };
  const styleImg = {
    width: 100,
    height: 100,
    borderRadius: 3
  };

  const color1 = 'red';
  const color2 = 'green';
  const count1 = 456;
  const count2 = 678;
  const count1Percent = 100 * count1 / ( count1 + count2 );
  const count2Percent = 100 * count2 / ( count1 + count2 );
  const widthPlots = styleContainer.width - ( styleImg.width * 2 ) - 45;
  console.log(widthPlots); 

  const stylePlot1 = {
    background: color1,
    marginLeft: styleImg.width + 15,
    width: ( widthPlots / 100 ) * count1Percent
  };
  const stylePlot2 = {
    background: color2,
    marginRight: styleImg.width + 15,
    width: ( widthPlots / 100 ) * count2Percent
  };

  return <div className="container-battle" style={styleContainer}>
    <div className="fighter1">
      <img style={styleImg} className="img1" src="http://www.lexilogos.com/images/gb_drapeau.gif" />
      <div style={stylePlot1} className="plots"></div>
    </div>
    <div className="fighter2">
      <img style={styleImg} className="img2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/langfr-225px-Flag_of_Germany.svg.png" />
      <div style={stylePlot2} className="plots"></div>
    </div>
  </div>;
}

Battle.propTypes = {
  test: PropTypes.Number
};
export default Battle;