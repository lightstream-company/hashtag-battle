import React, {PropTypes} from 'react';

function Battle(){
  
  const hashtag1 = '#Trololo';
  const hashtag2 = '#Trululu';
  const color1 = 'white';
  const color2 = 'green';
  const count1 = 256;
  const count2 = 678;

  const styleContainer = {
    maxWidth: 1100,
    margin: 'auto'
  };  
  const count1Percent = 100 * count1 / ( count1 + count2 );
  const count2Percent = 100 * count2 / ( count1 + count2 );
  const widthPlots = 1100 - 200 - 45;
  const styleFighter1 = {
    marginLeft: 15,
    width: ( widthPlots / 100 ) * count1Percent
  };
  const styleFighter2 = {
    marginRight: 15,
    width: ( widthPlots / 100 ) * count2Percent
  };

  const stylePlot1 = {
    background: color1
  };
  const stylePlot2 = {
    background: color2
  };
  const styleSpan1 = {
    float: 'right',
    transform: 'translateX(-15px) translateY(9px)',
    color: color2
  };
  const styleSpan2 = {
    float: 'left',
    transform: 'translateX(15px) translateY(9px)',
    color: color1
  };

  return <div className="container-battle" style={styleContainer}>
    <img className="img1" src="http://www.lexilogos.com/images/gb_drapeau.gif" />
    <div style={styleFighter1} className="fighter1">
      <p className="hashtag">{hashtag1}</p>
      <p className="count">{count1} tweets</p>
      <div className="plot1" style={stylePlot1}>
        <span style={styleSpan1} >{Math.round(count1Percent)}%</span>
      </div>
    </div>
    <img className="img2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/langfr-225px-Flag_of_Germany.svg.png" />
    <div style={styleFighter2} className="fighter2">
      <p className="hashtag p-right">{hashtag2}</p>
      <p className="count p-right">{count2} tweets</p>
      <div className="plot2" style={stylePlot2}>
        <span style={styleSpan2} >{Math.round(count2Percent)}%</span>
      </div>
    </div>
  </div>;
}

Battle.propTypes = {
};
export default Battle;