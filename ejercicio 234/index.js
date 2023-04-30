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

//EJERCICIO 2

app.post('/category', (req, res) => {
    let post = { name_category: req.body.name_category} 
    let sql = 'INSERT INTO categories SET ?'
    db.query(sql, post, (err, result) => {
        if(err) throw err
        res.send('Post added')
    })
})


app.post('/newProduct', (req, res) => {
    let post = { name_product: req.body.name_product, category_id: req.body.category_id}
    let sql = 'INSERT INTO products SET ?'
    db.query(sql, post, (err, result) => {
        if(err) throw err
        res.send('Post added')
    })
})

// EJERCICIO 3

app.put('/product/id/:id',(req,res)=>{
    let newName = 'TV 8K VGS';
    let sql = `UPDATE products SET name_product = '${newName}' WHERE id = ${req.params.id}`;
    db.query(sql, (err,result)=> {
    if(err) throw err;
    res.send('Post updated')
    })
})

app.put('/category/id/:id',(req,res)=>{
    let newName = 'Sports Water';
    let sql = `UPDATE categories SET name_category = '${newName}' WHERE id = ${req.params.id}`;
    db.query(sql, (err,result)=> {
        if(err) throw err;
        res.send('Post updated')
    })
})

// EJERCICIO 4

app.get('/allProducts', (req, res) => {
    let sql = 'SELECT * FROM products';
    db.query(sql, (err,result) => {
        if(err) throw err
        res.send({Message: 'Get products', result})
    })
});

app.get('/allCategories', (req, res) => {
    let sql = 'SELECT * FROM categories';
    db.query(sql, (err,result) => {
        if(err) throw err
        res.send({Message: 'Get categories', result})
    })
});

app.get('/productCategory', (req, res) => {
    let sql = 'SELECT products.name_product, categories.name_category FROM categories INNER JOIN products ON categories.id = products.category_id';
    db.query(sql, (err, result) => {
        if(err) throw err
        res.send({Message: 'Product with category', result})
    })
});

app.listen('3000', () => {
    console.log('Puerto abierto')
});