/**
 * Created by benoit on 12/7/2014.
 */
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : "chat"
});
connection.connect(function(err) {
    if (err) {
        console.error('error connecting DB: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});
exports.cnx = connection;
