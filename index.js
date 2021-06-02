const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// DB settings
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'dbuser',
  password: '0000',
  database: 'product_db',
});

// Register API
app.post('/api/register', (req, res) => {
  const sql = 'INSERT INTO products SET ?';

  connection.query(sql, req.body, (err, result, fields) => {
    if (err) throw err;
    res.json({ isSuccess: true });
  });
});

// Search API
app.get('/api/search', (req, res) => {
  const sql =
    'SELECT * ' +
    'FROM products ' +
    "WHERE name LIKE '%" +
    req.query.q +
    "%' " +
    "OR description LIKE '%" +
    req.query.q +
    "%' ";
  connection.query(sql, (err, result, fields) => {
    if (err) throw err;
    res.json(result);
  });
});

// Edit API
app.post('/api/edit', (req, res) => {
  const sql = 'UPDATE products SET ? WHERE id = ' + req.body.id;
  connection.query(
    sql,
    {
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
    },
    (err, result, fields) => {
      if (err) throw err;
      res.json({ isSuccess: true });
    }
  );
});

// Delete API
app.get('/api/delete', (req, res) => {
  const sql = 'DELETE FROM products WHERE id = ' + req.query.id;
  connection.query(sql, (err, result, fields) => {
    if (err) throw err;
    res.json({ isSuccess: true });
  });
});

// Data Confirmation API
app.get('/api/confirm', (req, res) => {
  const sql = 'SELECT * FROM products';
  connection.query(sql, (err, result, fields) => {
    if (err) throw err;
    res.send(result);
  });
});

// SPA Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
