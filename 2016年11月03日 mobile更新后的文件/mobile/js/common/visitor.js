// 判断代理人是否已绑定
$(function(){
	// 获取用户code
	var code = getQueryUrlParamVal("code");
	// 获取用户信息
	if (sessionStorage.userInfo) {
		if (code){ 
			// 获取用户信息
			var request = {};
			// code
			request.code = code;
			// 中文版
			request.language = "zh_CN";
			
			// 请求
			CommonUtil.executeAjax("0400001",request,function(data){
				// 访问信息
				visitorInfo(data.responseBody);
			},false);
			
			// 已获取用户信息的flag值
			sessionStorage.userInfo = 'finished';
		} else {
			jAlert("用户授权失败");
		}
	}
});

// 记录访问信息
function visitorInfo(info) {
	
	var request = {};
	// 用户头像
	request.headimgurl = info.headimgurl;
	// 用户昵称
	request.nickname = info.nickname;
	// openid
	request.openid = info.openid;
	
	var agentName = agentName().split(",");
	// pc/移动端
	request.pcOrphone = agentName[1];
	// 浏览器名称
	request.browser = agentName[0];
	
	// 请求
	CommonUtil.executeAjax("0400009",request,function(data){
	},false);
}

// 浏览器名称
function agentName() {
	
	var agentName = '';
	var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
	//判断是否Opera浏览器
	var isOpera = userAgent.indexOf("Opera") > -1;
	if (isOpera) {
		agentName = 'Opera';
	}
	
	//判断是否Firefox浏览器
	if (userAgent.indexOf("Firefox") > -1) {
		agentName = 'Firefox';
	} 
	
	//判断是否Chrome浏览器
	if (userAgent.indexOf("Chrome") > -1){
		agentName = 'Chrome';
	}
	
	//判断是否Safari浏览器
	if (userAgent.indexOf("Safari") > -1) {
		agentName = 'Safari';
	} 
	
	//判断是否IE浏览器
	if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
		agentName = 'IE';
	}
	
	// 判断是否为pc端或移动端
	var agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
	var flag = false;
	for (var i=0;i<agents.length;i++) {  
       if (userAgent.indexOf(agents[i]) > 0) {
    	   flag = true;
    	   break; 
       } 
	}
	
	// 根据flag的值判断是pc端or移动端
	if (flag) {
		agentName = agentName + ',移动端';
	} else {
		agentName = agentName + ',PC';
	}
	return agentName;
}