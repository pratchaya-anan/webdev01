var http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(`<html>
  <head></head>
  <body>
    <h1>Yeahhhh</h1>
    <span> testing </span>
  </body>
  </html>`);
}).listen(8080);