var filenames = fs.readdir('/workspace/learnyounode', '.md')

var results = filenames.filter(function (f) {
  return f.substr(-(filenames.length)) == md
})
console.log(results)