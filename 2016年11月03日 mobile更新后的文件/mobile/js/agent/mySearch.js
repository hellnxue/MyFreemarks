// 跳转到相应的页面
function forward(info) {
	
	// 佣金预警查询
	if (info == 'yj_search') {
		
		location = 'commissionWarningInquiry.html';
	} else if (info == 'kh_search') {
		
		// 提示信息 
		jAlert("统计数据仅供参考","温馨提示",function(flag){
			if (flag) {
				// 考核预警查询
				location = 'checkWarningInfo.html';
			}
		});
	} else if (info == 'bd_search') {
		
		// 保单查询
		location = 'myPolicy.html';
	} else {
		
		// 方案查询
		location = '';
	}
}