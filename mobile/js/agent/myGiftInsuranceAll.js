var total;
var currentPage = "1";
$(function(){
	getGiftInsurance();
	if (myScroll)
		myScroll.destory();
	myScroll = new iScroll('wrapper',{ hScrollbar: false, vScrollbar: false,onScrollEnd:hc_pullTo});
});

function goDetail(url){
	window.location.href = url;
}

function hc_pullTo(){
	if(this.y<=this.maxScrollY){
		currentPage++;
		if(currentPage<=total){
			getGiftInsurance();
		}
	}
}

function getGiftInsurance(){
var request = {};
	
	// 代理人编号
	request.userId = sessionStorage.dlrNo;
	// 状态
	request.type = "2";
	
	request.getType = "1";
	
	request.currentPage = currentPage;
	
	request.orgCode = sessionStorage.orgCode;
	
	request.level = sessionStorage.orglevel;
	//测试
	request.userId = 1;
	request.pageNum = 10;
	request.orgCode = 1;
	request.level = 1;
	//测试结束
	CommonUtil.executeAjax("0200021",request,function(data) {
		var activityList = data.responseBody.activityList;
		total = data.responseBody.total;
		if (activityList&&activityList.length>0) {
			var html ="" ;
			for (var key in activityList) {
				var code = activityList[key];
				
				html += '<div class="height_05"></div>';
				html += '<div class="cplb_07_con_bg" onclick="goDetail('+code.visitUrl+')">';
				html += '<div class="cplb_07_con_bg_div">';
				html += '<div class="left_img">';
				html += '<img src="'+code.shareIcon+'">';
				html += '</div>';
				html += '<div class="middle_con">';
				html += '<p class="p_txt">'+code.title+'</p>';
				html += '<p class="p_txt_gray">'+code.shareContent+'</p>';
				html += '</div>';
				html += '<div class="right_next" ><span></span></div>';
				html += '</div>';
				html += '</div>';
			}
			$("#insuranceDiv").append(html);
		} else {
			promt("未加载到赠险信息");
		}
	}, false);
}