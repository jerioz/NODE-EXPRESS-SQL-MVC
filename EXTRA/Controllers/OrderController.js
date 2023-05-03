const db = require('../config/database');

const OrderController = {
    newOrder(req, res) {
    let order = { user_id: req.body.user_id, amount: req.body.amount}
    let sql = 'INSERT INTO orders SET ?'
    db.query(sql, order, (err, result) => {
        if(err) throw err
        res.send('Order created')
    })
    }
}

module.exports = OrderController;