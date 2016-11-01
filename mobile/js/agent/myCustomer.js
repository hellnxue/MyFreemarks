$(function(){
	// 创建日期起/止
	timepicker("startDate");
	timepicker("endDate");
});

// 客户查询
function search_customer(){
	
	// 校验
	if (trimStr($("#name").val())=='') {
		promt("姓名不能为空");
		return;
	}
	
	// 手机号码
	var mobile = $("#mobile").val();
	if (mobile.length!=11 ||
			!CommonUtil.getMobilePhone(mobile)) {
		promt("手机号码不正确");
		return;
	}
	
	// 来源
	if (trimStr($("#source").val())=='') {
		promt("来源不能为空");
		return;
	}
	
	// 客户等级
	if (trimStr($("#custLevel").val())=='') {
		promt("客户等级不能为空");
		return;
	}
	
	// 创建日期起/止
	var startDate = $("#startDate").val();
	var endDate = $("#endDate").val();
	// 创建日期起或者止为空的情况
	if (!startDate || !endDate) {
		promt("创建日期不能为空");
		return;
	} else {
		// 创建日期起或者止不为空的情况
		// 创建日期起大于创建日期止的情况
		if (startDate > endDate) {
			promt("创建日期起不能大于创建日期止");
			return;
		}
		
		// 二者时间不能超过一个月
		
	}
	var customerReqVO = {};
	var customerReq = {};
	customerReq.customerReqVO = customerReqVO;
	CommonUtil.executeAjax("0200014",customerReq,function(data) {
		
	}, false);
	 
}