var express = require('express');
var router = express.Router();
var mysql = require("../model/mysql");

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/chat/:room', function(req,res){
  var callback = function(req,res,connectedUsers){
    res.render('chat',{ title:'Express - Chat', room:req.params.room, connectedUsers:connectedUsers});
  }
  var connectedUsers = mysql.logcnx.activeCnx(callback,req,res);
});

/* POST traitement cnx */
router.post('/cnx', function(req, res){
  var username_s = req.body.username;
  if(username_s != ''){
    var sess = req.session;
    sess.username = username_s;
    res.redirect('/chat/main');
  }else{
    console.log("/cnx : user is empty");
    res.redirect('/');
  }
});

module.exports = router;
