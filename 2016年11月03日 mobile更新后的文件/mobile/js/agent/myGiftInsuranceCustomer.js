var total;
var currentPage = getParam("currentPage");
$(function(){
	if (myScroll)
		myScroll.destory();
	myScroll = new iScroll('wrapper',{ hScrollbar: false, vScrollbar: false,onScrollEnd:hc_pullTo});
	
	getCustomer();
	
});

function goDetail(url){
	window.location.href = url;
}

function hc_pullTo(){
	if(this.y<=this.maxScrollY){
		currentPage++;
		if(currentPage<=total){
			getCustomer();
		}
	}
}

function getCustomer(){
var request = {};
	
	// 代理人编号
	request.userId = sessionStorage.dlrNo;
	
	// 状态(1。赠险，2。活动)
	request.type = getParam("type");
	
	//活动ID从URL中获取
	request.activityId = getParam("activityId");
	
	request.cusType = 0;
	
	request.currentPage = currentPage;
	var tabId;
	if($("1span").hasClass("span_cur")){
		request.custType = 0;
		tabId = 1;
	}else{
		request.custType = 1;
		tabId = 2;
	}
	
	
	//测试用数据
//	request.userId = 1;
//	request.activityId = ;
//	request.type = 0;
	//测试完毕
	CommonUtil.executeAjax("0200023",request,function(data) {
		var customerList = data.responseBody.customerList;
		total = data.responseBody.total;
		if (customerList&&customerList.length>0) {
			var html ="";
				for (var key in customerList) {
					var code = customerList[key];
					html += '<div class="height_05"></div>';
					html += '<div class="cxjg_10_con_div" onclick="goPerson('+code.custId+','+request.custType+')">';
					html += '<span class="icon_next_span"></span>';
					html += '<span class="p_37img"><img src="'+code.headUrl+'" width="100%"></span>';
					html += '<span class="p_37name">'+code.custName+'</span>';
					if(tabId==0){
						html += '<span class="txt_gray">'+code.pickuptime+'</span>';
					}else{
						html += '<span class="txt_gray">'+code.phone+'</span>';
						html += '<strong class="txt_gray">'+code.nickName+'</strong>';
					}
					html += '</div>  ';
				}
			
			$("#divTab"+tabId).append(html);
			myScroll.refresh();
		} else {
			promt("系统异常，请稍后再试！");
		}
	}, false);
}

function goPersonDetail(custId,custType){
	if(!custId) return;
	window.location.href = "myGiftInsuranceCustomerDetail.html?custId="+custId+"&custType="+custType;
}

