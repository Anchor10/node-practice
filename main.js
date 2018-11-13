// var fs = require("fs");
// var data = fs.readFileSync('input.txt');
// console.log(data.toString());
// console.log("程序执行结束!");

// var fs = require("fs");
// fs.readFile('input.txt',function(err,data){
//     if(err) return console.error(err.stack);
//     console.log(data.toString());
// });
// console.log("程序执行结束!");

// newFunction();
// function newFunction() {
//     var events = require("events");
//     var eventEmitter = new events.EventEmitter();
//     var connectHandler = function connected() {
//         console.log("连接成功!");
//         eventEmitter.emit('data_received');
//     };
//     eventEmitter.on("connection", connectHandler);
//     eventEmitter.on("data_received", function () {
//         console.log("数据连接成功!");
//     });
//     eventEmitter.emit("connection");
//     console.log("程序执行完毕!");
//     console.log("程序没有发生错误...")
// }
// buffer
// buf = Buffer.alloc(256);
// len = buf.write("www.runoob.com");
// console.log("写入字节数 : "+  len);


// var buffer = Buffer.from('www.runoob.com');
//  缓冲区长度
// console.log("buffer length: " + buffer.length);


// stream流------------------------------------------------------------
// var fs = require("fs");
// var data = '';

// 创建可读流
// var readerStream = fs.createReadStream('input.txt');

// 设置编码为 utf8。
// readerStream.setEncoding('UTF8');

// 处理流事件 --> data, end, and error
// readerStream.on('data', function(chunk) {
//    data += chunk;
// });

// readerStream.on('end',function(){
//    console.log(data);
// });

// readerStream.on('error', function(err){
//    console.log(err.stack);
// });

// console.log("程序执行完毕");

// 写入流------------------------------------------------
// var fs = require("fs");
// var data = '菜鸟教程官网地址：www.runoob.com';

// 创建一个可以写入的流，写入到文件 output.txt 中
// var writerStream = fs.createWriteStream('output.txt');

// 使用 utf8 编码写入数据
// writerStream.write(data,'UTF8');

// 标记文件末尾
// writerStream.end();

// 处理流事件 --> data, end, and error
// writerStream.on('finish', function() {
//     console.log("写入完成。");
// });

// writerStream.on('error', function(err){
//    console.log(err.stack);
// });

// console.log("程序执行完毕");

// 管道流---------------------------------------------
// var fs = require("fs");

// 创建一个可读流
// var readerStream = fs.createReadStream('input.txt');

// 创建一个可写流
// var writerStream = fs.createWriteStream('output.txt');

// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
// readerStream.pipe(writerStream);

// console.log("程序执行完毕");

// 链式流---------------------------------------------------
// var fs = require("fs");
// var zlib = require('zlib');

// 压缩 input.txt 文件为 input.txt.gz
// fs.createReadStream('input.txt')
//   .pipe(zlib.createGzip())
//   .pipe(fs.createWriteStream('input.txt.gz'));
  
// console.log("文件压缩完成。");
// 添加-------------------------------------------------------
// let fs = require('fs');
// let data = '';
// let data2 = '你的小青蛙是真的可爱';
// //1.读取流
// //创建可读流
// let readStream = fs.createReadStream("input.txt");
// //设置utf-8编码
// readStream.setEncoding('UTF8');
// //处理流事件
// readStream.on('data', chunk => data += chunk);
// readStream.on('end', () => writeS(data));
// readStream.on("error", err => console.log(err.strck));
// console.log("程序1执行完毕");
// //2.写入流
// //创建可写流
// let writeS = dataS =>{
//     let writeStream = fs.createWriteStream("outInput.txt");
//     //使用utf-8写入流    
//     writeStream.write(data2+dataS, "UTF8");
//     //标记文件末尾
//     writeStream.end();
//     //处理事件流    
//     writeStream.on("finish", () => console.log("写入完成")); 
//     writeStream.on("error", err => console.log(err.stack));   
//     console.log("程序2执行完毕");
// }

// 模块
// var hello = require('./hello');
// hello.world();
// var http = require("http");
// http.createServer(function(request, response) {
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write("Hello World ! 大家好!我是 node!");
//   response.end();
// }).listen(8888);

// __filename
// 

// function printHello(){
//   console.log( "Hello, World!");
// }
// // 两秒后执行以上函数
// var t = setTimeout(printHello, 2000);
// clearTimeout(t);

// function printHello(){
//   console.time("a")
//   console.log( "Hello, World!");
//   console.timeEnd("a");
//   console.assert(true,"第一个参数是错的");
// }
// // 两秒后执行以上函数
// var t = setInterval(printHello, 2000);

// var fs = require("fs");

// console.log("准备打开文件！");
// fs.stat('input.txt', function (err, stats) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log(stats);
//    console.log("读取文件信息成功！");
   
//    // 检测文件类型
//    console.log("是否为文件(isFile) ? " + stats.isFile());
//    console.log("是否为目录(isDirectory) ? " + stats.isDirectory());    
// });


// node GET/POST

// var http = require('http');
// var url = require('url');
// var util = require('util');
 
// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type': 'text/plain'});
 
//     // 解析 url 参数
//     var params = url.parse(req.url, true).query;
//     res.write("网站名：" + params.name);
//     res.write("\n");
//     res.write("网站 URL：" + params.url);
//     res.end();
 
// }).listen(3000);

// var http = require('http');
// var querystring = require('querystring');
 
// var postHTML = 
//   '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
//   '<body>' +
//   '<form method="post">' +
//   '网站名： <input name="name"><br>' +
//   '网站 URL： <input name="url"><br>' +
//   '<input type="submit">' +
//   '</form>' +
//   '</body></html>';
 
// http.createServer(function (req, res) {
//   var body = "";
//   req.on('data', function (chunk) {
//     body += chunk;
//   });
//   req.on('end', function () {
//     // 解析参数
//     body = querystring.parse(body);
//     // 设置响应头部信息及编码
//     res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
 
//     if(body.name && body.url) { // 输出提交的数据
//         res.write("网站名：" + body.name);
//         res.write("<br>");
//         res.write("网站 URL：" + body.url);
//     } else {  // 输出表单
//         res.write(postHTML);
//     }
//     res.end();
//   });
// }).listen(3000);

// var os = require("os");

// // CPU 的字节序
// console.log('endianness : ' + os.endianness());

// // 操作系统名
// console.log('type : ' + os.type());

// // 操作系统名
// console.log('platform : ' + os.platform());

// // 系统内存总量
// console.log('total memory : ' + os.totalmem() + " bytes.");

// // 操作系统空闲内存量
// console.log('free memory : ' + os.freemem() + " bytes.");

