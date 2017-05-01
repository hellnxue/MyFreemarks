<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="../commen_mui.jsp"></jsp:include>
<title>信贷GUI-获取查询码</title>

</head>

<body >
	<!--提示-->
	 <div class="tips_main" id="tips_main" style="display:none;" >
			<p class="lead"></p>
	 </div>
	<header class="ctm-header ctm-header-default">
		<a href="javascript:void(0);" class="nav-left-icon" data-type="1"> <em></em>
		</a> 
		<h1 class="ctm-header-title" id="cc">获取查询码</h1>
	</header>
	<div class="mui-content"></div>
	<script src="<%=request.getContextPath()%>/resource/js/views/html/credit_04_main.js" type="text/javascript" ></script> 
</body>
</html>
