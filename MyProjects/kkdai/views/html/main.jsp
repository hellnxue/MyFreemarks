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
   <div class='header_bg' id="hhh">
   		<div class='nav_date'>
   		<!-- <span></span> -->
   		<img class="night none" src="<%=request.getContextPath()%>/resource/images/main/v1/night@2x.png"><img class="day" src="<%=request.getContextPath()%>/resource/images/main/v1/sunny-@2x.png"> <span>13</span>.<span>Oct</span>.<span>周四</span>
   		</div>
   		<div class="nav_main">
		 	 <div  class="tip_info">
			 	<span>可用额度</span>
			 	<abbr class="ctm-f-s-4">￥</abbr> <span class='cedu'><!-- ${creditAmount} -->5000</span><abbr class="ctm-f-s-4">.00</abbr>   
			</div>
			<div>
				<a class="tip_img" data-dwte>
					<span>申请额度</span>
				</a>
			</div>

	 	</div>
	</div>
	
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
				<a class="block ctm-cursor-default card" href="bind_credit_card">
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
					 
					<a  href="bind_credit_card" class="block ctm-cursor-default news_tip" data-scroll>
						<span class="news_span">1立即添加您的银行卡立即添加您的银行卡</span>
						<span class="news_span">2立即添加您的银行卡立即添加您的银行卡</span>
						<span class="news_span">3立即添加您的银行卡立即添加您的银行卡</span>
					</a> 
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
 

<script src="<%=request.getContextPath()%>/resource/js/views/html/main.js" type="text/javascript" ></script>  

<script type="text/javascript">
	var promoteQuota="${promoteQuota}";
	var processCode="${processCode}";
	 
</script>
</body>

</html>