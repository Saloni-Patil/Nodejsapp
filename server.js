// var exp = require('express');
// var path = require('path');
// var app = exp();

// app.use(exp.static(path.join(__dirname,'public')));

// var server = app.listen(9000,function(req,res)
// {
//     var host = server.address().address
//     var port = server.address().port
//    console.log("server created at 9000");
// });

// app.get("/",function(req,res)
// {
//    var person = {name:"saloni"};
//    res.send(person);
// });

var express = require('express');

var app= express();
var path = require('path');

app.use(express.static(path.join(__dirname,'Public')));



app.get('/',function(req,res){

    var person = {fname:"salu"}

    res.send(person);
});

var server = app.listen(9000,function(req,res){

    var host = server.address().address
    var port = server.address().port

    console.log("ahe ithecgh");

});


