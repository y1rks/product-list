const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'dbuser',
    password: '0000',
    database: 'product_db'
});

// Register
app.post('/register', (req, res) => {
    const sql = "INSERT INTO products SET ?";

    connection.query(sql, req.body, (err, result, fields) => {
        if (err) throw err;
        res.json({ isSuccess: true });
    });
});

// Search
app.get('/search', (req, res) => {
    const sql = 
    "SELECT * " + 
    "FROM products " +
    "WHERE name LIKE '%" + req.query.q + "%' " +
    "OR description LIKE '%" + req.query.q + "%' ";
    connection.query(sql, (err, result, fields) => {
        if (err) throw err;
        res.json(result);
    });
});

// Edit
app.post('/edit', (req, res) => {
    const sql = "UPDATE products SET ? WHERE id = " + req.body.id;
    connection.query(
        sql, 
        {
            "name": req.body.name,
            "price": req.body.price,
            "description": req.body.description
        },
        (err, result, fields) => {
            if (err) throw err;
            res.json({ isSuccess: true });
        }
    );
});

// Delete
app.get('/delete', (req, res) => {
    const sql = 'DELETE FROM products WHERE id = ' + req.query.id;
    connection.query(sql, (err, result, fields) => {
        if (err) throw err;
        res.json({ isSuccess: true });
    });
});

// データ確認
app.get('/', (req, res) => {
    const sql = 'SELECT * FROM products';
    connection.query(sql, (err, result, fields) => {
        if (err) throw err;
        res.send(result);
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
