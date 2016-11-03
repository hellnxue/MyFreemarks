$(function(){
	
	var request = {};
	
	// 活动的id
	request.activityId = getQueryUrlParamVal("id");
	
	// ajax请求 
	CommonUtil.executeAjax("0100011",request,function(data) {
		// 活动详情
		var activeDetails = data.responseBody.activeDetails;
		if (activeDetails) {
			
			// 分享的icon
			$(".img_div_txt").html('<img src="'+activeDetails.shareIcon+'" height="100%" width="100%"/>');
			
			// 活动信息
			var html = '<p class="txt_white">'+activeDetails.title+'</p>';
			html += '<p class="txm_p">'+activeDetails.content+'</p>';
			$(".con_right_div").html(html);
			
			// 时间格式化yyyy-mm-dd
//			var beginTime = new Date(activeDetails.beginTime);
//			var beginDate = beginTime.getFullYear()+"-"+(beginTime.getMonth()+1)+"-"+beginTime.getDate();
			// 结束时间
			var endTime = new Date(activeDetails.endTime);
			var endDate = endTime.getFullYear()+"-"+(endTime.getMonth()+1)+"-"+endTime.getDate();
			
			// 活动状态
			var activeHtml = '<p><span class="hdjs_26_icon_time"></span>过期时间　'+endDate+'</p>';
			activeHtml += '<p><span class="hdjs_26_icon_ticket"></span>状态　有效</p>';
			$(".foot_right_div").html(activeHtml);
			
			// 使用规则
			var remarkHtml = '<h2>使用规则：</h2>';
			remarkHtml += '<p>'+activeDetails.remark+'</p>';
            $(".hdjs_26_con").html(remarkHtml);
            
            // 微信分享
            wxshare(activeDetails);
		}
	}, false);
});

// 微信分享
function wxshare(activeDetails) {
	
	var shareTimeLineData = {
			title : activeDetails.shareTitle,
			desc : activeDetails.shareContent,
			link : activeDetails.tureUrl,
			imgUrl : location.origin + '/' + activeDetails.shareIcon
		};
		var shareAppMessageData={
			title : activeDetails.shareTitle,
			desc : activeDetails.shareContent,
			link : activeDetails.tureUrl,
			imgUrl : location.origin + '/' + activeDetails.shareIcon
		};
	var param = {};
	param.url = encodeURIComponent(window.location.href);
	CommonUtil.executeAjax("0400005",param,function(data){
		var response = data.responseBody;
		wx.config({
			debug : false,
			appId : response.appId,
			timestamp : response.timestamp,
			nonceStr : response.nonceStr,
			signature : response.signature,
			jsApiList : ['checkJsApi',
					'onMenuShareTimeline',
					'onMenuShareAppMessage', 'hideOptionMenu',
					'showOptionMenu','hideMenuItems']
		});
	},false);
	wx.ready(function() {
		// 隐藏微信菜单
		wx.hideMenuItems({
	      menuList: [
	        'menuItem:share:qq'
	      ]
	    });

		wx.hideOptionMenu();

		var isnotzdversion = true;
		var notsuportversion = new Array("MicroMessenger/6.0.2");
		$.each(notsuportversion, function(i, n) {
			if (ua.indexOf(n) >= 0 && ua.indexOf("Android") >= 0) {
				isnotzdversion = false;
			}
		});
		if (!isnotzdversion) {
			if(ua.indexOf('MicroMessenger/6.0.2.57')>=0){
				alert('亲，您的微信版本过低哦，请点击“我”-“设置”-“关于微信”-“检查新版本”进行更新。');
			}else{
				wx.checkJsApi({
					jsApiList : ['onMenuShareTimeline','onMenuShareAppMessage'],
					success : function(res) {
						// 如果是ok的话，代表支持
						if (res.checkResult.onMenuShareTimeline&&res.checkResult.onMenuShareAppMessage) {
							wx.onMenuShareTimeline(shareTimeLineData);
							wx.onMenuShareAppMessage(shareAppMessageData);
						} else {
							alert('亲，您的微信版本过低哦，请点击“我”-“设置”-“关于微信”-“检查新版本”进行更新。');
						}
					}
				});
			}
		} else {
			wx.onMenuShareTimeline(shareTimeLineData);
			wx.onMenuShareAppMessage(shareAppMessageData);
		}
		// 错误处理！
		wx.error(function(res) {
		});
	});
}