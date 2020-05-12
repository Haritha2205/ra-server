const express = require('express');
const app =express();
const port = 3000;

var mysql = require('mysql');
var connInfo = {
    host : "localhost",
    user : "root",
    port : 3306,
    password : "pakkukrish@22",
    database : "RA1"
}

var connection = mysql.createConnection(connInfo);

app.get('/', (req, res) => {
    res.send('I am creating nodejs express application');
});

app.get('/Candidates', (req, res) => {
    let sql ='select * from Candidates';

    if(req.query.id){
        sql=sql+'where id'+req.query.id;
    }
    connection.query(sql, function(err, data, fields){
        if (err) {
            res.status(500);
            let errMsg={
                error: err
            }
            res.send(errMsg);
        }
        let responseObject={
            data: data
        }
        res.send(responseObject);
    })
});

app.get('/Employees', (req, res) => {
    let sql ='select * from Employees';

    if(req.query.id){
        sql=sql+'where id'+req.query.id;
    }
    connection.query(sql, function(err, data, fields){
        if (err) {
            res.status(500);
            let errMsg={
                error: err
            }
            res.send(errMsg);
        }
        let responseObject={
            data: data
        }
        res.send(responseObject);
    })
});

app.get('/Trainee', (req, res) => {
    let sql ='select * from Trainee';

    if(req.query.id){
        sql=sql+'where id'+req.query.id;
    }
    connection.query(sql, function(err, data, fields){
        if (err) {
            res.status(500);
            let errMsg={
                error: err
            }
            res.send(errMsg);
        }
        let responseObject={
            data: data
        }
        res.send(responseObject);
    })
});
app.listen(port, () =>{
console.log("Completed")
});