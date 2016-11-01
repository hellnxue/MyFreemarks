// 基本信息验证
function f_commit(){
	var userName = trimStr($("#userName").val());
	if (!userName) {
		promt("姓名不能为空");
		return;
	}
	
	var idCard = trimStr($("#idCard").val());
	if (!idCard) {
		promt("身份证号码不能为空");
		return;
	}
	
	var company = trimStr($("#company").val());
	if (!company) {
		promt("所属公司不能为空");
		return;
	}
	
	var jobLevel = trimStr($("#jobLevel").val());
	if (!jobLevel) {
		promt("职级不能为空");
		return;
	}
	
	var monSalary = trimStr($("#monSalary").val());
	if (!monSalary) {
		promt("每月收入不能为空");
		return;
	}
	var request = {};
	request.customerName = userName; // 姓名
	request.idCard = idCard; // 身份证号码
	request.companyName = company; // 所属公司
	request.rank = jobLevel; // 职级
	request.monthlySalary = monSalary; // 月收入
	CommonUtil.executeAjax("0100001",request,function(data) {
		var msgCode = data.responseBody.msgCode;
		// 基本信息是否正确 0:不正确 1:正确
		if (msgCode!='0') {
			promt(data.responseBody.msg);
			return;
		} else {
			location = 'cardValidator.html';
		}
	}, false);
}

//$(function(){
//	var request = {};
//	CommonUtil.executeAjax("0100001",request,function(data) {
//		var msgCode = data.responseBody.msgCode;
//		// 0:正常 1:异常
//		if (msgCode!='0') {
//			promt("查询失败");
//		}
//	}, false);
//});
