// 银行卡验证
function f_commit(){
	
	var userName = trimStr($("#userName").val());
	if (!userName) {
		promt("提现金额不能为空");
		return;
	}
	
	var bank = trimStr($("#bank").val());
	if (!bank) {
		promt("银行不能为空");
		return;
	}
	
	var cardNo = trimStr($("#cardNo").val());
	if (!cardNo) {
		promt("卡号不能为空");
		return;
	}
	
	var mobile = trimStr($("#mobile").val());
	if (!mobile) {
		promt("手机号码不能为空");
		return;
	}
	
	var request = {};
	request.userName = userName; // 姓名
	request.bank = bank; // 银行
	request.cardNo = cardNo; // 卡号
	request.mobile = mobile; // 手机号
	
	CommonUtil.executeAjax("YX0100002",request,function(data) {
		var msgCode = data.responseBody.msgCode;
		// 银行卡是否正确 0:不正确 1:正确
		if (msgCode=='0') {
			promt("银行卡信息不正确，请重新输入");
			return;
		} else {
			// 跳转到投保须知页面
			location = 'documentUpload.html';
		}
	}, false);
}