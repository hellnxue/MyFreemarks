<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="../commen.jsp"></jsp:include>
<title>主页</title>
</head>
<body>
<div id="main-wrapper">
	 <!--  <a href="credit_05"  ><i  ></i>产品</a>  -->    
<!-- <a href="authentication_03"  ><i  ></i>身份验证</a>   -->
   <div class='header_bg'>
   		<div class='nav_date text-left'>
   			<div  data-date >
   				<img class="night none" src="<%=request.getContextPath()%>/resource/images/main/v1/night@2x.png"><img class="day" src="<%=request.getContextPath()%>/resource/images/main/v1/sunny-@2x.png"> <span>13</span>.<span>Oct</span>.<span>周四</span>
   			</div>
   			<a href="news_center_main" class="message pull-right m-r-lg"></a>
   		</div>
   		<div class="nav_main">
		 	 <div  class="tip_info">
			 	<span>可用额度（元）</span>
			 	<!-- <abbr class="ctm-f-s-4">￥</abbr> --> <span class='cedu'>${creditAmount}<!-- 5000 --></span><abbr class="ctm-f-s-4">.00</abbr>   
			</div>
			<div>
				<a class="tip_img ctm-cursor-ptr" data-dwte>
					<span>申请额度</span>
				</a>
			</div>

	 	</div>
	</div>
	
	<div class="ctm-container link_money">
	    <div class="m-v"></div>
		<div class=" ctm-row   p-l-lg m-t-md" >
			<div class="custom-col-5 ctm-cursor-ptr" data-href="productList" data-card-href="bind_credit_card" >
				<img src="<%=request.getContextPath()%>/resource/images/main/v1/borrow@2x.png">
				<span>借款</span> 
			</div>
	
			<div class="custom-col-5 ctm-cursor-ptr" style="padding-left: 0">
				<img src="<%=request.getContextPath()%>/resource/images/main/v1/repay@2x.png" class="p-img">
				<span>还款</span> 
				<!-- <div class=" ctm-row">
					<div class="custom-col-10" ></div>
				</div> -->
			</div>
		</div>
		<div class=" ctm-row   p-l-lg " >
			<div class="custom-col-5 pret-info ctm-cursor-ptr p-t-xs" data-href="productList" data-card-href="bind_credit_card" >
				 
				<p>极速审核，快速放款</p> 
			</div>
	
			<div class="custom-col-5 ctm-cursor-ptr pret-info pr p-t-xs"  >
				 
				<!-- <p>距离本期还款还有<span class="c_orange">10</span>天</p>  -->
				<p id="tips">  </p>
			</div>
		</div>
		<div class=" ctm-row   p-l-lg m-t-xs" >
			<div class="custom-col-5"> </div>
	
			<div class="custom-col-5 pret-info pr" >
				 
				<!-- <p>还款金额<span class="c_orange">1500.000</span></p>  -->
	
			</div>
		</div>
	</div>
	

	<!-- 第二部分 -->
		<div class="ctm-container m-t-md news_area ctm-b-btm">
 
		<div class=" ctm-row   p-l-lg p-r-lg bank_card" >
			<div class="custom-col-10  ctm-b-btm">
				<a class="block  card" href="bind_credit_card" data-href="bind_credit_card" data-card-href="bind_credit_card" >
				  <img src="<%=request.getContextPath()%>/resource/images/main/v1/ind_mor@2x.png">
				  <span class="m-l">立即添加您的银行卡</span> 
				</a>
			</div>
		</div>
  		<div class=" ctm-row   p-l-lg p-r-lg " >
			<div class="ctm-row news_feed  ">
				<div class="m-vr"></div>
				<div class="custom-col-3 news_tag ">
					<img src="<%=request.getContextPath()%>/resource/images/main/v1/activity@2x.png">
					<span  >最新活动</span> 
				</div>
				<div class="custom-col-5 w-rt newsItem">
					 
					<a  href="news_center_main" class="block  news_tip" data-scroll>
					    
					</a> 
				</div>
				<div class="custom-col-2 news_tip text-right w-rt newsMore">
					 
					<a   href="news_center_main" class="block ">更多</a> 
				</div>			
			</div>
			 				
		</div>   
		<%-- <div class=" ctm-row   p-l-lg p-r-lg" >
			
			<div class="ctm-row news_feed  ">
				<div class="m-vr"></div>
				<div class="custom-col-10 news_tag">
					<img src="<%=request.getContextPath()%>/resource/images/main/v1/activity@2x.png">
					<span  >最新活动</span> 
				</div>			
			</div>
			<!-- style="height: 0.5rem;line-height: 0.5rem" -->
			<div class="ctm-row news_feed"  style=" top: -0.2rem;">
				
				<div class="custom-col-3 news_tag">
					<img src="<%=request.getContextPath()%>/resource/images/main/v1/activity@2x.png">
					<span  >最新活动</span> 
				</div>
				<div class="custom-col-8   newsItem">
					 
					<a   href="news_center_main" class="block  news_tip" data-scroll>					
					    <span class="news_span">1.聚宝袋推出尊享信用卡日利率0.05%</span>
						<span class="news_span">2.聚宝袋推出尊享信用卡日利率0.05%</span>
						<span class="news_span">3.聚宝袋推出尊享信用卡日利率0.05%</span>
					</a>
				</div>
				<div class="custom-col-2  newsMore news_tip text-right ">
					 
					<a   href="news_center_main" class="block ">更多</a> 
				</div>
			</div>		
						
		</div>  --%>
	</div>


</div>
<jsp:include page="foot.jsp"></jsp:include>
<form   id="cardForm">
    <input type='hidden' name='type'  id="cardType"/>
</form> 



<script type="text/javascript">
	var path="<%=request.getContextPath()%>";
	var promoteQuota="${promoteQuota}";
	var processCode="${processCode}";
	var repayRem="${repayRem}";
	var credit="${credit}";
	var card="${card}";  
	var newInfo="${userSession.newInfo}";
	
	
</script>
<script src="<%=request.getContextPath()%>/resource/js/views/html/main.js" type="text/javascript" ></script>  
</body>

</html>