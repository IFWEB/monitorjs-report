var mongoose = require('mongoose'),    //引用mongoose模块
    dbConfig = require('./db.config.js'),
    config = require('../config'),
    options = {  
	  server: {
	    auto_reconnect: true,//自动重连
	    poolSize: 10//连接池数量
	  }
	},
	//链接数据库，配置数据库连接池
    db = mongoose.createConnection('mongodb://'+ config.mongodb.host +':'+ config.mongodb.port +'/' + config.mongodb.dbName, options),
    models = {}; 

db.on('error',console.error.bind(console,'连接错误:'));

//建立Schema和model
for(var i in dbConfig){
    models[i] = addSchemaAndModel(i, dbConfig[i]);
}
function addSchemaAndModel(name, dbConf){
    var schema = new mongoose.Schema(dbConf);
    return db.model(name,schema);
}

module.exports = models;