//引入需求模块
var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var mysql = require('mysql');
var app = express();
//处理post请求
// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
//查询商品基础信息接口
app.post('/goods', function(req, res) {
res.header("Access-Control-Allow-Origin", "*");
connection.query(`SELECT * from goods where
    goods_type = '${req.body.type}' or goods_id = '${req.body.id}'`,
function(error, results, fields) {
if (error) {
res.send('fail');
return;
} else {
res.send(results)
}
});
})

// 创建连接
var connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'root',
database: 'test',
});

app.listen(52013);
console.log('start server');