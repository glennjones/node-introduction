
var http      = require('http'),
    path      = require('path')
    express   = require("express"),
    sio       = require("socket.io"),
    app       = express();


app.configure(function() {
  app.set('port', process.env.PORT || 3000);
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});


var server = http.createServer(app);
server.listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});


var io = sio.listen(server);
io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'To quarters four hallo' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

