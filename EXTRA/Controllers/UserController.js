const db= require('../config/database');

const UserController = {
    newUser(req, res) {
        let user = { first_name: req.body.first_name, last_name: req.body.last_name }
        let sql ='INSERT INTO users SET ?'
        db.query(sql, user, (err, result) => {
            if(err) throw err
            res.send('User created')
        })
    }

}

module.exports = UserController;