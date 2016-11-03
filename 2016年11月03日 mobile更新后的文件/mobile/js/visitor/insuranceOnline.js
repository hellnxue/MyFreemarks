$(function(){
	
	// 从保单详情中返回
	if (getQueryUrlParamVal("back") == 'policyDetailInfo') {
		
		// 去除卡单激活式样
		$(".kdjh_01_top_h div:eq(0)").attr("class","kdjh_01_top_div_new1");
		// 第一个层隐藏
		$("#list1").hide();
		// 卡单查询事件触发
		$(".kdjh_01_top_h div:eq(1)").attr("class","kdjh_01_top_div2");
		// 第二个层隐藏
		$("#list2").show();
	}
	
	// tab切换
	// 卡单激活
	$(".kdjh_01_top_h div:eq(0)").click(function(){
		$(this).attr("class","kdjh_01_top_div1");
		$("#list1").show();
		$(".kdjh_01_top_h div:eq(1)").attr("class","kdjh_01_top_div_new2");
		$("#list2").hide();
	});
	
	// 卡单查询
	$(".kdjh_01_top_h div:eq(1)").click(function(){
		$(this).attr("class","kdjh_01_top_div2");
		$("#list1").hide();
		$(".kdjh_01_top_h div:eq(0)").attr("class","kdjh_01_top_div_new1");
		$("#list2").show();
	});
	
	// 卡单激活中的保险卡卡号清除
	$("#f_icon").click(function(){
		$("#f_insuranceCard").val("");
	});
	
	// 卡单查询中的保险卡卡号清除
	$("#s_icon").click(function(){
		$("#s_insuranceCard").val("");
	});
});


// 卡单激活
function f_commit(){
	
	// 保险卡卡号
	var f_insuranceCard = trimStr($("#f_insuranceCard").val());
	if (!f_insuranceCard) {
		promt("保险卡卡号不能为空");
		return;
	}
	
	// 保险卡密码
	var f_insurancePassword = trimStr($("#f_insurancePassword").val());
	if (!f_insurancePassword) {
		promt("保险卡密码不能为空");
		return;
	}
	
	var request = {};
	request.insuranceCardNo = f_insuranceCard; // 保险卡卡号
	request.insurancePassword = f_insurancePassword; // 保险卡密码
	
	CommonUtil.executeAjax("0100001",request,function(data) {
		var msgCode = data.responseBody.msgCode;
		// 卡号是否正确 0:不正确 1:正确
		if (msgCode=='0') {
			promt("卡号或密码不正确，请重新输入");
			return;
		} else {
			// 跳转到投保须知页面
			location = 'insuranceNotice.html';
		}
	}, false);
}

// 卡单查询
function s_commit(){
	
	// 保险卡卡号
	var s_insuranceCard = trimStr($("#s_insuranceCard").val());
	if (!s_insuranceCard) {
		promt("保险卡卡号不能为空");
		return;
	}
	
	// 保险卡密码
	var s_insurancePassword = trimStr($("#s_insurancePassword").val());
	if (!s_insurancePassword) {
		promt("保险卡密码不能为空");
		return;
	}
	
	// 被保险人证件号码
	var s_cardNo = trimStr($("#s_cardNo").val());
	if (!s_cardNo) {
		promt("被保险人证件号码不能为空");
		return;
	}
	
	var request = {};
	request.insuranceCardNo = s_insuranceCard; // 保险卡卡号
	request.insurancePassword = s_insurancePassword; // 保险卡密码
	request.insuredIdentityNo = s_cardNo;
	
	CommonUtil.executeAjax("0100003",request,function(data) {
		var response = data.responseBody;
		// 卡号是否正确 0:不正确 1:正确
		if (response.msgCode=='0') {
			promt("卡号或密码不正确，请重新输入");
			return;
		} else {
			// 保单基本信息
			var policyInfo = JSON.stringify(response.policyInfo);
			// 被保人信息
			var insuredInfo = JSON.stringify(response.insuredInfo);
			// 受益人信息
			var beneficiaryInfo = JSON.stringify(response.beneficiaryInfo);
			// 投保人信息
			var policyHolderInfo = JSON.stringify(response.policyHolderInfo);
			// 参数
			var param = 'policyInfo='+policyInfo+"&insuredInfo="+insuredInfo+"&beneficiaryInfo="+beneficiaryInfo+"&policyHolderInfo"+policyHolderInfo;
			// 跳转到保单详情页面
			location = 'policyDetailInfo.html?'+param;
		}
	}, false);
}