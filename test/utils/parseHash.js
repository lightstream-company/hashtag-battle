import test from 'tape';
import parseHash from '../../src/js/utils/parseHash';

test('parseHash', ({equal, end}) => {
  
  equal(parseHash('#FRAvsGER')[0], 'FRA');
  equal(parseHash('#FRAvsGER')[1], 'GER');

  equal(parseHash('#FRAGER')[0], 'FRA');
  equal(parseHash('#FRAGER')[1], 'GER');

  end();
});
