var http 	  = require('http'),
	  wait    = require('./lib/wait.js');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});

  wait.for1Seconds('My property')
    .then(wait.for2Seconds)
    .then(
        function (data) {
            res.end(data)
        },
        function (error) {
            res.end('{"Error": "' + error + '"}');
        }
    )

}).listen(8888, '127.0.0.1');

console.log('Server running at http://127.0.0.1:8888/');