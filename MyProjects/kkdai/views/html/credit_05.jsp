<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="../commen_mui.jsp"></jsp:include>
<title>信贷GUI-征信验证4</title>
</head>
<body style=" background-color:#efeff4;">
	<div id="main-wrapper">	
	<header class="ctm-header ctm-header-default">
		<a href="javascript:history.go(-1);" class="nav-left-icon"> <em></em>
		</a> 
		<!-- <a href="withdraw_cash" class="nav-right-icon"> <span>确认</span>
		</a>  --> 
		<h1 class="ctm-header-title">征信验证</h1>
	</header>

	 <div class="ctm-container m-t-xxxl">
	  
		<div class="ctm-img-wrapper text-center" data-success>
		   <img src="<%=request.getContextPath()%>/resource/images/main/v1/Operator_icon1@2x.png" width="30%"/>
		   <p class="m-t-xxl p-t img-title">征信查询中，请稍后！</p>
		   <p class="m-t img-info">您可在征信列表中获知最终提额结果。</p>
		</div>
		<!-- <div class="btn-wrap mt60">
			<button type="button" class="btn l_wd btn-orange ctm-box-shadow" onclick="javascript:window.location.href='withdraw_cash'">确认</button>
		</div> -->
		
		<!-- <a href="javascript:void(0);" class="pro_bottom">
			完成
		</a> -->
		
		<div class="pro_bottom">
			<a href=javascript:void(0); class="btm_accomplished" id="confirm">确认</a>
		</div>
	 </div>
 
	</div>	
	
	<script>
	var  userId= '${userSession.userId}';
	
	</script>
	<script src="<%=request.getContextPath()%>/resource/js/views/html/credit_05.js" type="text/javascript" ></script> 
 </body>
</html>
