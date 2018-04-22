var shell = require("shelljs");
var socket = require('socket.io');
var app = require("./index");

	
	
	  app.express.get('/nodemanager',function(req,res){
      res.render('pages/demo');
   });
var io = socket(app.listener, {
  path: '/nodemanager'});
io.on('connection', function (socket) {
console.log(socket.id);
var stats =shell.exec('./getstats.sh');
socket.emit('basic_stats',stats.stdout);
});