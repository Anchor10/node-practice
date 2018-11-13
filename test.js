const http = require('http');
const hostname = '120.78.147.145';
const port = 80;
const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html;  charset=utf-8');
res.end('欢迎收听你的月亮我的心!\n好男人就是我,\n我就是----曾小贤!');
});
server.listen(port, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});