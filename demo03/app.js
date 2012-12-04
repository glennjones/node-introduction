var http 	= require('http'),
	fs 		= require('fs'),
	path 	= require('path'),
	moment 	= require('moment');

http.createServer(function (req, res) {
  	res.writeHead(200, {'Content-Type': 'text/plain'});
  	var filePath = path.resolve(__dirname, 'package.json');

	fs.stat(filePath, function(err, stat){
		var updated = moment(stat.mtime)
		res.end('Last changed: ' + updated.fromNow());
	})
  	
}).listen(8888, '127.0.0.1');

console.log('Server running at http://127.0.0.1:8888/');