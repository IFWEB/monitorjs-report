var mongoose = require('mongoose');    //引用mongoose模块
var Schema = mongoose.Schema;
module.exports = {
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