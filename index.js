/**
 @description 启动入口，监听进程状况，进程故障恢复
*/
//使用严格模式，使用es6
'use strict'

var child = require('child_process'),
	childPath = './lib/app.js',
	argvs = process.argv.slice(2),
	mainServer = child.fork(childPath, argvs);
//监听进程退出
process.on('exit', function(){
	console.log('nonitorjs-report服务退出！');
});
//监听未捕获的异常
process.on('uncaughtException', function(e) {
    console.log('nonitorjs-report服务有未捕获到的异常，异常信息：', e);
    restartServer();
});
//重启进程
function restartServer(){
    console.log('nonitorjs-report 重新启动...');
    //删除先前的进程
    try{
		process.kill(mainServer.pid);
	}catch(e){
		console.log('nonitorjs-report 关闭进程异常: ',e);
	}

    mainServer = child.fork(childPath, argvs);
    console.log('nonitorjs-report进程重新启动!');
};