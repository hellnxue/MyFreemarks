var myScroll,total;
var pageIndex = 1;
$(function(){
	
	// 活动
	if (myScroll)
		myScroll.destory();
	myScroll = new iScroll('wrapper',{ hScrollbar: false, vScrollbar: false,onScrollEnd:pullTo});
	
	// 最新活动
	activityInfo(pageIndex)
	
});

// 最新活动
function activityInfo(pageIndex) {
	
	var request = {};
	// 起始页码
	request.currentPage = pageIndex;
	// 活动类型 1：活动，2：赠险
	request.type = '1';
	
	// ajax请求 
	CommonUtil.executeAjax("0100010",request,function(data) {
		var response = data.responseBody;
		// 总公司活动信息集合
		var activeInfoList = response.activeInfoList;
		if (activeInfoList&&activeInfoList.length>0) {
			
			// 总页数
			total = response.total;
			// 遍历集合
			for (var key in activeInfoList) {
				var activeInfo = activeInfoList[key];
				var html = '<div class="height_1"></div>';
				html += '<div class="bg_white zxhd_08_con_ div">';
				html += '<div><img src="'+activeInfo.shareIcon+'"></div>';
				html += '<div class="height_1"></div>';
				html += '<span class="btn_w_org width_wio_100" onclick="activityDetail('+activeInfo.id+');">立即参与</span>';
				html += '</div>';
			}
			$("#activity").append(html);
		}
	}, false);
}

//跳转到方案明细
function activityDetail(id){
	
	location = 'activityDetail.html?id='+id;
}

// 分页
function pullTo(){
	if(this.y<=this.maxScrollY){
		pageIndex++;
		if(pageIndex<=total){
			activityInfo(pageIndex);
		}
	}
}