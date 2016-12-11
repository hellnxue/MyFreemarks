<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="../commen.jsp"></jsp:include>
<script type="text/javascript" src="<%=request.getContextPath()%>/resource/js/jquery.mobile-1.4.5.js"></script>
<title>产品详情</title>
<script type="text/javascript">
   (function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
        var clientWidth = docEl.clientWidth;
            docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
        }
  
	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
	})(document, window);
   
   var page = 1, flag = false;
   
   $(document).ready(function(){
	   var callBack1 = function(){
		   $("#lishi_list").html("<center>暂无数据！</center>");
	   }
	   loadData("1", callBack1);//1 首次加载
	   $(".lishi_title > a").bind("click", function(){
		   $(this).parent().find("a.current").removeClass("current");
		   $(this).addClass("current");
		   $("#lishi_list").html("");
		   page = 1;
		   flag = false;
		   loadData("1", callBack1); //1 首次加载
	   })
	   var beforeScrollStart = 0,  beforeScrollTop = 0;
	   $(document).on("scrollstart",function(){
		   beforeScrollStart = document.body.scrollTop;
	   });
	   $(document).on("scrollstop",function(){
		   beforeScrollTop = document.body.scrollTop;
		   if((beforeScrollStart - beforeScrollTop) < 0){// 判断是否下滑
			   var callBack = function(){
				   flag = true;
				   page = page - 1;
			   }
			   if(flag){ //已经没有数据加载了
				   return false;
			   }
			   page = page + 1;
			   loadData("2", callBack); //2 下拉分页
		   }
	   });
   })
   
   function loadData(times, callBack){
	   var type = $("div.lishi_title > a.current").attr("type");
	   $.ajax({
			async: false,
			type: 'post',
			dataType: 'json',
			url: "hisTranstion",
			data: {
				userId : '${userSession.userId}',
				type : type,
				page : page,
				pageSize : '10'
			},
			success: function(data) {
				if(data.code == '0000'){
					if(data.result == null || data.result == ""){
						callBack();
						return false;
					}else {
						var	str	= "";
						$(data.result).each(function(i, obj){
							var	billStr = "";
							$(obj.bill).each(function(j, item){
								billStr += "<div class='lishi_text' orderId='" + item.orderId + "'>" +
													"<p>" +
														"<span class='lishi_1'>申请时间：" + item.repDate + "</span><span class='lishi_zt'>" + item.status + "</span>" +
													"</p>" +
													"<p>" +
														"<span class='lishi_2'>" + item.card + "</span><span class='lishi_e'>交易金额：" + item.amount + "</span>" +
													"</p>" +
												"</div>";
							});
							str	+=  "<div class='lishi_content'>" +
										"<div class='lishi_time'>" + obj.month + "</div>" +
										"<div class='lishi_text_box'>" +
										billStr + 
										"</div>" +
									"</div>";
						})
						if("1" == times){
						    $("#lishi_list").html(str);
						}else {
							$("#lishi_list:last").after(str);
						}
					}
				}else {
					MessageWin(data.msg, function(){}); 
				}
			}
		});
   }
</script>
</head>

<body style=" background-color:#efeff4;">
    <div class="header">
		<a href="c_my_page" class="icon hd_left" data-ajax="false"></a>
		历史交易
	</div>
    <div class="lishi_title">
      <a href="#" class="left current" type='1' data-ajax="false">入账交易</a>
      <a href="#" class="rt" type='2' data-ajax="false">入账交易</a>
    </div>
    <div id='lishi_list'>
	    <div class="lishi_content">
	      <div class="lishi_time">2016年12月12日</div>
	      <div class="lishi_text_box">
	        <div class="lishi_text">
	          <p><span class="lishi_1">申请时间：2016.11.11</span><span class="lishi_zt">申请成功</span></p>
	          <p><span class="lishi_2">招商银行（*0025）信用卡</span><span class="lishi_e">交易金额：10101101</span></p>
	        </div>
	        <div class="lishi_text lishi_text_last">
	          <p><span class="lishi_1">申请时间：2016.11.11</span><span class="lishi_zt">申请成功</span></p>
	          <p><span class="lishi_2">招商银行（*0025）信用卡</span><span class="lishi_e">交易金额：10101101</span></p>
	        </div>
	      </div>
	    </div>
   </div>
</body>
</html>
