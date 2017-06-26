var mongoose = require('mongoose');    //引用mongoose模块
var Schema = mongoose.Schema;
module.exports = {
	//mongoose数据库链接配置
	options:{
		server: {
			auto_reconnect: true,//自动重连
			poolSize: 10//连接池数量
		}
	},
	//数据库文档集合结构
	model:{
		userInfo: {
			username: String,
			password: String,
			project: [{
				domain: String,//项目域名
				uid: String//给项目分配的唯一id
			}]
		},
		performanceInfo: {
			uid: String,
			ip: String,
			networkStandard: String,
			browser: String, 
			telecomOperators: String,
			area: String,
			date: Date,
			url: String,
			firstPaintFinished: Number,
			firstScreenFinished: Number,
			DOMContentLoaded: Number,
			load: Number, 
			DNSTime: Number,
			TCPTime: Number,
			httpReqTime: Number,
			httpResTime: Number,
			performanceTiming: Schema.Types.Mixed,
		    js: [{
		        url: String,
		        responseSize: Number,
		        responseDuration: Number,
		    }],
		    css:  [{
		        url: String,
		        responseSize: Number,
		        responseDuration: Number,
		    }],
		    img: [{
		        url: String,
		        responseSize: Number,
		        responseDuration: Number,
		        width: Number,
		        height: Number
		    }]
		}
	}
}