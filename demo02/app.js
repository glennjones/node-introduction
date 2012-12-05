var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var myUrl = 'http://glennjones.net/2011/03/to-quarters-four-hallo/',
  	  host  =  url.parse(myUrl).host;
  	  
  res.end('The blog post live on the domain '+  host +'\n');
}).listen(8888, '127.0.0.1');

console.log('Server running at http://127.0.0.1:8888/');