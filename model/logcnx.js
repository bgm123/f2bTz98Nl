/**
 * Created by benoit on 12/7/2014.
 */
var mysql = require("./mysql");

var insertLogCnx = function(username, room, action){

    mysql.pool.getConnection(function(err, cnx){
        if(err){
            console.log(err);
        }else{
            var sql = "INSERT logcnx(`username`,`room`,`action`)VALUES(?,?,?)";
            var inserts = [username, room, action];
            var query = cnx.format(sql, inserts);
            cnx.query(query, function(err){
                if(err){
                    console.log(err);
                }else {
                    cnx.release();
                }
            });
        }
    });
}

var activeCnx = function(callback,req,res){
    mysql.pool.getConnection(function(err, cnx) {
        if (err) {
            console.log(err);
        } else {
            var sql = "SELECT username FROM chat.logcnx " +
                "where idlogCnx in " +
                "(select MAX(idlogCnx)from logcnx group by username desc) " +
                "and action = \"connexion\"";
            cnx.query(sql, function (err, rows, fields) {
                if (err) {
                    console.log(err);
                } else {
                    cnx.release();
                    callback(req,res,rows);
                }
            });
        }
    });
}

module.exports.insertLogCnx = insertLogCnx;
module.exports.activeCnx = activeCnx;