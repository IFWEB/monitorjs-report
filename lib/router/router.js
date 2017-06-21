var path = require('path');

module.exports = function(app, options) {
	//接口请求分发处理
	app.all('/*', function() {
		var reg = {
			htm: /\S+\.htm$/
		};

		var basePath = './';
		var filePath = reg.htm.replace(/(\S+)\.htm$/, '$1');
		require(path.resolve(__dirname, basePath + filePath));
	});
}