/**
 * Created by benoit on 12/7/2014.
 */
var mysql = require("./mysql");

var insertLogCnx = function(username, room){

    mysql.pool.getConnection(function(err, cnx){
        if(err){
            console.log(err);
        }else{
            var sql = "INSERT logcnx(`username`,`room`)VALUES(?,?)";
            var inserts = [username, room];
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


exports.insertLogCnx = insertLogCnx;