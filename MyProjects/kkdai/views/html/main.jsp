<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="../commen.jsp"></jsp:include>
<title>主页</title>
</head>
<body>
<div id="main-wrapper">
	<!--  <a href="productList"  ><i  ></i>产品</a>
<a href="authentication_03"  ><i  ></i>身份验证</a>   -->
   <div class='header_bg'>
   		<div class='nav_date'>
   		<!-- <span></span> -->
   		<img class="night none" src="<%=request.getContextPath()%>/resource/images/main/v1/night@2x.png"><img class="day" src="<%=request.getContextPath()%>/resource/images/main/v1/sunny-@2x.png"> <span>13</span>.<span>Oct</span>.<span>周四</span>
   		</div>
   		<div class="nav_main" id='promote_quota' promoteQuota='${promoteQuota}' processCode="${processCode}">
		 	 <div  class="tip_info">
			 	<span>可用额度</span>
			 	<abbr class="ctm-f-s-4">￥</abbr> <span class='cedu'><!-- ${creditAmount} -->5000</span><abbr class="ctm-f-s-4">.00</abbr>   
			</div>
			<div>
				<a class="tip_img">
					<span>点我提额</span>
				</a>
			</div>

	 	</div>
	 	
	 	
	    <%--  <div id='promote_quota' promoteQuota='${promoteQuota}' processCode="${processCode}">
		 	<a style="display: inline-block;">
			 	<span>可用额度</span>
			 	<span class='dwte'><span>点我提额</span></span><br>
	 	        <span class='edu'>${creditAmount}</span>
			</a>
		 	<a class='ljhk'><dt>Go></dt><dt id='application_amount' applicationAmount='${applicationAmount}'>立即还款</dt></a>
	 	</div>
	 	<div class='rl'><span>13 Oct. 周四</span></div>   --%>
	</div>
	
	<!-- 
	<div class='xyhk'><i></i>&nbsp;&nbsp;&nbsp;&nbsp;添加新的银行卡</div>
	<div class='zxhd'>
	     <div class='hd_title'>最新活动 &nbsp;&nbsp;&nbsp;&nbsp;<i></i></div>
	     <div class='gg_dom'><span>聚宝袋推出尊享信用卡日利率0.05%</span><i></i></div>
	     <div class='gg_dom'><span>聚宝袋推出尊享信用卡日利率0.05%</span><i></i></div>
	</div>
	
	<div class='zxhd' >
	     <div class='hd_title'>最新消息 &nbsp;&nbsp;&nbsp;&nbsp;<i></i></div>
	     <div class='gg_dom'><span>聚宝袋推出尊享信用卡日利率0.05%</span> <i></i></div>
	     <div class='gg_dom'><span>聚宝袋推出尊享信用卡日利率0.05%</span> <i></i></div>
	</div> -->
	
	<div class="ctm-container link_money">
	    <div class="m-v"></div>
		<div class=" ctm-row   p-l-lg m-t-md" >
			<div class="custom-col-5">
				<img src="<%=request.getContextPath()%>/resource/images/main/v1/borrow@2x.png">
				<span>借款</span> 
			</div>
	
			<div class="custom-col-5" style="padding-left: 0">
				<img src="<%=request.getContextPath()%>/resource/images/main/v1/repay@2x.png" class="p-img">
				<span>提额</span> 
	
			</div>
		</div>
		<div class=" ctm-row   p-l-lg m-t-xs" >
			<div class="custom-col-5 pret-info">
				 
				<p>极速审核，快速放款</p> 
			</div>
	
			<div class="custom-col-5 pret-info pr"  >
				 
				<p>距离本期还款还有<span class="c_orange">10</span>天</p> 
	
			</div>
		</div>
		<div class=" ctm-row   p-l-lg m-t-xs" >
			<div class="custom-col-5"> </div>
	
			<div class="custom-col-5 pret-info pr" >
				 
				<p>还款金额<span class="c_orange">1500.000</span></p> 
	
			</div>
		</div>
	</div>
	

	<!-- 第二部分 -->
		<div class="ctm-container m-t-md news_area ctm-b-btm">
 
		<div class=" ctm-row   p-l-lg p-r-lg bank_card" >
			<div class="custom-col-10  ctm-b-btm">
				<a class="block ctm-cursor-default card" href="#">
				  <img src="<%=request.getContextPath()%>/resource/images/main/v1/ind_mor@2x.png">
				  <span class="m-l">立即添加您的银行卡</span> 
				</a>
			</div>
		</div>
		<div class=" ctm-row   p-l-lg p-r-lg " >
			<div class="ctm-row news_feed ctm-b-btm">
				<div class="m-vr"></div>
				<div class="custom-col-3 news_tag ">
					<img src="<%=request.getContextPath()%>/resource/images/main/v1/news@2x.png">
					<span>最新消息</span> 
				</div>
				<div class="custom-col-5 ">
					 
					<a  href="#" class="block ctm-cursor-default news_tip">立即添加您的银行卡立即添加您的银行卡</a> 
				</div>
				<div class="custom-col-2 news_tip text-right">
					 
					<a  href="#" class="block ctm-cursor-default">更多</a> 
				</div>			
			</div>
			 				
		</div> 
		<div class=" ctm-row   p-l-lg p-r-lg" >
			<div class="ctm-row news_feed  ">
				<div class="m-vr"></div>
				<div class="custom-col-3 news_tag">
					<img src="<%=request.getContextPath()%>/resource/images/main/v1/activity@2x.png">
					<span  >最新动态</span> 
				</div>
				<div class="custom-col-5 ">
					 
					<a   href="#" class="block ctm-cursor-default news_tip">立即添加您的银行卡立即添加您的银行卡</a>
				</div>
				<div class="custom-col-2 news_tip text-right">
					 
					<a   href="#" class="block ctm-cursor-default">更多</a> 
				</div>
			</div>		
						
		</div> 
	</div>

<jsp:include page="foot.jsp"></jsp:include>
</div>
 
</body>
<script type="text/javascript">
	$(document).ready(function() {
		var promoteQuota = $("#promote_quota").attr("promoteQuota");
		var dom1 = $("#promote_quota");
		if(promoteQuota == '1') {
			$(".dwte > span").bind("click", function(){
				if(dom1.attr("processCode") == '30'){
				    window.location.href='operator_01';
				}else if(dom1.attr("processCode") == '40'){
					window.location.href='credit_03';
				}
			})
		}else if(promoteQuota == '0' || promoteQuota == '3') {
			$(".dwte > span").hide();
			$(".dwte").css("background","none");
		}
		var dom = $("#application_amount");
		var applicationAmount = dom.attr("applicationAmount");
		if('1' == applicationAmount) {
			dom.html("立即还款");
			$(".ljhk").bind("click", function(){
				window.location.href='productList';
			})
		} else if('0' == applicationAmount){
			dom.html("申请额度");
			$(".ljhk").bind("click", function(){
				if(dom1.attr("processCode") == '00' || dom1.attr("processCode") == ""){
					window.location.href='authentication_02';
				}else if(dom1.attr("processCode") == '10'){
					window.location.href='linkman';
				}else if (dom1.attr("processCode") == '20'){
					window.location.href='zhimaxinyong';
				}
			})
		}
		
		$(".xyhk").bind("click", function(){
			window.location.href='bind_credit_card';
		})
	})
</script>
</html>