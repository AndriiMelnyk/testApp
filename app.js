var express = require("express");
var app = express();
var path = require('path');

app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use('/app',  express.static(__dirname + '/app'));
app.use('/views',  express.static(__dirname + '/views'));
app.use('/css',  express.static(__dirname + '/css'));
app.use('/controllers',  express.static(__dirname + '/controllers'));

app.get('/',function(req,res){
      res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3222,function(){
    console.log("Working on port 3222");
});