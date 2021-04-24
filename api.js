const express = require('express');
const app = express();
const port = 3000;

var mysql = require('mysql')
var connInfo = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "RA1"
}

var connection = mysql.createConnection(connInfo);
app.get('/Candidates', (req, res) => {
    let sql = 'select * from Candidates';
    if (req.query.id) {
        sql = sql + 'where id=' + req.query.id;
    }
    if (req.query.candidate_name) {
        sql = 'select * from Candidates where candidate_name=?';
        connection.query(sql, [req.query.candidate_name], (err,data) => {
            if (err) {
                res.send(err);
            }
            res.send(data);
        });
    }
    if(req.query.candidate_mbl) {
        sql = sql + 'where candidate_mbl=' + req.query.candidate_mbl;
    }
    connection.query(sql, function(err, data, fields) {
        if (err) {
            res.status(500);
            let errMsg = {
                error: err
            }
            res.send(errMsg);
        }
        let responseObject = {
            data: data
        }
        res.send(responseObject);
    })
});

app.get('/Employees', (req, res) => {
    let sql = 'select * from Employees';
    if (req.query.id) {
        sql = sql + 'where id =' + req.query.id;
    }
    if (req.query.employee_name) {
        sql = 'select * from Employees where employee_name=?';
        connection.query(sql, [req.query.employee_name], (err,data) => {
            if (err) {
                res.send(err);
            }
            res.send(data);
        });
    }
    if(req.query.employee_mbl) {
        sql = 'select * from Employees where employee_mbl=?';
        connection.query(sql, [req.query.employee_mbl], (err,data) => {
            if (err) {
                res.send(err);
            }
            res.send(data);
        });
    }
    connection.query(sql, function(err, data, fields) {
        if (err) {
            res.status(500);
            let errMsg = {
                error: err
            }
            res.send(errMsg);
        }
        let responseObject = {
            data: data
        }
        res.send(responseObject);
    })
});

app.get('/Trainee', (req, res) => {
    let sql = 'select * from Trainee';
    if (req.query.id) {
        sql = sql + 'where id=' + req.query.id;
    }
    if (req.query.department) {
        sql = 'select * from Trainee where department=?';
        connection.query(sql, [req.query.department], (err,data) => {
            if (err) {
                res.send(err);
            }
            res.send(data);
        });
    }
    if (req.query.salary) {
        sql = sql + 'where salary=' + req.query.salary;
    }
    connection.query(sql, function(err, data, fields){
        if (err) {
            res.status(500);
            let errMsg = { 
                error: err
            }
            res.send(errMsg);
        }
        let responseObject = {
            data: data
        }
        res.send(responseObject);
    })
});

app.listen(port, () => {
    console.log("started server....");
});
