$(function(){
	//获取参数
	var content = getQueryUrlParamVal("obj");
	//解密
	if(content){
		var desss =  getEncriptParams(content,null);
		//加载产品
		if(desss.productCode){
			$("#productCode").val(desss.productCode);
		}else{
			var product = findProducts(merCode);
			$("#productCode").val(product.productCode);
		}
	}
	
	//获取当前商户用户信息
	if(user){
		var merCode = user.merCode;
		var merUserId = user.merUserId;
		var mobileNo = user.mobileNo;
		
		if(merCode){
			$("#merCode").val(merCode);
		}
		if(merUserId){
			$("#merUserId").val(merUserId);
		}
		if(mobileNo){
			$("#mobileNo").val(mobileNo);
		}
	}else{
		CommonUtil.showLoading();
		jAlert("对不起，该用户为未授权用户，请检测您的登陆账号！");
	}
});

//发送短信验证信息
function sendVerifyCode(mobileNo) {
	var phoneNumber = $("#mobileNo").val();
	if (phoneNumber == '' || phoneNumber == null) {
		alert("请输入手机号码");
		return;
	}
	var merCode = user.merCode;
	var merUserId = user.merUserId;
	$.ajax({
		type : "post",
		url : '/emploan/crmSmsInfo/sendMessage',
		data : {"merCode":merCode,
			    "merUserId":merUserId,
			    "mobileNo":phoneNumber},
		success : function(msg) {

		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert('服务器繁忙');
		}
	});
}

// 银行卡验证
function f_commit(bt){
	
	commitCheck(bt,1000);
	
/*	var cardBank = trimStr($("#cardBank").val());
	if (!cardBank) {
		promt("银行不能为空");
		return;
	}*/
	
	//短信验证码校验
	var verifyCode = trimStr($("#verifyCode").val());
	if (!verifyCode) {
		promt("短信验证码不能为空");
		return;
	}
	
	//卡号校验
	var cardNo = trimStr($("#cardNo").val());
	if (!cardNo || CommonUtil.checkNumber(cardNo)) {
		promt("卡号输入不正确！");
		return;
	}
	//手机号校验校验
	var mobileNo = trimStr($("#mobileNo").val());
	if (!mobileNo || !CommonUtil.getMobilePhone(mobileNo)) {
		promt("手机号码输入不正确！");
		return;
	}
	
	var productCode = trimStr($("#productCode").val());
	if (!productCode) {
		promt("未加载到产品相关信息");
		return;
	}
	var request = {};
	// 银行
	/*request.bank = cardBank; */	
	request.cardNo = cardNo; // 卡号
	request.mobileNo = mobileNo; // 手机号
	request.merUserId = user.merUserId; // 商户用户id
	request.merCode = user.merCode; // 商户号
	request.productCode = productCode;//产品编号
	request.verifyCode = verifyCode ;// 短信验证码
	CommonUtil.executeAjax("0100002",request,function(data) {
		var msgCode = data.responseBody.msgCode;
		// 银行卡是否正确 0:不正确 1:正确
		if (msgCode != '0') {
			promt(data.responseBody.msg);
			return;
		} else {
			// 跳转到投保须知页面
			var obj = JSON.stringify(data.responseBody);
			var desss =  getEncriptParams(obj,"encrypt");
			location = 'documentUpload.html?obj='+desss;
		}
	}, false);
}