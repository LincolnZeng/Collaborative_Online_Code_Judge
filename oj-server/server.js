var express = require('express');
var app = express();
var restRouter = require('./routes/rest');
var indexRouter = require('./routes/index');
var mongoose = require("mongoose");
var path = require('path');
var port = 3000;
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
app.listen(port, function () {
    console.log('APP is listening to ' + port + ' we are good to go!');
});
