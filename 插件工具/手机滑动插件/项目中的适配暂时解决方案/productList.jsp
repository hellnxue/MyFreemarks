<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="../commen.jsp"></jsp:include>
<link type="text/css" href="<%=request.getContextPath()%>/resource/css/common/idangerous.swiper.css" rel="stylesheet" />
<script type="text/javascript" src="<%=request.getContextPath()%>/resource/js/jquery.mobile-1.4.5.js"></script>
<title>借钱还信用卡a</title>
</head>
<body>
    <div class="header">
		<a href="index" class="icon ico_back" data-ajax="false"></a>
		借钱还信用卡
	</div>
	<div class="maincontainer">
	<form action="credit_card_02" method="post"  data-ajax="false">
	    <div class='pd_area_t'>最高可借${userSession.creditAmount}元！</div>
	    <div class='form-group pd_area_t_je'>
		    <label class="control-label">借款金额</label>
            <input class="form-control" name="loanAmt" required="required" value="${param.loanAmt}" type="text" data-role='none'   readonly="readonly">  
            <input name="repaymentPeriod" value="" type="hidden">
            <input name="productCode" value="" type="hidden">
            <input name="productName" value="" type="hidden">
            <input name="poundage" value="" type="hidden">
            <input name="capital" value="" type="hidden">
        </div>
         <div class='pd_list_cn swiper-container' >
        	<div class='swiper-wrapper text-left'  >
        	
        		<!-- <div class='swiper-slide pd_area  sp'>
		        <div class='t_lit'>
			        <div class='p_n'>瀚鑫保理1号
			        </div>
			        <div class='p_d'>比信用卡省（尊享省呗月利率0.76333%）
			        </div>
		        </div>
		        <div class='t_lit'>
			        <span>实际月还款</span>
			        <span class='t_lit_je'>240.00 &gt;</span>
		        </div>
		    </div>
		    
		     <div class='swiper-slide pd_area   sp'>
		        <div class='t_lit'>
			        <div class='p_n'>瀚鑫保理2号
			        </div>
			        <div class='p_d'>比信用卡省（尊享省呗月利率0.76333%）
			        </div>
		        </div>
		        <div class='t_lit'>
			        <span>实际月还款</span>
			        <span class='t_lit_je'>240.00 &gt;</span>
		        </div>
		    </div>
		    
		     <div class='swiper-slide pd_area   sp'>
		        <div class='t_lit'>
			        <div class='p_n'>瀚鑫保理3号
			        </div>
			        <div class='p_d'>比信用卡省（尊享省呗月利率0.76333%）
			        </div>
		        </div>
		        <div class='t_lit'>
			        <span>实际月还款</span>
			        <span class='t_lit_je'>240.00 &gt;</span>
		        </div>
		    </div>
        	 -->
        	</div>
		     <div class="pagination"></div>
		</div>
		<div class='qs_eare'>
			<div>期数 <span id='period_dom'>33</span> </div>
			<!-- <div class='qs_li'>
				<span class='qs_current'>12</span>
				<span>6</span>
				<span>3</span>
			</div> -->
		</div>
		<div>
		    <button class="btn btn-orange  ctm-box-shadow ctm-cursor-default" type="button" id="step"> 下一步 </button>
		</div>
	</form>
	</div>
	
	
</body>
<script src="<%=request.getContextPath()%>/resource/js/common/layer.js" type="text/javascript"></script>
<script type="text/javascript">
var creditAmount = '${userSession.creditAmount}';
var sessionUserId= '${userSession.userId}';

//返回参数
var paramObj={
		productCode:"${param.productCode}",
		loanAmt:"${param.loanAmt}",//输入金额
		 
		
};



 
</script> 

<script src="<%=request.getContextPath()%>/resource/js/common/template.js" type="text/javascript" ></script>
<script src="<%=request.getContextPath()%>/resource/js/common/keyboard.js" type="text/javascript" ></script>

<script src="<%=request.getContextPath()%>/resource/js/views/html/productList.js" type="text/javascript" ></script>
 
<script src="<%=request.getContextPath()%>/resource/js/common/idangerous.swiper.min.js" type="text/javascript" ></script>
</html>