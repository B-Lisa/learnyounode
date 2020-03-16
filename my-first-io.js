const fs = require('fs');
const newFile = fs.readFileSync('/workspace/learnyounode/my-first-io.js');
const str = newFile.toString();
console.log(str);