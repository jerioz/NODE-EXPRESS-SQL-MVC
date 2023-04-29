const express = require('express');
const app = express();
const db = require('./config/database');
app.use(express.json());



app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE expressDbSql';
    db.query(sql, (err, result) => {
        if(err) throw err
        res.send('Database created')
    })
});

app.get('/createTable', (req, res) => {
    let sql = 'CREATE TABLE categories(id INT AUTO_INCREMENT, name_category VARCHAR (100), PRIMARY KEY (id))';
    db.query(sql, (err, result) => {
        if(err) throw err
        res.send('Table created')
    })
});

app.get('/createTable2', (req, res) => {
    let sql = 'CREATE TABLE products (id INT AUTO_INCREMENT, category_id INT, name_product VARCHAR (100), PRIMARY KEY (id), FOREIGN KEY(category_id) REFERENCES categories(id))';
    db.query(sql, (err, result) => {
        if(err) throw err
        res.send('Table2 created')
    })
});


app.listen('3000', () => {
    console.log('Puerto abierto')
});