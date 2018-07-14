
var exports = module.exports = {};

const range = len => Array(len).fill().map((_,i) => i)

exports.toFixed = (value, m, n) => {
  if (value >= Math.pow(2,m-1)){
    return Math.pow(2,(m+n)-1)-1;
  }
  else {
    var fixedVal = Math.floor(value);
    value = value - Math.floor(value);
    range(n).map(i => {
      const iVal = 1.0/Math.pow(2,i+1);
      if (value >= iVal){
        fixedVal = fixedVal << 1 | 1;
        value = value - iVal;
      }
      else {
        fixedVal = fixedVal << 1;
      }
    });
    return fixedVal;
  }
}

exports.toFloat = (value, m, n) => {
  var floatVal = (value >> n) * 1.0;
  value = (Math.pow(2,n)-1)&value;
  range(n).map(i => {
    const iVal =  1.0/Math.pow(2,i+1)
    if (((value >> (n-i-1)) & 0x1) == 1){
      floatVal = floatVal + iVal;
    }
  });
  return floatVal;
}
