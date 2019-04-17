var fs = require('fs');

fs.unlink('deleteThis.html', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});