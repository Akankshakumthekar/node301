const mysql = require('mysql');
const dbconfig = require('../config/db.config.js');
const connection = mysql.createPool({
    host : dbconfig.host,
    user: dbconfig.user,
    password: dbconfig.password,
    db: dbconfig.db
});
connection.query('select * 1 + 1', (req, res) => {
    /*
    */
});
module.exports = connection;