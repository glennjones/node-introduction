var http 	 = require('http'),
	filedate = require('./lib/filedate');

http.createServer(function (req, res) {
  	res.writeHead(200, {'Content-Type': 'text/plain'});

  	filedate.fileLastModified('package.json', function(err, date){
  		if(err){
  			res.end('Error: ' + err)
  		}else{
			res.end('Last changed: ' + date)
		}
  	})
  	
}).listen(8888, '127.0.0.1');

console.log('Server running at http://127.0.0.1:8888/');