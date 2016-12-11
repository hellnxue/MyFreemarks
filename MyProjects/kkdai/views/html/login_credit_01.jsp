<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="../commen.jsp"></jsp:include>
<title>信贷GUI-注册征信1</title>
</head>
<body class="white_bg">
	<div class="header">
		<a href="credit_03" class="icon ico_back"></a>
		注册征信
	</div>
	<div class="nav_wrap flow_wrap">
		<a href="javascript:void(0)" class="selected"><i class="icon ico_num1"></i>验证信息</a>
		<a href="javascript:void(0)"><i class="icon ico_num2"></i>补充信息<i class="icon ico_num_line"></i></a>
		<a href="javascript:void(0)"><i class="icon ico_num3"></i>完成<i class="icon ico_num_line"></i></a>
	</div>
	<div class="maincontainer">
	<form action="login_credit_02" method="post">
		<div class="form_wrap">
			<div class="form-group">
				<label class="control-label">登录姓名</label>
				<input type="text" name="userName" value="" placeholder="由6-16位字母和数字组成" class="form-control" />
			</div>
			<div class="form-group">
				<label class="control-label">身份证号</label>
				<input type="text" name="identityNo" value="" placeholder="6-12位，包含数字、大小写字母" class="form-control" />
			</div>
			<div class="form-group">
				<label class="control-label">验证码</label>
				<input type="text" name="verifyCode" value="" placeholder="再次输入密码" class="form-control" />
				<i class="icon ico_yzm"><img class="ico_yzm"></i>
				<input type="hidden" id='vcodeToken' name="vcodeToken" value=""/>
			</div>
		</div>
		<div class="btn-wrap">
			<button type="submit" class="btn l_wd btn-white">下一步</button>
		</div>
		<div class="tips">
			<a href="#" class="c_orange">重新获取验证码&gt;&gt;</a>
		</div>
	</form>
	</div>
</body>
<script type="text/javascript">
$(document).ready(function(){
	getCode();
});

$("i>img").bind("click", function(){
	getCode();
})

function getCode(){
	$.ajax({
		async: false,
		type: "post",
		dataType: 'json',
		url: 'vertifyCode?vcodeKind=4',
		success: function(data) {
			$("i>img").attr("src", data.result.vcodeUrl)
			$("input[id=vcodeToken]").val(data.result.vcodeToken);
		}
	});
}

</script>
</html>
