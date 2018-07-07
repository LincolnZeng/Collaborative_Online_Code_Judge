var express = require('express');
var app = express();
var restRouter = require('./routes/rest');
var indexRouter = require('./routes/index');
var mongoose = require("mongoose");
var path = require('path');
var http = require('http');
var port = 3000;

var socket_io = require('socket.io');
var io = socket_io();
var socketService = require('./services/socketService.js')(io);


//mongoose.connect('mongodb://user:user@ds037587.mlab.com:37587/coj');
//mongoose.connect('mongodb://user:user@ds037587.mlab.com:37587/coj');
mongoose.connect('mongodb://user:user@ds247587.mlab.com:47587/coj-zlk');
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use("/api/v1", restRouter);
app.use(function(req, res) {
    // send index.html to start client side
    res.sendFile("index.html", { root: path.join(__dirname, '../public/') });
});
// app.listen(port, function () {
//     console.log('APP is listening to ' + port + ' we are good to go!');
// });
var server = http.createServer(app);
io.attach(server);
server.listen(port);

server.on('error', onError);
server.on('listening', onListening);

function onError(error){
    throw error;
}

function onListening() {
    var addr = server.address();
    var bind = typeof addr == 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    console.log('Listening on ' + bind);
}
