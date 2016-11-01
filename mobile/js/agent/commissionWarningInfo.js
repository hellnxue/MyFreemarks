var content;
$(function(){
	
	// 获取参数
	content = eval('('+getQueryUrlParamVal("content")+')');
	
	var request = {};
	// 代理人编号
	request.agentCode = content.agentCode;
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
			html += '<div class="height_05 bg_gray"></div>';
			html += '<div class="bdmx_19_div zx_38_con_div_b">';
			html += '<p class="title_fjxlb">佣金项目</p>';
			for (var key in commisionList) {
				html += '<div class="con_top">';
				html += '<div>保单项目佣金一<span class="txt_org">5,032<i class="font_st_n txt_org font_s_09">元</i></span></div>';
				html += '</div>';
			}
			html += '</div>';
			html += '<div class="height_3"></div>';
			html += '<div class="margin_w_1">';
			html += '<span class="btn_org width_wio_100" onclick="bdDetail();">保单详情</span>';
			html += '</div>';
			html += '<div class="height_05"></div>';
			html += '</div>';
			$("#wrapper").html(html);
			myScroll.refresh();
		} else {
			
			// 提示
			jAlert("暂无保单详情","提示",function(flag){
				if (flag) {
					// 返回上一页
					location = 'commissionWarningInquiry.html';
				}
			});
		}
	},false);
	
});

// 保单详情
function bdDetail(){
	
	location = 'commissionWarningDetail.html?detail='+content;
}
