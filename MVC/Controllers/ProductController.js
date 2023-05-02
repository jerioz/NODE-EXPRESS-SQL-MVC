const db = require('../config/database');

const ProductController = {
    newProduct(req, res) {
        let post = { name_product: req.body.name_product, category_id: req.body.category_id}
        let sql = 'INSERT INTO products SET ?'
        db.query(sql, post, (err, result) => {
        if(err) throw err
        res.send('Post added')
    })
    },
    updateProduct(req, res) {
        let newName = 'TV 16K VGS';
    let sql = `UPDATE products SET name_product = '${newName}' WHERE id = ${req.params.id}`;
    db.query(sql, (err,result)=> {
    if(err) throw err;
    res.send('Post updated')
    })
    },
    selectProduct(req, res) {
        let sql = 'SELECT * FROM products';
    db.query(sql, (err,result) => {
        if(err) throw err
        res.send({Message: 'Get products', result})
    })
    },
    productCategory(req, res) {
        let sql = 'SELECT products.name_product, categories.name_category FROM categories INNER JOIN products ON categories.id = products.category_id';
    db.query(sql, (err, result) => {
        if(err) throw err
        res.send({Message: 'Product with category', result})
    })
    },
    selectProductId(req, res) {
        let sql = `SELECT * FROM products WHERE id = ${req.params.id} `;
    db.query(sql, (err, result) => {
        if(err) throw err
        res.send(result)
    })
    },
    productDesc(req, res) {
        let sql = 'SELECT * FROM products ORDER BY id DESC';
    db.query(sql, (err, result) => {
        db.query(sql, (err, result) => {
            if(err) throw err
            res.send(result)
        })
    })
    },
    selectProductName(req, res) {
        let sql = `SELECT * FROM products WHERE name_product LIKE '${req.params.name_product}'`;
    db.query(sql, (err, result) => {
        if(err) throw err
        res.send(result)
    })
    },
    deleteProduct(req, res) {
        let sql = `DELETE FROM products WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
            if(err) throw err
            res.send('Product deleted')
        })
    }
 }
 

module.exports = ProductController