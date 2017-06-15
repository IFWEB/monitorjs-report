/**
 @description 启动入口,调用功能模块js
*/

'use strict'

var express = require('express'),
	program = require('commander'),
	config = require('./config.js'),
	app = express(),
	port = config.port;
//解析命令行参数
program
    .version('0.0.1')
    .option('-p, --port <n>', '指定端口号', parseInt)
    .parse(process.argv);

//如果有输入端口则使用输入的端口，否则使用配置中默认的端口
if(program.port) {
    port = program.port;
}

app.listen(port, function () {
	console.log("listening on port " + port);
});

require('./test.js');