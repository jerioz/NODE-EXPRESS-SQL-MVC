const db= require('../config/database');

const UserController = {
    newUser(req, res) {
        let user = { first_name: req.body.first_name, last_name: req.body.last_name }
        let sql ='INSERT INTO users SET ?'
        db.query(sql, user, (err, result) => {
            if(err) throw err
            res.send('User created')
        })
    },
    updateUser(req, res) {
        let newName = 'Stephen';
        let sql = `UPDATE users SET first_name = '${newName}' WHERE id = ${req.params.id}`;
        db.query(sql, (err,result)=> {
        if(err) throw err;
        res.send('User updated')
        })
    },
    allUsers(req, res) {
        let sql = 'SELECT * FROM users';
        db.query(sql, (err,result) => {
        if(err) throw err
        res.send({Message: 'Get users', result})
        })
    },
    userOrder(req, res) {
        let sql = 'SELECT users.first_name, users.last_name, orders.amount FROM users INNER JOIN orders ON users.id = orders.user_id';
        db.query(sql, (err, result) => {
        if(err) throw err
        res.send({Message: 'User with order', result})
    })
    },
    selectUserId(req, res) {
        let sql = `SELECT * FROM users WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
        if(err) throw err
        res.send(result)
        })
    },
    deleteUser(req, res) {
        let sql = `DELETE FROM users WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
        if(err) throw err
        res.send('User deleted')
        })
    }

}

module.exports = UserController;