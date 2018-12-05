var express = require('express');
var fs = require("fs");
var app = express();

app.use(express.static(__dirname));

app.get('/singupAccount', function (req, res) {

    var mysql      = require('mysql');
    var connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : 'fly199563',
      database : 'users'
    });

    connection.connect();

    var response = {
        "username":req.query.username,
        "password":req.query.password,
        "gender":req.query.gender,
        "age":req.query.age,
        "hobby":req.query.hobby
    };

    var addSql = 'INSERT INTO students(username,password, gender,age,hobby) VALUES(?,?,?,?,?)';
    var findSql = 'select username from students where username=?';
    var addSqlParams = [response.username, response.password, response.gender, response.age, response.hobby];
    var _result = '';
    connection.query(findSql,response.username,function (err, result) {
        _result = JSON.stringify(result);
        console.log(_result + 1);
            if(JSON.stringify(result) != "[]"){
                console.log('该昵称已被注册,请更换昵称注册!');
                res.send('该昵称已被注册,请更换昵称注册!');
                return;
            }
            
              
        });
        setTimeout(function(){
            console.log(_result + 2);
            
            if(_result == "[]"){
                if(!response.username || !response.password || !response.gender){
                    console.log("昵称,密码,性别不能为空!");
                    res.send("昵称,密码,性别不能为空!");
                }else{
                    connection.query(addSql,addSqlParams,function (err, result) {
                        if(err){
                            console.log('[INSERT ERROR] - ',err.message);
                            res.send(err);
                            return;
                        }
                        
                        res.send('注册成功!恭喜成为b323宿舍的会员 ^_^');
                    });
                }
            }
        },1000)
    
    
    
    

    setTimeout(function(){
        connection.end();
    },2000)
 })

 var server = app.listen(80, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://", host, port);
})