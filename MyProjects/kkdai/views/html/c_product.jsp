<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="../commen.jsp"></jsp:include>
<title>产品详情</title>
</head>

<body style="background-color: #f3f3f3;">
	<div id='content_dom'> </div>
	<form   id="cardForm">
    	<input type='hidden' name='type'  id="cardType"/>
	</form> 
	
	<script type="text/html" id="productDetail">
	<div class="header">
		<a href="javascript:history.go(-1)" class="icon hd_left"></a> 
		{{productName}}
	</div>

	<div class="pro_top_box">
		<div class="pro_top1">
			<p class="p1">{{lossFeeDesc}}</p>
			<p class="p2">分期利率（{{period}}期）</p>
			<p class="p3">{{periodRate}}%</p>
		</div>
		<div class="top2">
			<div class="top2_left">
				<p class="top2_left_p1">借款期限</p>
				<p class="top2_left_p2">{{periods}}</p>
			</div>
			<div class="top2_rt">
				<p class="top2_left_p1">手续费率</p>
				<p class="top2_left_p2">{{handingRate}}%</p>
			</div>
		</div>
	</div>
	<div class="pro_text_box">
		<!-- <div class="pro_text_ico"></div> -->
		<div class="pro_text1 clearfix">
			<img src="<%=request.getContextPath()%>/resource/images/main/v1/pay_1@2x.png" class="m-r-md" style="width:0.61rem;height:0.61rem;"/>
			<span>手续费扣取方式：</span>
			<p  style="width: 50%">{{interestTypeDesc}}</p>
		</div>
		<div class="pro_text2 clearfix">
			<img src="<%=request.getContextPath()%>/resource/images/main/v1/pay_2@2x.png" class="m-r-md" style="width:0.5rem;height:0.5rem;"/>
			<span>逾期费用：</span>
			<p>{{punishRateDesc}}</p>
			 
		</div>
	   <div class="pro_text1 m-t-md clearfix">
			<img src="<%=request.getContextPath()%>/resource/images/main/v1/pay_3@2x.png" class="m-r-md" style="width:0.51rem;height:0.51rem;"/>
			<span>提前清贷：</span>
			<p> {{payOffDesc}}</p>
			 
		</div>
	</div>
	<a href="javascript:void(0);" class="pro_bottom"><div class="" id="hcredit" data-href="productList" data-card-href="bind_credit_card">立即代还信用卡</div></a>
	</script>
	

	<script type="text/javascript">
	   
	    var productCode = "${param.productCode}";
	    
		
	</script>
	<script src="<%=request.getContextPath()%>/resource/js/common/template.js" type="text/javascript" ></script> 
	<script src="<%=request.getContextPath()%>/resource/js/views/html/c_product.js" type="text/javascript" ></script>  
     
</body>
</html>
