// 判断代理人是否已绑定
$(function(){
	
	// 获取用户code
	var code = getQueryUrlParamVal("code");
	// 获取用户信息
	if (!sessionStorage.userInfo) {
		if (code){ 
			// 获取用户信息
			var request = {};
			// code
			request.code = code;
			// 中文版
			request.language = "zh_CN";
			
			// 请求
			CommonUtil.executeAjax("0400001",request,function(data){
				var response = data.responseBody;
				// 用户信息
				sessionStorage.wxInfo = JSON.stringify(response);
				// 判断当前用户是否已授权
				isAuthority();
			},false);
			
			// 已获取用户信息的flag值
			sessionStorage.userInfo = 'finished';
		} else {
			jAlert("用户授权失败");
		}
	}
	
	// 用户信息
	userInfo();
	
	// 底部按钮选中图标
	var icon = sessionStorage.pic_class;
	if (icon) {
		
		// 判断图标默认选中
		if (icon.indexOf("index_cur") != -1) {
			$(".index_05_foot_div span").eq(0).attr("class",icon);
		} else if (icon.indexOf("customer_cur") != -1) {
			$(".index_05_foot_div span").eq(1).attr("class",icon);
		} else if (icon.indexOf("information_cur") != -1) {
			$(".index_05_foot_div span").eq(2).attr("class",icon);
		} else {
			$(".index_05_foot_div span").eq(3).attr("class",icon);
		}
	}
	
	// 底部按钮
	$(".index_05_foot_div span").click(function(){
		
		// 当前选中图标的样式
		var curClass = $(this).attr("class");
		// 判断图标是否选中
		if (curClass.indexOf("_cur") == -1) {
			$(this).attr("class",curClass +　'_cur');
		}
		// 选中图标的样式
		var pic_class = $(this).attr("class");
		sessionStorage.pic_class = pic_class;
		
		// 循环
		var others = $(".index_05_foot_div span").not($(this)); 
		others.each(function(){
			
			// 去除其他选中的样式
			var otherClass = $(this).attr("class"); 
			if (otherClass.indexOf("_cur") != -1) {
				
				// 去除_cur
				var del_cur = otherClass.substring(0, otherClass.length-4);
				$(this).attr("class",del_cur);
			}
		});
		
		// 根据选中的按钮跳转
		if (pic_class.indexOf("index_cur") != -1) {
			// 首页
			location = 'agentIndex.html';
		} else if (pic_class.indexOf("customer_cur") != -1) {
			// 客户
			location = 'myCustomer.html';
		} else if (pic_class.indexOf("information_cur") != -1) {
			// 信息
			location = 'agentInfoDetail.html';
		}  else {
			// 查询
			location = 'mySearch.html';
		}
	});
});

// 判断当前用户是否已授权
function isAuthority() {
	
	var request = {};
	
	// openid
	var wxInfo = eval('('+sessionStorage.wxInfo+')');
	request.openid = wxInfo.openid;
	
	// 请求
	CommonUtil.executeAjax("0200001",request,function(data){
		var response = data.responseBody;
		// 判断当前用户是否已授权
		if (response.msgCode=='0') {
			jAlert(response.msg,"提示",function(flag){
				if (flag) {
					location = 'agentBinding.html';
				}
			});
		} else if (response.msgCode=='2') {
			// 已绑定
			promt(response.msg);
			return;
		} else {
			// 微信已绑定的信息
			sessionStorage.wxBindInfo = JSON.stringify(response);
			
			// 已授权(跳转到相应页面)
			location = '';
		}
	},false);
}

// 用户信息
function userInfo() {
	
	// 用户姓名
	if (sessionStorage.userName) {
		$("#user_name").html(sessionStorage.userName);
		sessionStorage.userName = '阿鲍';
	} else {
		$("#user_name").html("阿鲍");
	}
	
	// 代理人编号
	if (sessionStorage.dlrNo) {
		$("#dlrNo").html(sessionStorage.dlrNo);
	} else {
		sessionStorage.dlrNo = '00000000009';
		$("#dlrNo").html('00000000009');
	}
} 