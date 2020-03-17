var ext = 'dat'
var filenames = [ 'somefile.dat', 'anotherfile.txt', 'bogusfiledat', 'goodfile.dat' ]

ext = '.' + ext
var results = filenames.filter(function (f) {
  return f.substr(-(ext.length)) == ext
})
console.log('results:', results)