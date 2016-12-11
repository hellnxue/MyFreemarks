<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="../commen.jsp"></jsp:include>
<title>信贷GUI-征信验证3</title>
</head>
<body class="white_bg">
	<div class="header">
		<a href="index" class="icon ico_back"></a>
		征信验证
	</div>
	<div class="nav_wrap">
		<a href="javascript:void(0)" class="selected"><i class="nav_ico nav_ico_sfxx"></i>身份信息<i class="icon nav_ico_line"></i></a>
		<a href="javascript:void(0)" class="selected"><i class="nav_ico nav_ico_linkman"></i>联系人<i class="icon nav_ico_line"></i></a>
		<a href="javascript:void(0)" class="selected"><i class="nav_ico nav_ico_operator"></i>运营商<i class="icon nav_ico_line"></i></a>
		<a href="javascript:void(0)" class="selected"><i class="nav_ico nav_ico_credit"></i>征信验证</a>
	</div>
	<div class="maincontainer">
	<form action="credit_04" method="post">
		<div class="tips_info gray_bg">
			<i class="icon ico_sign"></i>征信报告仅用于评估代还信用卡的核准金额，不披露给任何与您本次贷款无关的第三方机构（包括本公司的关联公司）。
		</div>
		<div class="form_wrap">
			<div class="form-group">
				<label class="control-label">征信账号</label>
				<input type="text" name="creditAccount" value="" placeholder="请输入登陆名" class="form-control" required="required"/>
			</div>
			<div class="form-group">
				<label class="control-label">征信密码</label>
				<input type="text" name="creditPwd" value="" placeholder="请输入密码" class="form-control" required="required"/>
			</div>
			<div class="form-group">
				<label class="control-label">验证码</label>
				<input type="text" name="verifyCode" value="" placeholder="请输入验证码" class="form-control" required="required"/>
				<i class="icon ico_yzm"><img class="ico_yzm"></i>
				<input type="hidden" id='vcodeToken' name="vcodeToken" value=""/>
			</div>
		</div>
		<div class="login_entry">
			<a href="login_credit_01">您还没有征信账号？立即去注册</a>
		</div>
		<div class="btn-wrap">
			<button type="submit" class="btn l_wd btn-orange">授权登陆</button>
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
		url: 'vertifyCode?vcodeKind=1',
		success: function(data) {
			$("i>img").attr("src", data.result.vcodeUrl)
			$("input[id=vcodeToken]").val(data.result.vcodeToken);
		}
	});
}

</script>
</html>
