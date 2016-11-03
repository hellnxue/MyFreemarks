$(function(){
	
	// 承保日期起/止
	timepicker("startDate");
	timepicker("endDate");
	
});

// 保单查询
function m_search() {
	
	// 校验
	var name = trimStr($("#name").val());
	var policyNo = trimStr($("#policyNo").val());
	var startDate = $("#startDate").val();
	var endDate = $("#endDate").val();
	if (!name && !policyNo&&
		(!startDate || !endDate)) {
		promt("姓名,保单号,承保日期范围3者必须录入其中1项");
		return;
	}
	
	// 承保日期起/止
	if (startDate&&endDate) {
		
		// 承保日期起大于承保日期止
		if (startDate > endDate) {
			promt("承保日期起不能大于承保日期止");
			return;
		}
		
		// 判断承保日期是否在半年内
		var date1 = new Date(startDate);
		var date2 = new Date(endDate);
		date1.setMonth(date1.getMonth() + 6);
		if (date2 > date1) {
			promt("请选择半年内的承保日期");
			return;
		}
	}
	
	var request = {};
	// 姓名不为空
	if (name) {
		request.name = name;
	}
	
	// 保单号不为空
	if (policyNo) {
		request.policyNo = policyNo;
	}
	
	// 承保日期不为空
	if (startDate&&endDate) {
		// 承保日期起
		request.insuranceStart = startDate;
		// 承保日期止
		request.insuranceEnd = endDate;
	}
	
	var obj = JSON.stringify(request);
	location = 'myPolicyInfo.html?obj='+obj;
}