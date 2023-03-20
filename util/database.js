const mysql = require('mysql2');

const pool = mysql.createPool({
    host : "localhost",
    username : "root",
    database : "node-complete",
    password : "Vishal@360"
});

module.exports = pool.promise()