$(function(){
	
	// 用户信息
	var wxInfo = eval('('+sessionStorage.wxInfo+')');
	
	// 用户头像
	$(".bdcg_top_tx").html('<img src='+wxInfo.headimgurl+' width="100%"/>');
	
	// 代理人编号
	$(".bdcg_p_bh span").eq(1).html(sessionStorage.userId);
	
	// 微信昵称
	$(".bdcg_p_wx span").eq(1).html(wxInfo.nickname);
	
	// 微信绑定
	var request = {};
	request.openId = wxInfo.openid; // 微信openid
	
	// 请求
	CommonUtil.executeAjax("0200001",request,function(data){
		var response = data.responseBody;
		
		// 绑定状态描述 1:绑定成功/0:绑定失败
		if (response.msgCode == '1') {
			// 微信已绑定的信息
			sessionStorage.wxBindInfo = JSON.stringify(response);
		} else {
			// 提示
			jAlert(response.msg,"提示",function(flag){
				if (flag) {
					// 返回上一页
					location = 'mobileBinding.html';
				}
			});
		}
	},false);
	
	// 跳转到首页
	$(".bdcg_btn_div").click(function(){
		
		// 首页
		location = 'agentIndex.html';
	});
});
