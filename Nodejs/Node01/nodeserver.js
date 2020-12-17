const http = require('http');

http.createServer(function (req, res) {
  console.log('requires มาอีกแล้ว')
  res.write('Hello World from node web server');
  res.end();
}).listen(80);
console.log('one');
console.log('two');
console.log('three');