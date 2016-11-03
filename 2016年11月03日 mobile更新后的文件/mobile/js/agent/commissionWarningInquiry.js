// 佣金预警查询
function c_search(info) {
	
	// 结算/未结算
	var status;
	// 获取当前年/月
	var date = new Date();
	var curYear = date.getFullYear();
	var curMonth = date.getMonth() + 1;
	// 最近三个月
	var curCommisionMonth;
	var commisionMonth;
	if (info == 'lastest') {
		
		// 已结算
		status = '1';
		// 佣金月
		$(".yjys_14_table_dx p").each(function(){
			// 判断选中几月份
			if ($(this).hasClass("p_dx_cur")) {
				// 选中的月份
				var s_month = $(this).html().substring(0,1);
				if (s_month == '1') {
					curCommisionMonth = curMonth - 1;
				} else if (s_month == '2') {
					curCommisionMonth = curMonth - 2;
				} else {
					curCommisionMonth = curMonth - 3;
				}
			}
		});
		
		// 佣金月小于10,前面添加0
		if (curCommisionMonth < 10) {
			curCommisionMonth = "0" + curCommisionMonth;
		}
		// 当前选中的佣金年月
		commisionMonth = curYear + curCommisionMonth;
	} else {
		
		// 未结算
		status = '0';
		// 佣金月
		commisionMonth = $("#c_month").val();
	}
	
	var request = {};
	// 代理人编号
	request.agentCode = sessionStorage.dlrNo;
	// 状态
	request.status = status;
	// 佣金月
	request.commisionMonth = commisionMonth;
	// 转换成json串
	var content = JSON.stringify(request);
	
	// 跳转到保单详情页面
	location = 'commissionWarningInfo.html?content='+content;
} 
