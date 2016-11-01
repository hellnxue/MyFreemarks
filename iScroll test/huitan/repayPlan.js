//var pageIndex=1,total,myScroll;
//
//$(function(){
//	 
//	if (myScroll){
//		myScroll.destory();
//	}
//	myScroll = new iScroll('wrapper',{ hScrollbar: false, vScrollbar: false,onScrollEnd:pullTo,bounce:false,bounceLock:true });
//	
//    
//	// 保单信息
//	// 默认第一页
//	policyInfo();
//});
//
////分页
//function pullTo(){
//	
//	if(this.y<=this.maxScrollY){
//		/*pageIndex++;
//		if(pageIndex<=total){
//			policyInfo();
//		}*/
//		console.log(this.y);
//		console.log(this.maxScrollY);
//		alert(123);
//		policyInfo();
//	}
//}
// 
// // 保单信息
//function policyInfo() {
//	
//	 
//	var   html;
//	html= '<div style="border-bottom:1px solid #ccc;line-height:30px;text-align:left;padding:20px 6%;position:relative;">'
//		+ '<div style="position:absolute;bottom:0;right:0;margin:0 6% 20px 0;">'
//		+ '	<span style="color:red;">已逾期</span></div>'
//		+ '<span>期数：3/20</span><br /> <span>应还日期：12-12日</span><br /> <span>本金：300.00元</span><br />'
//		'<span>利息：1000元</span><br /> <span>逾期天数：2天</span><br /> <span>逾期金额：10.00元</span><br />'
//		'<span>应还金额：1300.00元</span></div>';
//			 
//			 
//			 
//		  
//		 
//		 
//		$("#wrapper > div").append(html);
//		 
//		myScroll.refresh();
//	
//	// 获取参数
//	/*var policyContent ={name:"小新"};// eval('('+getQueryUrlParamVal("obj")+')');
//	
//	var request = {};
//	// 姓名
//	if (policyContent.name) {
//		request.id = 10;
//	}
//	    request.createName = "蜡笔小新";*/
//	 
//	// 起始页码
//	//request.currentPage = pageIndex;
//	
//	// 请求
//	/*CommonUtil.executeAjax("0100002",request,function(data){
//		var response = data.responseBody;
//		console.log(response);*/
//		/*var policyList = response.policyList;
//		if (policyList&&policyList.size>0) {
//			// 总页数
//			total = response.total;
//			// 所有保单
//			var html = '<div>';
//			for (var key in policyList) {
//				var policy = policyList[key];
//				html += '<div class="height_05"></div>';
//				html += '<div class="bdlb_21_div" onclick="policyDetail('+policy.policyNo+')">';
//				html += '<p  class="titile_p">保单号<span>'+policy.policyNo+'</span></p>';
//				html += '<div class="bdlb_21_div_con">';
//				html += '<p class="height_1"></p>';
//				html += '<p>保单名称：'+policy.policyName+'</p>';
//				html += '<div class="div_f_w45">投保人姓名：'+policy.insurer+'</div>';
//				html += '<div class="div_f_w55">被保人姓名：'+policy.insured+'</div>';
//				html += '<div class="div_f_w45">保单状态：'+policy.status+'</div>';
//				html += '<div class="div_f_w55">承保日期：'+policy.effectiveDate+'</div>';
//				html += '<p class="height_1"></p>';
//				html += '</div>';
//			}
//			html += '</div>';
//			$("#wrapper").append(html);
//			myScroll.refresh();
//		} else {
//			
//			// 提示
//			jAlert("暂无保单","提示",function(flag){
//				if (flag) {
//					// 返回上一页
//					location = 'myPolicy.html';
//				}
//			});
//		}*/
///*	},false);*/
//}  
//
//// 跳转到保单详细页面
//function policyDetail(obj){
//	
//	location = 'mypolicyDetail.html?policyNo='+obj;
//} 

















var myScroll,
	pullDownEl, pullDownOffset,
	pullUpEl, pullUpOffset,
	generatedCount = 0;

function pullDownAction () {
	setTimeout(function () {	// <-- Simulate network congestion, remove setTimeout from production!
		var el, li, i;
		//el = document.getElementById('thelist');

		var   html;
		html= '<div style="border-bottom:1px solid #ccc;line-height:30px;text-align:left;padding:20px 6%;position:relative;">'
			+ '<div style="position:absolute;bottom:0;right:0;margin:0 6% 20px 0;">'
			+ '	<span style="color:red;">1111111</span></div>'
			+ '<span>期数：3/20</span><br /> <span>应还日期：12-12日</span><br /> <span>本金：300.00元</span><br />'
			'<span>利息：1000元</span><br /> <span>逾期天数：2天</span><br /> <span>逾期金额：10.00元</span><br />'
			'<span>应还金额：1300.00元</span></div>';
				 
				 
				 
			  
			 
			 
			$("#thelist").append(html);
			 
		
		myScroll.refresh();		// Remember to refresh when contents are loaded (ie: on ajax completion)
	}, 1000);	// <-- Simulate network congestion, remove setTimeout from production!
}

function pullUpAction () {
	setTimeout(function () {	// <-- Simulate network congestion, remove setTimeout from production!
		var el, li, i;
		var   html;
		html= '<div style="border-bottom:1px solid #ccc;line-height:30px;text-align:left;padding:20px 6%;position:relative;">'
			+ '<div style="position:absolute;bottom:0;right:0;margin:0 6% 20px 0;">'
			+ '	<span style="color:red;">222222</span></div>'
			+ '<span>期数：3/20</span><br /> <span>应还日期：12-12日</span><br /> <span>本金：300.00元</span><br />'
			'<span>利息：1000元</span><br /> <span>逾期天数：2天</span><br /> <span>逾期金额：10.00元</span><br />'
			'<span>应还金额：1300.00元</span></div>';
				 
				 
				 
			  
			 
			 
			$("#thelist").append(html);
		myScroll.refresh();		// Remember to refresh when contents are loaded (ie: on ajax completion)
	}, 1000);	// <-- Simulate network congestion, remove setTimeout from production!
}

function loaded() {
	pullDownEl = document.getElementById('pullDown');
	pullDownOffset = pullDownEl.offsetHeight;
	pullUpEl = document.getElementById('pullUp');	
	pullUpOffset = pullUpEl.offsetHeight;
	
	myScroll = new iScroll('wrapper', {
		useTransition: false,
		topOffset: pullDownOffset,
		onRefresh: function () {
			if (pullDownEl.className.match('loading')) {
				pullDownEl.className = '';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Pull down to refresh...';
			} else if (pullUpEl.className.match('loading')) {
				pullUpEl.className = '';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Pull up to load more...';
			}
		},
		onScrollMove: function () {
			
			/*alert(this.y);
			alert(this.minScrollY);*/
			if (this.y > 5 && !pullDownEl.className.match('flip')) {
				pullDownEl.className = 'flip';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Release to refresh...';
				this.minScrollY = 0;
			} else if (this.y < 5 && pullDownEl.className.match('flip')) {
				pullDownEl.className = '';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Pull down to refresh...';
				this.minScrollY = -pullDownOffset;
			} else if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
				pullUpEl.className = 'flip';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Release to refresh...';
				this.maxScrollY = this.maxScrollY;
			} else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
				pullUpEl.className = '';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Pull up to load more...';
				this.maxScrollY = pullUpOffset;
			}
		},
		onScrollEnd: function () {
			if (pullDownEl.className.match('flip')) {
				pullDownEl.className = 'loading';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Loading...';				
				pullDownAction();	// Execute custom function (ajax call?)
			} else if (pullUpEl.className.match('flip')) {
				pullUpEl.className = 'loading';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Loading...';				
				pullUpAction();	// Execute custom function (ajax call?)
			}
		}
	});
	
	setTimeout(function () { document.getElementById('wrapper').style.left = '0'; }, 800);
}

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 200); }, false);