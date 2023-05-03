const mysql = require('mysql2');

const db = mysql.createConnection( {
    host: "localhost",
    user: "your user",
    password: " your password",
    database: "database name"
})

db.connect()

module.exports = db