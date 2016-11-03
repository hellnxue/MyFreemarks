$(function(){
	
	var request = {};
	// 获取方案id
	request.schemeId = getQueryUrlParamVal("id");
	
	// 请求
	CommonUtil.executeAjax("0200030",request,function(data){
		var schemeInfo = data.responseBody.schemeInfo;
		if (schemeInfo) {
			// 当前所属公司的所属方案
			var html = '<div>';
			if (schemeInfo.icon) {
				html += '<div id="divpt"><img src="'+schemeInfo.icon+'" id="photo1" width="100%;"></div>';
			} else {
				html += '<div id="divpt"></div>';
			}
			html += '<p class="cpxq_08_title_green">险种特色</p>';
			html += '<div class="margin_w_1 cpxq_08_con">';
			html += '<div class="height_1"></div>';
			html += '<p class="p_txt_green">'+schemeInfo.title+'</p>';
			html += '<p>'+schemeInfo.shortContent+'</p>';
			html += '<div class="height_1"></div>';
			html += '</div>';
			html += '</div>';
			$("#wrapper").append(html);
			myScroll.refresh();
		}
	},false);
	
});
