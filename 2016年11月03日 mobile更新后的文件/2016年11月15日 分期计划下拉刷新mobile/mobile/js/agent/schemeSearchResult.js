var myScroll,myScroll1,myScroll2,total;
var pageIndex = 1; // 总公司第一页
var pageIndex1 = 1; // 分公司第一页
var pageIndex2 = 1; // 支公司第一页
$(function(){
	
	// 总公司
	if (myScroll)
		myScroll.destory();
	myScroll = new iScroll('wrapper',{ hScrollbar: false, vScrollbar: false,onScrollEnd:hc_pullTo});
	
	// 分公司
	if (myScroll1)
		myScroll1.destory();
	myScroll1 = new iScroll('wrapper1',{ hScrollbar: false, vScrollbar: false,onScrollEnd:fc_pullTo});
	
	// 支公司
	if (myScroll2)
		myScroll2.destory();
	myScroll2 = new iScroll('wrapper2',{ hScrollbar: false, vScrollbar: false,onScrollEnd:zc_pullTo});
	
	// 根据机构层级选中头部
	var level = sessionStorage.orglevel;
	// 总公司
	if (level == '1') {
		$(".fafl_top_tab span").eq(0).attr("class","span_gs_cur");
	} else if (level == '2') {
		// 分公司
		$(".fafl_top_tab span").eq(1).attr("class","span_gs_cur");
	} else if (level == '3') {
		// 支公司
		$(".fafl_top_tab span").eq(2).attr("class","span_gs_cur");
	}
	
	// 所属公司查询
	scheme_search(level);
	
	// 公司间切换
	$(".fafl_top_tab span").click(function(){
		// 未选中的公司
		if (!$(this).hasClass("span_gs_cur")) {
			
			// 选中的公司添加样式
			$(this).attr("class","span_gs_cur");
			// 添加未选中的样式
			$(".fafl_top_tab span").not($(this)).removeAttr("class");
			
			// 所属公司查询
			var company_level = $(this).attr("id").substring(0,1);
			var content;
			if (company_level == '1') {
				content = company_level;
			} else if (company_level == '2') {
				content = company_level;
			} else if (company_level == '3') {
				content = company_level;
			}
			// 查询
			scheme_search(content);
		}
	});
});

// 公司查询
function scheme_search(level){
	
	var request = {};
	// 代理人编号
	request.agentCode = sessionStorage.dlrNo;
	// 当前页码
	request.currentPage = pageIndex;
	// 机构代码
	request.orgCode = sessionStorage.orgCode;
	// 方案机构层级
	request.level = level;
	
	// 请求
	CommonUtil.executeAjax("0200029",request,function(data){
		var response = data.responseBody;
		var schemeInfoList = response.schemeInfoList;
		if (schemeInfoList&&schemeInfoList.size>0) {
			// 总页数
			total = response.totalPage*1;
			// 当前所属公司的所属方案
			var html = '<div>';
			for (var key in schemeInfoList) {
				var schemeInfo = schemeInfoList[key];
				html += '<div class="height_05"></div>';
				html += '<div class="cplb_07_con_bg" onclick="schemeDetail('+schemeInfo.id+');">';
				html += '<div class="cplb_07_con_bg_div">';
				if (schemeInfo.icon) {
					html += '<div class="left_img"><img src="'+schemeInfo.icon+'"></div>';
				} else {
					html += '<div class="left_img"></div>';
				}
				html += '<div class="middle_con">';
				html += '<p class="p_txt">'+schemeInfo.title+'</p>';
				html += '<p class="p_txt_gray">'+schemeInfo.shortContent+'</p>';
				html += '</div>';
				html += '<div class="right_next" ><span></span></div>';
				html += '</div>';
				html += '</div>';
			}
			html += '</div>';
			// 总公司
			if (level == '1') {
				$("#wrapper").append(html);
				$("#2span").unbind('click');
				$("#3span").unbind('click');
//				myScroll.refresh();
			} else if (level == '2') {
				// 分公司
				$("#wrapper1").append(html);
				$("#3span").unbind('click');
//				myScroll1.refresh();
			} else if (level == '3') {
				// 支公司
				$("#wrapper2").append(html);
//				myScroll.refresh();
			}
		}
	},false);
}

// 跳转到方案明细
function schemeDetail(id){
	
	location = 'schemeDetail.html?id='+id;
}

// 分页--总公司
function hc_pullTo(){
	if(this.y<=this.maxScrollY){
		pageIndex++;
		if(pageIndex<=total){
			scheme_search('0');
		}
	}
}

//分页--分公司
function fc_pullTo(){
	if(this.y<=this.maxScrollY){
		pageIndex1++;
		if(pageIndex1<=total){
			scheme_search('1');
		}
	}
}

//分页--支公司
function zc_pullTo(){
	if(this.y<=this.maxScrollY){
		pageIndex2++;
		if(pageIndex2<=total){
			scheme_search('2');
		}
	}
}
