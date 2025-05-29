//const fs = require('node:fs');

/*fs.readFile();
fs.readFileSync();
fs.access();
fs.accessSync();
fs.chmodSync();
*/

const {readFile,readFileSync} = require('node:fs');

const fs = require('node:fs');

fs.readFile('/Users/joe/test.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});




