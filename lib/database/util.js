/**
 * @author 陈桦
 * @date 2017-6-13
 * @description 数据库链接公用插件，封装几个常用的数据库操作，其他操作参考mongoose，
    查询详细接口查看：http://www.nodeclass.com/api/mongoose.html#query-js。提供以下功能
 	-重写mongoose数据库增删改查操作接口，提供统一的log记录入口和统一的异常报错处理
	-分页查询
    -最大最小值查询
    -mongoDB数据库连接池
	
    附：mongoose 常用功能
    统计:query.count(opt, fn)

 * @example
 	//用法和mongoose普通用法相同，只不过重写的方法支持更多属性
    var db = require("./database/util");
    db.userInfo.find({username: 'chua', fields: 'password'}, function(err, person){
        if (err) {
            return console.log(err);
        }
        console.log(person);
    })
	@example end

 * @
 */
var DB = require('./init.js');
//增删改查insert、remove、update、find
//注：被[]包含起来的项表示可选项，default表示默认值
var db = DB;
//重写find方法,使用自己的find方法
for(var i in DB){
    db[i].find_back = db[i].find;
    db[i].find = find;
    db[i].insert = insert;
}

function insert(opt, callback){
    //this就是调用的model
    var entity = new this(opt);
    entity.save(function(err) {
        if (err) {
            console.log('添加一条用户数据失败');
            return;
        }
        callback && callback(err, {});
    });
}
function remove(){

}
function update(){

}
/*
 @param table {String:查询的表格，也就是集合}
 @param [fields] {String：指定返回那些内容，使用空格分开} default:'',表示返回文档所有属性。eg:查询用户表格，只需要返回用户名和密码，fields: 'username password'
 @param [onlyOne] {Boolean:是否只查找第一个。true-返回第一个数据,是一个单一对象；false-返回所有查询结果，是一个数组} default:false
 @param [max] {String:查询该字段最大的一个,如果有值，则返回一个单一对象} default:''
 @param [min] {String:查询该字段最小的一个,如果有值，则返回一个单一对象} default:''
 @param [pageCur] {Number:查询第pageCur页,从第1开始计数} default:1
 @param [pageSize] {Number:每页展示pageSize条} default:Number.POSITIVE_INFINITY
*/
function find(opt, callback){
    console.log('in util find');
    var results,sort = {},
        //查询方法
        method = opt.onlyOne? 'findOne': 'find_back',
        fields = opt.fields? opt.fields: '',
        // table = opt.table,
        max = opt.max,
        min = opt.min,
        pageCur = opt.pageCur,
        pageSize = opt.pageSize;
    delete opt.onlyOne;
    delete opt.fields;
    // delete opt.table;
    delete opt.max;
    delete opt.min;
    delete opt.pageCur;
    delete opt.pageSize;
    //this就是调用的model
    results = this[method](opt, fields, function(err, data){/*this[opt.table][method](opt, fields, function(err, data){*/
        if(err){
            console.log(err);
        }
        //如果只取最大最小值，则返回一个单一对象
        if(max || min){
            data = data[0];
        }
        callback && callback(err, data);
    });
    //查询最大的一个
    if(max){
        sort[max] = -1;
        results.sort(sort).limit(1);
    }
    //查询最小的一个
    if(min){
        sort[min] = 1;
        results.sort(sort).limit(1);
    }
    //分页查询
    if(pageCur && pageSize){
        results.skip((pageCur - 1)*pageSize).limit(pageSize);
    }

}
module.exports = db;