[![NPM version](https://img.shields.io/npm/v/fixed2float.svg)](https://www.npmjs.org/package/fixed2float)

# fixed2float
Convert fixed point to float and vice-versa

## Usage
```javascript
const f2f = require('fixed2float');

let m = 6;
let n = 10;
// To convert floating point to Qmn fixed point
console.log(f2f.toFixed(0.5, m, n)); // will output 0x200

// To convert Qmn fixed point to floating point
console.log(f2f.toFloat(0x200, m, n)); // will output 0.5
```
