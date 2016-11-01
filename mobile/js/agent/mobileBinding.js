var mobile = getQueryUrlParamVal("mobile"); // 手机号
var userId = sessionStorage.userId; // 用户ID
$(function(){
	
	// 已绑定
	if (sessionStorage.bind_succeed=='succeed'){
		
		// 调到到绑定页面
		location = 'agentBindingSucceed.html';
	}
	
	// 图形验证码
	pic_yzm();
	
	// 手机号码
	$("#mobile").val(mobile);
	
	// 手机获取验证码
	$(".span_btn_yzm").bind('click',function(){
		// 倒计时
		settime(this);
		
		// 获取验证码
		getValCode('0');
	});
	
	// 收不到短信
	$(".span_txt_org").click(function(){
		// 获取语音验证码
		getValCode('1');
	});
	
	// 是否阅读
	$(".check_blo2").toggle(
			function(){$(this).find("span").attr("class","check_yes2")},
			function(){$(this).find("span").attr("class","check_no2")}
	);
});

// 图形验证码
function pic_yzm() {
	
	var request = {};
	request.width = "130"; // 图片的宽度
	request.height = "60"; // 图片的高度
	
	CommonUtil.executeAjax("0400003",request,function(data){
		$(".span_img_yzm").html('<img src="data:image/png;base64,'+data.responseBody.imageUrl+'" width="100%">');
	},false);
}

//立即綁定提交
function binding(content){
	
	// 手机绑定
	if (content=='mobile') {
		// 图形验证码
		// 输入的验证码
		var m_yzm = trimStr($("#m_yzm").val());
		// 输入的验证码为空的情况
		if (!m_yzm) {
			promt("验证码不能为空");
			return;
		}
		
		// 手机验证码 
		var m_verificationCode = trimStr($("#m_verificationCode").val());
		if (!m_verificationCode) {
			promt("短信验证码不能为空");
			return;
		}
		
		// 阅读
		var ischecked = $(".check_blo2 span").eq(0);
		if (ischecked.hasClass("check_no2")) {
			promt("请勾选阅读信息");
			return;
		}
		
		var request = {};
		request.userId = userId; // 用户ID
		request.phone = mobile; // 手机号码
		request.poVeriCode = m_yzm; // 图形验证码
		request.veriCode = m_verificationCode; // 手机验证码
		
		CommonUtil.executeAjax("0100018",request,function(data) {
			var response = data.responseBody;
			// 验证码发送结果 0发送失败 
			if (response.msgCode=='0') {
				promt(response.msg);
				return;
			} else {
				// 用户信息
				user_content();
			}
		}, false)
	} else if (content=='houtai') {
		
		// 后台绑定
		// 后台验证码
		var ht_zym = trimStr($("#ht_zym").val());
		if (!ht_zym) {
			promt("验证码不能为空");
			return;
		} 
		
		// 阅读
		var ischecked = $(".check_blo2 span").eq(1);
		if (ischecked.hasClass("check_no2")) {
			promt("请勾选阅读信息");
			return;
		}
		
		var request = {};
		request.userId = userId; // 用户ID
		request.veriCode = ht_zym; // 后台验证码
		
		CommonUtil.executeAjax("0200005",request,function(data) {
			var response = data.responseBody;
			// 后台验证结果描述 0:验证失败 1:验证成功
			if (response.msgCode=='0') {
				promt(response.msg);
				return;
			} else {
				// 用户信息
				user_content();
			}
		}, false);
	}
	
}

// 短信绑定完后新增用户信息
function user_content(){
	
	var wx = {};
	wx.openid = 'o6_bmjrPTlm6_2sgVt7hMZOPfL2M';
	wx.nickname = 'young';
	wx.city = '江苏';
	wx.province = '南通';
	wx.headimgurl = 'http://wx.qlogo.cn/mmopen/g3MonUZtNHkdmzicIlibx6iaFqAc56vxLSUfpb6n5WKSYVY0ChQKkiaJSgQ1dZuTOgvLLrhJbERQQ4eMsv84eavHiaiceqxibJxCfHe/0';
	sessionStorage.wxInfo = JSON.stringify(wx);
		
	// 微信用户信息
	var wxInfo = eval('('+sessionStorage.wxInfo+')');
	
	var request = {};
	request.addProvince = wxInfo.province; // 省
	request.addCity = wxInfo.city; // 市
	request.nickName = wxInfo.nickname; // 昵称
	request.photoAddress = wxInfo.headimgurl; // 头像地址
	request.openId = wxInfo.openid; // 微信的openid
	request.userId = sessionStorage.userId; // 用户id
	
	CommonUtil.executeAjax("0200007",request,function(data) {
		var response = data.responseBody;
		// 绑定状态描述 0:绑定失败 1:绑定成功
		if (response.msgCode=='0') {
			promt(response.msg);
			return;
		} else {
			// 绑定成功
			sessionStorage.bind_succeed = 'succeed';
			// 跳转到首页
			location = 'agentBindingSucceed.html';
		}
	}, true);
}

//获取验证码
function getValCode(mode){
	
	var request = {};
	
	request.phone = mobile; // 手机号码
	request.mode = mode; // 生成方式 1语音0短信
	request.userId = sessionStorage.userId; // 用户ID
	
	CommonUtil.executeAjax("0100017",request,function(data) {
		
		var reponse = data.responseBody;
		// 验证码发送结果code 1发送成功0发送失败
		if (reponse.msgCode=='0') {
			promt(reponse.msg);
			return;
		}
	}, false);
}

//验证码倒计时
var countdown=300; 
function settime(obj) { 
    if (countdown == 0) { 
    	// 按钮高亮
    	$(".span_btn_yzm_gray").attr("class","span_btn_yzm");
    	$(".span_btn_yzm").bind('click',function(){
    		// 重新倒计时
    		settime(this);
    	});
        $(obj).html("重发"); // 重新获取验证码
        countdown = 300; // 设置时间
        return;
    } else { 
        $(".span_btn_yzm").unbind('click');
        // 按钮置灰
        $(".span_btn_yzm").attr("class","span_btn_yzm_gray");
        $(obj).html("发送(" + countdown + ")"); 
        countdown--; 
    } 

    setTimeout(function() { 
    	settime(obj);
    }, 1000) 
}