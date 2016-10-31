var pageIndex=1,total,myScroll;
$(function(){
	 
		if (myScroll){
		  myScroll.destory();
		}
		
	myScroll = new iScroll('wrapper',{ hScrollbar: false, vScrollbar: false,onScrollEnd:pullTo});
	
	// 保单信息
	// 默认第一页
	//policyInfo();
});

//分页
function pullTo(){
	
	if(this.y<=this.maxScrollY){
		
		/*pageIndex++;
		if(pageIndex<=total){
			policyInfo();
		}*/
		 alert("hello");
		 policyInfo();
	}
}

// 保单信息
function policyInfo() {
	  
	    
		var   html;
		html= '<div class="height_05"></div>';
				html += '<div class="bdlb_21_div"  >';
				html += '<p  class="titile_p">start<span>'+(pageIndex++)+'</span></p>';
				html += '<div class="bdlb_21_div_con">';
				html += '<p class="height_1"></p>';
				html += '<p>1111111：'+2+'</p>';
				html += '<div class="div_f_w45">2222222222222：'+3+'</div>';
				html += '<div class="div_f_w55">被保人姓名：'+4+'</div>';
				html += '<div class="div_f_w45">保单状态：'+5+'</div>';
				html += '<div class="div_f_w55">ddddddddddddddd：'+6+'</div>';
				html += '<p class="height_1"></p>';
				html += '</div>';
				html += '</div>';
				 
				 
			  
			 
			 
			$("#wrapper > div").append(html);
			 
			myScroll.refresh();
	
	// 获取参数
	/*var policyContent = eval('('+getQueryUrlParamVal("obj")+')');
	
	var request = {};
	// 姓名
	if (policyContent.name) {
		request.name = policyContent.name;
	}
	// 保单号
	if (policyContent.policyNo) {
		request.policyNo = policyContent.policyNo;
	}
	// 承保日期起
	if (policyContent.insuranceStart && policyContent.insuranceEnd) {
		request.insuranceStart = policyContent.insuranceStart;
		// 承保日期止
		request.insuranceEnd = policyContent.insuranceEnd;
	}
	// 起始页码
	request.currentPage = pageIndex;*/
	
	/*// 请求
	CommonUtil.executeAjax("0200018",request,function(data){
		var response = data.responseBody;
		var policyList = response.policyList;
		if (policyList&&policyList.size>0) {
			// 总页数
			total = response.total;
			// 所有保单
			var html = '<div>';
			for (var key in policyList) {
				var policy = policyList[key];
				html += '<div class="height_05"></div>';
				html += '<div class="bdlb_21_div" onclick="policyDetail('+policy.policyNo+')">';
				html += '<p  class="titile_p">保单号<span>'+policy.policyNo+'</span></p>';
				html += '<div class="bdlb_21_div_con">';
				html += '<p class="height_1"></p>';
				html += '<p>保单名称：'+policy.policyName+'</p>';
				html += '<div class="div_f_w45">投保人姓名：'+policy.insurer+'</div>';
				html += '<div class="div_f_w55">被保人姓名：'+policy.insured+'</div>';
				html += '<div class="div_f_w45">保单状态：'+policy.status+'</div>';
				html += '<div class="div_f_w55">承保日期：'+policy.effectiveDate+'</div>';
				html += '<p class="height_1"></p>';
				html += '</div>';
			}
			html += '</div>';
			$("#wrapper").append(html);
			myScroll.refresh();
		} else {
			
			// 提示
			jAlert("暂无保单","提示",function(flag){
				if (flag) {
					// 返回上一页
					location = 'myPolicy.html';
				}
			});
		}
	},false);*/
} 

// 跳转到保单详细页面
function policyDetail(obj){
	
	location = 'mypolicyDetail.html?policyNo='+obj;
}