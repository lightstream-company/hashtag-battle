export default function parseHash(hash) {
  const string = hash.replace('#', '');  
  if(string.indexOf('vs') > -1){
    return string.split('vs');
  }else if(string.length === 6){
    return [
      string.slice(0,3),
      string.slice(3,6)
    ];
  }else{
    throw new Error('bad hash format, use #FRAvsGER or #FRAGER');
  }
}
