<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="../commen.jsp"></jsp:include>
<title>信贷GUI-运营商2</title>
</head>
<body class="white_bg">
	<div class="header">
		<a href="index" class="icon ico_back"></a>
		运营商
	</div>
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
			<button type="button" class="btn l_wd btn-orange" onclick="javascript:window.location.href='credit_03'">查征信</button>
		</div>
	</div>
</body>
</html>
