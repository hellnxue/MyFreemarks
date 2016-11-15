$(function(){
	
	// 获取参数
	var content = eval('('+getQueryUrlParamVal("content")+')');
	
	// 保单明细
	var request = {};
	// 代理人编号
	request.agentId = content.agentId;
	// 状态
	request.status = content.status;
	// 佣金月
	request.commisionMonth = content.commisionMonth;
	
	// 请求
	CommonUtil.executeAjax("0200016",request,function(data){
		// 保单详情
		var commisionList = data.responseBody.commisionList;
		if (commisionList&&commisionList.length>0) {
			var html = '<div>';
			for (var key in commisionList) {
				html += '<div class="height_05"></div>';
				html += '<div class="bdmx_19_div">';
				html += '<p class="title_yjy">佣金月：2016年1月</p>';
				html += '<div class="con_top">';
				html += '<div>保单号：90005456845687238<span class="txt_org">保费：8,000元</span></div>';
				html += '</div>';
				html += '<div class="bdmx_con_rq">';
				html += '<p class=" height_1"></p>';
				html += '<table class="bdmx_table">';
				html += '<tr>';
				html += '<td width="1%">回执日期：</td>';
				html += '<td>2015-04-15</td>';
				html += '<th>回访日起：</th>';
				html += '<td width="1%">2015-05-15</td>';
				html += '</tr>';
				html += '<tr>';
				html += '<td width="1%">回销日期：</td>';
				html += '<td>2015-04-15</td>';
				html += '<th>犹 豫 期 ：</th>';
				html += '<td width="1%">2015-04-15</td>';
				html += '</tr>';
				html += '</table>';
				html += '<p class=" height_1"></p>';
				html += '</div>';
				html += '</div>';
			}
		}
		$("#wrapper").html(html);
		myScroll.refresh();
	},false);
});