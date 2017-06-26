/**
<script>
var _monitorjs = {};
(function() {
  var mo = document.createElement("script");
  mo.src = "//www.monitorjs.com/report.js?a041a0f4ff93aef6aa83f34134331a1d";
  mo.setAttribute("name", "MONITORREPORT");
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(mo, s);
})();
</script>
*/
(function(){
	var s = document.getElementsByName('MONITORREPORT'),
		reg = /\/report\.js\?(\w+)/;
	//没有找到
	if(s.length < 1){
		console.log('没有找到上报script标签');
	}else{
		var match = s[0].src.match(reg);
		//添加uid
		if(!_monitorjs){
			window._monitorjs = {};
		}
		_monitorjs.uid = match[1];
		console.log('uid = '+_monitorjs.uid);
	}
})();
//获取属性信息并上报
(function(){
	
})();
