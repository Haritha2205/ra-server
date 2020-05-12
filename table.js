let mysql = require('mysql');

let connInfo = {
    host : "localhost",
    user : "root",
    password : "pakkukrish@22",
    database : "RA1"
}

let con = mysql.createConnection(connInfo);
var sql="select * from Candidates;"
con.query(sql,function(err,data,fields){
    
    if (err) throw err;
    console.dir(JSON.stringify(fields));
    console.dir(JSON.stringify(data));
    console.log("=====================================================")
});

var sql="select * from Employees;"
con.query(sql,function(err,data,fields){
    
    if (err) throw err;
    console.dir(JSON.stringify(fields));
    console.dir(JSON.stringify(data));
    console.log("=====================================================")
});

var sql="select * from Trainee;"
con.query(sql,function(err,data,fields){
    
    if (err) throw err;
    console.dir(JSON.stringify(fields));
    console.dir(JSON.stringify(data));
    console.log("=====================================================")
});
