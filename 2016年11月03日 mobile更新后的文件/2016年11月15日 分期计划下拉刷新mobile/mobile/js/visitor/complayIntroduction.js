$(function(){
	
	var request = {};
	
	// ajax请求 -- 公司简介
	CommonUtil.executeAjax("0100004",request,function(data) {
		var complayInfo = data.responseBody.info;
		if (complayInfo) {
			var html = '<div>';
			html += '<div><img src="../../img/banner_gs.jpg" id="photo1" width="100%;"></div>';
  		  	html += '<div class="margin_w_1">';
            html += '<div class="height_1"></div>';
            html += complayInfo.content;
            html += '<div class="height_1"></div>';
            html += '</div>';
            $("#wrapper").html(html);
		}
	}, false);
});