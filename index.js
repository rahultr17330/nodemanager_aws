var express = require('express');
var app =express();    

var socket = require('socket.io');
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

var port =3000;
    ip   ='0.0.0.0'; 
    var server= app.listen(port, ip);
    var route = 'http://'+ip+':'+port;
    console.log('Server running on http://%s:%s', ip, port);
    app.get('/',function(req,res){
        res.render('pages/login');
    });
    module.exports = {
    	express : app,
    	server : route,
    	listener :server} 

   var getstats = require('./getbasic');

    

