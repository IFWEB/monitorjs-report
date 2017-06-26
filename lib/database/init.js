var mongoose = require('mongoose'),    //引用mongoose模块
    dbConfig = require('./db.config.js'),
    dbModels = dbConfig.model,
    config = require('../config'),
	//链接数据库，配置数据库连接池
    db = mongoose.createConnection('mongodb://'+ config.mongodb.host +':'+ config.mongodb.port +'/' + config.mongodb.dbName, dbConfig.options),
    models = {}; 

db.on('error',console.error.bind(console,'连接错误:'));

//建立Schema和model
for(var i in dbModels){
    models[i] = addSchemaAndModel(i, dbModels[i]);
}
function addSchemaAndModel(name, dbConf){
    var schema = new mongoose.Schema(dbConf);
    return db.model(name,schema);
}

module.exports = models;