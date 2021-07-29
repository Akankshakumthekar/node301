const mysql = require('mysql2');
const dbconfig = require('../config/db.config.js');
const connection = mysql.createConnection({
    host : dbconfig.DB_HOST,
    user: dbconfig.DB_USER,
    password: dbconfig.DB_PASSWORD,
    database: dbconfig.DB_NAME
});
connection.connect((err) => {
    if(err) {

        console.log(err)
    }
    
});
module.exports = connection;