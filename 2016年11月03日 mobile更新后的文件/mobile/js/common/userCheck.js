// 判断用户是否已绑定
$(function(){
	//判断是否已注册
	isRegiste();
});


function isRegiste(){
	//alert("localStorage.merUserId="+localStorage.merUserId);
	if (localStorage.merUserId && localStorage.merCode) {
		return;
	}
	
	//获取参数
	var checkobj = getQueryUrlParamVal("obj");
	if(checkobj){
		//解密
		var checkdesss =  getEncriptParams(checkobj,null);
		if(checkdesss){
			var checkneedAddLocalStorage =  checkdesss.needAddLocalStorage;
			if(checkneedAddLocalStorage){
				//判断用户是否正确
				//isAuthority();
				localStorage.merUserId = checkdesss.merUserId;
				localStorage.merCode = checkdesss.merCode;
			}
		}
	}
	
	// 获取用户信息
	if (!localStorage.merUserId || !localStorage.merCode) {
		CommonUtil.showLoading();
		jAlert("对不起，该用户未登陆授权！");
	}
}

// 判断当前用户是否已授权
function isAuthority() {
	
	var request = {};
	
	//var wxInfo = eval('('+sessionStorage.wxInfo+')');
	//request.openid = wxInfo.openid;
	var localMerUserId = localStorage.merUserId ;
	var localMerCode = localStorage.merCode
	
	request.merUserId = localMerUserId;
	request.merCode = localMerCode;
	
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
			localStorage.wxBindInfo = JSON.stringify(response);
			// 已授权(跳转到相应页面)
			location = '';
		}
	},false);
}

