// charset: "utf-8";
// var http = require("http");
// var url = require("url");
 
// function start(route) {
//   function onRequest(request, response) {
//     var pathname = url.parse(request.url).pathname;
//     console.log("Request for " + pathname + " received.");
 
//     route(pathname);
 
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write("Hello World");
//     response.write("中文!sorry")
//     response.end();
//   }
 
//   http.createServer(onRequest).listen(8888);
//   console.log("Server has started.");
// }
 
// exports.start = start;

// var net = require('net');
// var server = net.createServer(function(connection) { 
//    console.log('client connected');
//    connection.on('end', function() {
//       console.log('客户端关闭连接');
//    });
//    connection.write('Hello World!\r\n');
//    connection.pipe(connection);
// });
// server.listen(8088, function() { 
//   console.log('server is listening');
// });

var http = require('http');
var fs = require('fs');
var url = require('url');
 
 
// 创建服务器
// http.createServer( function (request, response) {  
//    // 解析请求，包括文件名
//    var pathname = url.parse(request.url).pathname;
   
//    // 输出请求的文件名
//    console.log("Request for " + pathname + " received.");
   
//    // 从文件系统中读取请求的文件内容
//    fs.readFile(pathname.substr(1), function (err, data) {
//       if (err) {
//          console.log(err);
//          // HTTP 状态码: 404 : NOT FOUND
//          // Content Type: text/plain
//          response.writeHead(404, {'Content-Type': 'text/html'});
//       }else{             
//          // HTTP 状态码: 200 : OK
//          // Content Type: text/plain
//          response.writeHead(200, {'Content-Type': 'text/html'});    
         
//          // 响应文件内容
//          response.write(data.toString());        
//       }
//       //  发送响应数据
//       response.end();
//    });   
// }).listen(8088);
 
// // 控制台会输出以下信息
// console.log('Server running at http://127.0.0.1:8088/');

var express = require('express');
var app = express();
var fs = require("fs");
app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})
var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://", host, port);
})