const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gallery',
    multipleStatements: true
});

connection.connect(function(err) {
    if(err) {
        console.log('error connection');
    }
    else {
        console.log('>> Database is connected to gallery');
    }
})

module.exports = connection;