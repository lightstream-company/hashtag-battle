import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { maxWidth } from './config';

function Battle(props){

  const {count1, count2} = props;

  const hashtag1 = '#Trololo';
  const hashtag2 = '#Trululu';
  const color1 = 'white';
  const color2 = 'green';

  const styleContainer = {
    maxWidth: maxWidth,
    margin: 'auto'
  };  
  var count1Percent = 100 * count1 / ( count1 + count2 );
  var count2Percent = 100 * count2 / ( count1 + count2 );
  const fighters = {
    float: 'left',
    width: 100 + '%'
  };
  const PleftHashtag = {
    textAlign: 'left',
    float: 'left',
    width: 50 + '%'
  };
  const PrightHashtag = {
    textAlign: 'right',
    float: 'right',
    width: 50 + '%'
  };
  const PleftCount = {
    textAlign: 'left',
    float: 'left',
    width: 50 + '%'
  };
  const PrightCount = {
    textAlign: 'right',
    float: 'right',
    width: 50 + '%'
  };
  const styleContentPlot1 = {
    width: count1Percent - 1 + '%',
    float: 'left'
  };
  const stylePlot1 = {
    background: color1,
    width: 100 + '%'
  };
  const styleContentPlot2 = {
    width: count2Percent - 1 + '%',
    float: 'right'
  };
  const stylePlot2 = {
    background: color2,
    width: 100 + '%'
  };
  var styleSpan1 = {
    float: 'right',
    transform: 'translateX(-15px) translateY(9px)',
    color: color2
  };
  var styleSpan2 = {
    float: 'left',
    transform: 'translateX(15px) translateY(9px)',
    color: color1
  };
  var spanCount1 = count1 + ' tweets';
  var spanCount2 = count2 + ' tweets';
  if (count1Percent < 20 || count2Percent < 20) {
    styleSpan1.display = 'none';
    styleSpan2.display = 'none';
    spanCount1 = count1 + ' tw - ' + Math.round(count1Percent) + ' %';
    spanCount2 = count2 + ' tw - ' + Math.round(count2Percent) + ' %';
  }
  if (window.innerWidth < maxWidth -100 ) {
    PleftHashtag.fontSize = 30;
    PrightHashtag.fontSize = 30;
    PleftHashtag.transform = 'translateY(-7px)';
    PrightHashtag.transform = 'translateY(-7px)';
  }

  return <div className="container-battle" style={styleContainer}>
    <img className="img1" src="http://www.lexilogos.com/images/gb_drapeau.gif" />
    <img className="img2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/langfr-225px-Flag_of_Germany.svg.png" />
    
    <div className="content-fighters">
      <div style={fighters} className="fighter1">
        <div className="hashtags">
          <p style={PleftHashtag} className="hashtag">{hashtag1}</p>
          <p style={PrightHashtag} className="hashtag p-right">{hashtag2}</p>
        </div>
        <div className="counts">
          <p style={PleftCount} className="count">{spanCount1}</p>
          <p style={PrightCount} className="count p-right">{spanCount2}</p>
        </div>
        <div className="plots">  
          <div className="content-plot1" style={styleContentPlot1} >
            <div className="plot1" style={stylePlot1}>
              <span style={styleSpan1} >{Math.round(count1Percent)}%</span>
            </div>
          </div>
          <div className="content-plot2" style={styleContentPlot2} >
            <div className="plot2" style={stylePlot2}>
              <span style={styleSpan2} >{Math.round(count2Percent)}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>;
}

Battle.propTypes = {
  count1: PropTypes.number.isRequired,
  count2: PropTypes.number.isRequired
};
export default connect(state => {
  return {
    count1: state.count1,
    count2: state.count2
  };
})(Battle);
