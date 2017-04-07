const fs = require('fs');

const buf = fs.readFile(process.argv[2], function(err, buf) {
  if (err) {
    console.log(err);
  }
  var str = buf.toString()
  console.log(str.split('\n').length - 1);
});