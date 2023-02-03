var exp = require('express');
var path = require('path');
var app = exp();

var server = app.listen(9000,function()
{
   console.log("server created at 9000");
});

app.get("/",function(req,res)
{
   var person = {name:"saloni"};
   res.send(person);
})

app.use(express.static(path.join(__dirname,'public')));

