var mongoose = require('mongoose'),    //引用mongoose模块
    dbConfig = require('./db.config.js'),
    config = require('../config'),
    db = mongoose.createConnection('mongodb://'+ config.mongodb.host +':'+ config.mongodb.port +'/' + config.mongodb.dbName),
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

// //用户信息
// var userInfoSchema = new mongoose.Schema(dbConfig.userInfo);
// //页面性能数据
// var performanceSchema = new mongoose.Schema(dbConfig.performanceInfo);

// var userInfo = db.model('userInfo',userInfoSchema);
// var performance = db.model('performance',performanceSchema);
// //如果该Model已经发布，则可以直接通过名字索引到，如下：
// //var performance = db.model('performance');

// module.exports = {
//     userInfo: userInfo,
//     performanceInfo: performance
// }
module.exports = models;