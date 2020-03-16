var fs = require('fs');
var file = fs.readFileSync('/workspace/learnyounode/my-first-io.js');
var buf = file(process.argv[2]);
var str = buf.toString();
var strArr = str.split('\n');
console.log(strArr.length);