<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="../commen.jsp"></jsp:include>
<title>信贷GUI-注册征信3</title>
</head>
<body class="white_bg">
	<div class="header">
		<a href="index" class="icon ico_back"></a>
		注册征信
	</div>
	<div class="nav_wrap flow_wrap">
		<a href="javascript:void(0)" class="selected"><i class="icon ico_num1"></i>验证信息</a>
		<a href="javascript:void(0)" class="selected"><i class="icon ico_num2"></i>补充信息<i class="icon ico_num_line"></i></a>
		<a href="javascript:void(0)" class="selected"><i class="icon ico_num3"></i>完成<i class="icon ico_num_line"></i></a>
	</div>
	<div class="maincontainer">
		<div class="handle_wait-sign" style="margin-top:1.3rem ;">
			恭喜，注册成功！
		</div>
		<div class="btn-wrap">
			<button type="button" class="btn l_wd btn-orange" onclick="javascript:window.location.href='credit_03'">返回注册页面</button>
		</div>
	</div>
</body>
</html>
