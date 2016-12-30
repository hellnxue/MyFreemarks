<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="../commen.jsp"></jsp:include>
<title>信贷GUI-运营商2</title>
</head>
<body class="white_bg">
	<header class="ctm-header ctm-header-default">
			<a href="javascript:history.go(-1);" class="nav-left-icon" > <em></em> </a> 
			<h1 class="ctm-header-title">运营商</h1>
	</header>	
	<div class="nav_wrap">
		<a href="javascript:void(0)" class="selected"><i class="nav_ico nav_ico_sfxx"></i>身份信息</a>
		<a href="javascript:void(0)" class="selected"><i class="nav_ico nav_ico_linkman"></i>联系人</a>
		<a href="javascript:void(0)" class="selected"><i class="nav_ico nav_ico_operator"></i>运营商</a>
		<a href="javascript:void(0)"><i class="nav_ico nav_ico_credit"></i>征信验证</a>
	</div>
	<div class="maincontainer">
		<div class="handle_wait-sign">
			<i class="icon ico_wait"></i>
			报告等待中...
		</div>
		<div class="btn-wrap mt60">
			<!-- <button type="button" class="btn l_wd btn-orange ctm-box-shadow" onclick="javascript:window.location.href='credit_03'">查征信</button> -->
			<button type="button" class="btn l_wd btn-orange ctm-box-shadow" onclick="javascript:window.location.href='withdraw_cash'">确认</button>
		</div>
	</div>
</body>
</html>
