// 基本信息验证
function f_commit(){
	var withdrawAmount = trimStr($("#withdrawAmount").val());
	if (!withdrawAmount) {
		promt("提现金额不能为空");
		return;
	}
	
	var loanPurpose = $("#loanPurpose").val();
	if (loanPurpose==null ||loanPurpose=="") {
		promt("贷款用途必须选择");
		return;
	}
	
//	var repaymentMethod = $("#repaymentMethod").val();
//	if (repaymentMethod==null ||repaymentMethod=="") {
//		promt("还款方式必须选择");
//		return;
//	}
	
	var repaymentTerm = $("#repaymentTerm").val();
	if (repaymentTerm==null ||repaymentTerm=="") {
		promt("还款期限必须选择");
		return;
	}
	
	var chargeRate = trimStr($("#chargeRate").val());
	if (!chargeRate) {
		promt("手续费率不能为空");
		return;
	}
	
	var repayDate = trimStr($("#repayDate").val());
	if (!repayDate) {
		promt("还款日期不能为空");
		return;
	}
	
	var monRepayAmount = trimStr($("#monRepayAmount").val());
	if (!monRepayAmount) {
		promt("月利率不能为空");
		return;
	}
	
	var request = {};
	request.orderAmount = withdrawAmount; // 订单金额
	request.consumeMode = loanPurpose; // 贷款用途
	request.totalInstallments = repaymentTerm; // 贷款期限
	request.createdOrderTime = repayDate; // 还款日期
	request.monthService = monRepayAmount; // 月还款
	request.merCode = "001"; // 商户号
	CommonUtil.executeAjax("0100004",request,function(data) {
		var msgCode = data.responseBody.msgCode;
		// 基本信息是否正确 0:不正确 1:正确
		if (msgCode!='0') {
			promt(data.responseBody.msg);
			return;
		} else {
			location = 'withdrawalsResult.html';
		}
	}, false);
}


