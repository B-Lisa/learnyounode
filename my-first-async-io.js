let fs = require ('fs');
let file = fs.readFile(process.argv[2], {encoding: 'utf8'}.split('\n').length - 1);

function callback (err, data) {}
callback()

console.log(file);
console.log(callback)