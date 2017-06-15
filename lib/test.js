// var db = require("./database/init");

// var user = new db.userInfo({
// 	username: 'chua',
// 	password: '1123456',
//     project: [{
//         url: 'www.lcfarm.com',
//         uid: 'aaa'
//     }]
// });
// user.save(function(err) {
//     if (err) {
//         console.log('添加一条用户数据失败');
//         return;
//     }
//     console.log('添加了一条用户数据');
// });

// db.userInfo.count({username: 'chua'}, function(err, person){
// 	if (err) {
// 		return console.log(err);
// 	}
//   	console.log(person);
// })

// db.userInfo.find()

// var pInfo = new db.performanceInfo({
// 	uid: 'aaa',
// 	ip: '111',
// 	networkStandard: '111',
// 	browser: '111', 
// 	telecomOperators: '111',
// 	area: '111',
// 	date: new Date(),
// 	url: '111',
// 	firstPaintFinished: 0,
// 	firstScreenFinished: 0,
// 	DOMContentLoaded: 0,
// 	load: 0, 
// 	DNSTime: 0,
// 	TCPTime: 0,
// 	httpReqTime: 0,
// 	httpResTime: 0,
// 	performanceTiming: {navigationStart: 1497493400068, unloadEventStart: 0, unloadEventEnd: 0, redirectStart: 0, redirectEnd: 0},
//     js: [{
//         url: '111',
//         responseSize: 0,
//         responseDuration: 0,
//     }],
//     css:  [{
//         url: '111',
//         responseSize: 0,
//         responseDuration: 0,
//     }],
//     img: [{
//         url: '111',
//         responseSize: 0,
//         responseDuration: 0,
//         width: 0,
//         height: 0
//     }]
// });
// //保存数据库
// pInfo.save(function(err) {
//     if (err) {
//         console.log('添加一条性能数据失败');
//         return;
//     }
//     console.log('添加了一条性能数据');
// });

var db = require("./database/util");
// db.userInfo.find({username: 'chua', fields: 'password', pageCur: 2, pageSize: 6}, function(err, person){
// 	if (err) {
// 		return console.log(err);
// 	}
//   	console.log(person);
// })

var user = db.userInfo.insert({
	username: 'chua',
	password: '1123456',
    project: [{
        url: 'www.lcfarm.com',
        uid: 'aaa'
    }]
});