const mysql = require('mysql2');

const db = mysql.createConnection( {
    host: "localhost",
    user: "tu user",
    password: "tu password",
    database: "expressDbSql"
})

db.connect()

module.exports = db