// var exp = require('express');
// var path = require('path');
// var app = exp();

// //app.use(exp.static(path.join(__dirname,'public')));

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

var exp = require('express');
var mysql = require('mysql2');
var path = require('path');
var bp = require('body-parser');
var cors = require('cors');
var app = exp();

//app.use(exp.static(path.join(__dirname,'public')));

app.use(cors());
app.use(exp.json());

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "test"
});

con.connect(function (err) {
    if (!err) {
        console.log("db connected");
    }
    else {
        console.log("db not connected");
    }
});

var server = app.listen(9000,function(req,res)
{
    var host = server.address().address
    var port = server.address().port
   console.log("server created at 9000");
});


app.get('/emps', (req, res) => {
    con.query('select * from emp', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

app.post('/insertemp', (req, res) => {
    //console.log(req.body.body);
    var emp = req.body;
    console.log(emp);
    
    var sql = "insert into emp (EMPNO,ENAME,JOB,MGR) values (?,?,?,?)";           
    con.query(sql, [emp.EMPNO, emp.ENAME, emp.JOB, emp.MGR], (err, rows, fields) => {
        if (!err) {
            // const emp = rows.filter(function (elem) {
            //     return elem.constructor == Array;
            // });
            res.send("emp inserted");
        }
        else
            res.send(err);
    })
});

