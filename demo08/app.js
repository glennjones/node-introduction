var http 	= require('http'),
	request = require('request');

http.createServer(function (req, res) {
  	
  	request('http://farm3.staticflickr.com/2490/4165930567_612b915e24_b.jpg').pipe(res)
  	
}).listen(8888, '127.0.0.1');

console.log('Server running at http://127.0.0.1:8888/');