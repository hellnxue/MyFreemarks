
$(function(){
	//调用接口
	findOffice();
});


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
	var merUserId = localStorage.merUserId;
	var merCode = localStorage.merCode;
	CommonUtil.executeAjax("0100004",request,function(data) {
		var msgCode = data.responseBody.msgCode;
		// 基本信息是否正确 0:不正确 1:正确
		if (msgCode!='0') {
			promt(data.responseBody.msg);
			return;
		} else {
			var obj = JSON.stringify(data.responseBody);
			var desss =  getEncriptParams(obj,"encrypt");
			location = 'withdrawalsResult.html?obj='+desss;
		}
	}, false);
}

function findOffice(){
	var merCode = localStorage.merCode;
	var url = "/emploan/credit/findProducts";
	$.ajax({
		url: url,
		data:{merCode:merCode},
		type:"post",
		cache: false,
		async: true,
		success:function(data){
//			codeList = JSON.parse(JSON.stringify(data));
//			if (codeList&&codeList.length>0) {
//				if(type == 'branch'){
//					var html = '<option>'+"请选择公司名称"+'</option>';
//				}
//				if(type == 'jobLevel'){
//					var html = '<option>'+"请选择职级"+'</option>';
//				}
//				for (var key in codeList) {
//					var code = codeList[key];
//					html += '<option value='+code.codeValue+'>'+code.codeName+'</option>';
//				}
//				$("#" + type).html(html);
//				
//				if(type == 'jobLevel' && $("#jobLevelH4").html()!='请选择职级'){
//					$("#jobLevel option:first").selected;
//					$("#jobLevelH4").html($("#jobLevel option:first").text());
//				}
//			}
		}
	});
}

