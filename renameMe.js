var fs = require('fs');

fs.rename('name1.html', 'Abby.html', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});