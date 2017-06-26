/**
 * @author 陈桦
 * @date 2017-6-26
 * @description 用来测试report.js的功能

*/
//express_demo.js 文件
var express = require('express');
var path = require('path');
var app = express();
//配置静态资源路径
console.log(path.resolve(__dirname,'..'));
app.use(express.static('..'));

app.get('/', function (req, res) {
	console.log(__dirname);
	res.sendFile( __dirname + "/static/index.html" );
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address;
  var port = server.address().port;
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})