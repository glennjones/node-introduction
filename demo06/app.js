var express = require('express'),
    http    = require('http'),
    fs      = require('fs'),
    path    = require('path');

var app      = express(),
    requires = {};


function read(path, options, fn) {
  fs.readFile(path, 'utf8', function(err, str){
    if (err) return fn(err);
    fn(null, str);
  });
}


var handlebars = function(path, options, fn) {
  var engine = requires.handlebars || (requires.handlebars = require('handlebars'));

  read(path, options, function(err, str){
    if (err) return fn(err);
    try {
      options.filename = path;
      var tmpl = engine.compile(str, options);
      fn(null, tmpl(options));
    } catch (err) {
      fn(err);
    }
  });
}


app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));

  // assign the engine to .html files and handlebars
  app.engine('html', handlebars);

  // set .html as the default extension 
  app.set('view engine', 'html');
  app.set('views', __dirname + '/views');
});



// renders home page
app.get('/', function(req, res){
    var test = '';
    if(req.query.test){
        test = req.query.test
    }

  res.render('index', {
    "test": test,
    "date": new Date().toString()
    });
});



http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});