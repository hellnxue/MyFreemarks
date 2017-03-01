<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="../commen_mui.jsp"></jsp:include>
<title>我的账单</title>

</head>

<body style=" background-color:#efeff4;">
	<!-- <header class="mui-bar mui-bar-nav">
			<a id="back" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 id="title" class="mui-title">下拉刷新和上拉加载更多</h1>
	</header> -->
	<header class="ctm-header ctm-header-default">
			<a href="index" class="nav-left-icon" data-ajax="false"> <em></em> </a> 
			<h1 class="ctm-header-title">我的账单</h1>
	</header>
	<div class="mui-content"></div>
	
	<script src="<%=request.getContextPath()%>/resource/js/views/mui/bill_manage_01_main.js" type="text/javascript" ></script>  
</body>
</html>
