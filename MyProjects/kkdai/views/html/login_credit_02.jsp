<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="../commen.jsp"></jsp:include>
<title>信贷GUI-注册征信2</title>
<script type="text/javascript">
/* function toVaild(){
	
	if($("inpt[name=password]").val() != $("inpt[name=password_confirm]").val()){
		 alert("两次输入密码不一致");
		 return false;
	}
} */
</script>
</head>
<body class="white_bg">
	<div class="header">
		<a href="index" class="icon ico_back"></a>
		注册征信
	</div>
	<div class="nav_wrap flow_wrap">
		<a href="javascript:void(0)" class="selected"><i class="icon ico_num1"></i>验证信息</a>
		<a href="javascript:void(0)" class="selected"><i class="icon ico_num2"></i>补充信息<i class="icon ico_num_line"></i></a>
		<a href="javascript:void(0)"><i class="icon ico_num3"></i>完成<i class="icon ico_num_line"></i></a>
	</div>
	<div class="maincontainer">
	<form action="login_credit_03" method="post">
		<div class="form_wrap">
			<div class="form-group">
				<label class="control-label">登录名</label>
				<input type="text" name="loginName" value="" placeholder="由6-16位字母和数字组成" class="form-control"  required="required"/>
			</div>
			<div class="form-group">
				<label class="control-label">密码</label>
				<input type="password" name="password" value="" placeholder="6-12位，包含数字、大小写字母" class="form-control"  required="required"/>
			</div>
			<div class="form-group">
				<label class="control-label">确认密码</label>
				<input type="password" name="password_confirm" value="" placeholder="再次输入密码" class="form-control"  required="required"/>
			</div>
			<div class="form-group">
				<label class="control-label">手机号</label>
				<input type="text" name="mobileNo" value="" placeholder="请输入手机号" class="form-control"  required="required"/>
			</div>
			<div class="form-group">
				<label class="control-label">动态码</label>
				<input type="text" name="dynamicCode" value="" placeholder="请输入动态码" class="form-control"  required="required"/>
				<button id='get_dynamic_code' type="button" class="btn xs_wd btn-orange-plane">获 取</button>
				<input type="hidden" id='vcodeToken' name="vcodeToken" value=<%=request.getParameter("vcodeToken")%> >
			</div>
		</div>
		<div class="btn-wrap">
			<button type="submit" class="btn l_wd btn-white" onclick="return toVaild()">下一步</button>
		</div>
		<div class="tips">
			<a href="#" class="c_orange">重新获取验证码&gt;&gt;</a>
		</div>
	</form>
	</div>
</body>
<script type="text/javascript">
/* $(document).ready(function(){
	getCode();
}); */

$("#get_dynamic_code").bind("click", function(){
	getCode();
})

function getCode(){
	var mobile = $("input[name=mobileNo]").val();
	var vcodeToken = $("input[name=vcodeToken]").val();
	if(mobile.length == 0 || mobile.length != 11){
		MessageWin("手机号码输入不正确！", function(){});
		return false;
	}
	$.ajax({
		async: false,
		type: "post",
		dataType: 'json',
		url: 'phoneDynCode?verifyKind=5&mobileNo=' + mobile + "&vcodeToken=" + vcodeToken,
		success: function(data) {
			MessageWin(data.msg, function(){});
		}
	});
}

function toVaild(){
	if($("input[name=password]").val() == '' || $("input[name=password_confirm]").val() == ""){
	   	 MessageWin("密码不能为空", function(){});
		 return false;
	}
	if($("input[name=password]").val() != $("input[name=password_confirm]").val()){
		 MessageWin("两次输入密码不一致", function(){});
		 return false;
	}
}
</script>
</html>
