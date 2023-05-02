const db = require('../config/database');

const CategoryController = {
    newCategory(req, res) {
        let post = { name_category: req.body.name_category} 
    let sql = 'INSERT INTO categories SET ?'
    db.query(sql, post, (err, result) => {
        if(err) throw err
        res.send('Post added')
    })
    },
    updateCategory(req, res) {
        let newName = 'Sports Water';
    let sql = `UPDATE categories SET name_category = '${newName}' WHERE id = ${req.params.id}`;
    db.query(sql, (err,result)=> {
        if(err) throw err;
        res.send('Post updated')
    })
    },
    selectCategory(req, res) {
        let newName = 'Sports Water';
    let sql = `UPDATE categories SET name_category = '${newName}' WHERE id = ${req.params.id}`;
    db.query(sql, (err,result)=> {
        if(err) throw err;
        res.send('Post updated')
    })
    },
    selectCategoryId(req, res) {
        let newName = 'Sports Water';
    let sql = `UPDATE categories SET name_category = '${newName}' WHERE id = ${req.params.id}`;
    db.query(sql, (err,result)=> {
        if(err) throw err;
        res.send('Post updated')
    })
    }
}

module.exports = CategoryController;