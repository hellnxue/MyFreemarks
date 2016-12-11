<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="../commen.jsp"></jsp:include>
<title>填写验证码</title>
</head>
<body>
    <div class="header">
		<a href="bind_credit_card" class="icon ico_back"></a>
		填写验证码
	</div>
	<div class="maincontainer">
	    <div class="tips_info gray_bg">请输入手机139****1410收到的短信验证码</div>
		<div>
			<input class="form-control-border mt20 input_boder_style" name="" value="" placeholder="请输入验证码" type="text">
			<input class="form-control-border mt20 button_boder_style" value="59秒后重发" type="button">
		</div>
		 <div class="btn-wrap">
			<button class="btn_new" type="button">下一步</button>
		</div>
	</div>
</body>
</html>