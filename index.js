const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const connect = mysql.createConnection({
    host: 'localhost',
    user: 'dbuser',
    password: '0000',
    database: 'express_db'
});

app.get('/', (req, res) => {
    const sql = 'select * from users';
    connect.query(sql, (err, result, fields) => {
        if (err) throw err;
        res.send(result);
    });
});

app.post('/', (req, res) => {
    const sql = "insert into users set ?";

    connect.query(sql, req.body, (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send('Registerd');
    });
});

app.get('/delete', (req, res) => {
    const sql = 'delete from users where id = ?';
    connect.query(sql, [req.query.id], (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.redirect('/');
    });
});

app.post('/update', (req, res) => {
    const sql = "UPDATE users SET ? WHERE id = " + req.body.id;

    connect.query(sql, {"name": req.body.name, "email": req.body.email}, (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.redirect('/');
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
