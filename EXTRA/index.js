const express = require('express');
const app = express();
const db = require('./config/database')
app.use(express.json());





app.get('/createDb', (req, res) => {
    let sql = 'CREATE DATABASE sqlextra';
    db.query(sql, (err, result) => {
        if(err) throw err
        res.send('Database created')
    })
});

app.get('/createTable', (req, res) => {
    let sql = 'CREATE TABLE users (id INT AUTO_INCREMENT, first_name VARCHAR(100), last_name VARCHAR(100), PRIMARY KEY (id))';
    db.query(sql, (err, result) => {
        if(err) throw err
        res.send('Table created')
    })
});

app.get('/createTable2', (req, res) => {
    let sql = 'CREATE TABLE orders (id INT AUTO_INCREMENT, user_id INT, amount INT (3), PRIMARY KEY (id), FOREIGN KEY(user_id) REFERENCES users(id))';
    db.query(sql, (err, result) => { 
        if(err) throw err
        res.send('Table created')
    })
});



app.use('/users', require('./routes/users'));

app.use('/orders', require('./routes/orders'));

app.listen('3001', () => {
    console.log('Puerto abierto')
});