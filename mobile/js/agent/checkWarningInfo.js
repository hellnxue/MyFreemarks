$(function(){
	
	// 维持考核/晋升考核
	var request = {};
	// 代理人编号
	request.agentCode = sessionStorage.dlrNo;
	// 考核类型
	request.assessmentType = '1' // 维持考核
	
	// ajax请求
	CommonUtil.executeAjax("0200017",request,function(data){
		var response = data.responseBody;
		// 考核时间
		$(".top_p_time").html("考核时间："+response.startDate+"至"+response.endDate);
		
		var assessmentItemList = response.assessmentItemList;
		if (assessmentItemList&&assessmentItemList.size>0) {
			// 考核项目列表
			var html = '';
			for (var key in assessmentItemList) {
				var item = assessmentItemList[key];
				html += '<div class="bdmx_19_div">';
				html += '<div class="title_fjxlb">'+item.name+'<span class="float_r txt_gray">单位（元）</span></div>';
				html += '<div class="wckh_23_con_table">';
				html += '<div class="one_cell_div">';
				html += '<p>目标</p>';
				html += '<p class="p_txt_fraction txt_red">'+item.target+'</p>';
				html += '</div>';
				html += '<div class="two_cell_div">';
				html += '<p>已完成</p>';
				html += '<p class="p_txt_fraction txt_org">'+item.completed+'</p>';
				html += '</div>';
				html += '<div class="three_cell_div">';
				html += '<p>差额</p>';
				html += '<p class="p_txt_fraction">'+item.difference+'</p>';
				html += '</div>';
				html += '</div>';
				html += '</div>';
				html += '<div class="height_05"></div>';
			}
			$("#divTab1").html(html);
			myScroll.refresh();
		}
	},false);
	
	// 晋升考核
	// 考核类型
	request.assessmentType = '2' // 晋升考核
	
	// ajax请求
	CommonUtil.executeAjax("0200017",request,function(data){
		var assessmentItemList = data.responseBody.assessmentItemList;
		if (assessmentItemList&&assessmentItemList.size>0) {
			// 考核项目列表
			var html = '';
			for (var key in assessmentItemList) {
				var item = assessmentItemList[key];
				html += '<div class="bdmx_19_div">';
				html += '<div class="title_fjxlb">'+item.name+'<span class="float_r txt_gray">单位（元）</span></div>';
				html += '<div class="wckh_23_con_table">';
				html += '<div class="one_cell_div">';
				html += '<p>目标</p>';
				html += '<p class="p_txt_fraction txt_red">'+item.target+'</p>';
				html += '</div>';
				html += '<div class="two_cell_div">';
				html += '<p>已完成</p>';
				html += '<p class="p_txt_fraction txt_org">'+item.completed+'</p>';
				html += '</div>';
				html += '<div class="three_cell_div">';
				html += '<p>差额</p>';
				html += '<p class="p_txt_fraction">'+item.difference+'</p>';
				html += '</div>';
				html += '</div>';
				html += '</div>';
				html += '<div class="height_05"></div>';
			}
			$("#divTab2").html(html);
			myScroll.refresh();
		}
	},false);
});