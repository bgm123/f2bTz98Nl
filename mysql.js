/**
 * Created by benoit on 12/7/2014.
 */
var mysql      = require('mysql');
var pool = mysql.createPool({
    user     : 'root',
    password : 'root',
    database : "chat",
    connectionLimit : 10
});

exports.pool = pool;
