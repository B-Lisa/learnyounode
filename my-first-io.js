var fs = require('fs');
var buf = fs.readFileSync('/workspace/learnyounode/my-first-io.js')(process.argv[2]);
var str = buf.toString();
var strArr = str.split('\n');
console.log(strArr.length);