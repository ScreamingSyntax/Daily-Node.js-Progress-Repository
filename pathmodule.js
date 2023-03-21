const path = require('path')

// console.log(path.dirname())
const a = path.basename('C:\\temp\\myfile.html');
const b = path.dirname('C:\\temp\\myfile.html');
const c = path.extname(__filename);
console.log(c)