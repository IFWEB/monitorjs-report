var db = require("./database/util"),
	Model = db.userInfo;
//条件查找
// Model.find({username: 'chua', fields: 'password', pageCur: 1, pageSize: 6}, function(err, person){
// 	if (err) {
// 		return console.log(err);
// 	}
//   	console.log(person);
// })

//查找最大的一个,返回的是单一对象
// Model.find({
// 	username: 'chua', 
// 	max: 'password'
// }, function(err, person){
// 	if (err) {
// 		return console.log(err);
// 	}
//   	console.log(person);
// });

//查找最大值集合,返回的是数组
// Model.find({
// 	username: 'chua',
// 	maxAll: 'password'
// }, function(err, person){
// 	if (err) {
// 		return console.log(err);
// 	}
//   	console.log(person);
// });

// //查找最大值集合,但是只返回一个单一对象
// Model.find({
// 	username: 'chua',
// 	maxAll: 'password',
// 	onlyOne: true
// }, function(err, person){
// 	if (err) {
// 		return console.log(err);
// 	}
//   	console.log(person);
// });


//插入
Model.insert({
	username: 'chua',
	password: '1123457',
	project: [{
		domain: 'www.lcfarm.com',//项目域名
		uid: 'aaa'//给项目分配的唯一id
	}]
});

// //统计查询
// Model.count({username: 'chua'}, function(err, person){
// 	if (err) {
// 		return console.log(err);
// 	}
//   	console.log(person);
// })

//删除全部匹配项的第一个
// Model.remove({
// 	username: 'chua',
// 	onlyOne: true
// }, function(err){
// 	if (err) {
// 		return console.log(err);
// 	}
// });

//删除全部匹配项
// Model.remove({
// 	username: 'chua'
// }, function(err, person){
// 	if (err) {
// 		return console.log(err);
// 	}
// });

//修改
// Model.update({
// 	username: 'lijiaxing'
// },{
// 	password: 'sss'
// }, function(err, person){
// 	if (err) {
// 		return console.log(err);
// 	}
// });
// 修改一个
// Model.update({
// 	username: 'lijiaxing',
// 	onlyOne: true
// },{
// 	password: 'mm'
// }, function(err, person){
// 	if (err) {
// 		return console.log(err);
// 	}
// });