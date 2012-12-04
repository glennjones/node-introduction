var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('To quarters four hallo\n');
}).listen(8888, '127.0.0.1');

console.log('Server running at http://127.0.0.1:8888/');