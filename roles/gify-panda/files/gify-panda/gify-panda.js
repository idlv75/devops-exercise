var http = require('http');
var config = require('./config.json');
var finalhandler = require('finalhandler');
var serveStatic  = require('serve-static'); 

var serve = serveStatic("./resources");

var server = http.createServer(function(req, res){
    var done = finalhandler(req, res);
    serve (req, res, done);
});

server.listen(config.port);

