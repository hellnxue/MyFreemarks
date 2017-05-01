<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="../commen.jsp"></jsp:include>
<title>信贷GUI-征信验证2</title>
</head>
<body class="white_bg">
	<header class="ctm-header ctm-header-default">
		<a href="index" class="nav-left-icon"> <em></em>
		</a> 
		<h1 class="ctm-header-title">征信验证</h1>
	</header>
	<div class="nav_wrap">
		<a href="javascript:void(0)" class="selected"><i class="nav_ico nav_ico_sfxx"></i>身份信息<i class="icon nav_ico_line"></i></a>
		<a href="javascript:void(0)" class="selected"><i class="nav_ico nav_ico_linkman"></i>联系人<i class="icon nav_ico_line"></i></a>
		<a href="javascript:void(0)" class="selected"><i class="nav_ico nav_ico_operator"></i>运营商<i class="icon nav_ico_line"></i></a>
		<a href="javascript:void(0)" class="selected"><i class="nav_ico nav_ico_credit"></i>征信验证</a>
	</div>
	<div class="maincontainer">
	<form action="credit_02" method="post">
		<div class="tips_info gray_bg">
			<i class="icon ico_sign"></i>恭喜！身份认证信息已提交征信中心审核，审核通过后，将发送<bdo class="c_orange">查询码</bdo>至您手机（24小时内）
		</div>
		<div class="form_wrap">
			<div class="form-group">
				<label class="control-label">查询码</label>
				<input type="text" name="queryCode" value="" placeholder="请输入查询码" class="form-control" />
			</div>
			<div class="form-group">
				<label class="control-label">验证码</label>
				<input type="text" name="vercode" value="" placeholder="服务密码" class="form-control" />
				<i class="icon ico_yzm"><img class="ico_yzm"></i>
				<input type="hidden" id='vcodeToken' name="vcodeToken" value="">
				<input type="hidden" name="username" value=<%=request.getParameter("creditAccount")%> >
				<input type="hidden" name="password" value=<%=request.getParameter("creditPwd")%> >
			</div>
		</div>
				<i>${msg}</i>
		<div class="btn-wrap">
			<button type="submit" class="btn l_wd btn-white">提交</button>
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
		url: 'vertifyCode?vcodeKind=2',
		success: function(data) {
			$("i>img").attr("src", data.result.vcodeUrl)
			$("input[id=vcodeToken]").val(data.result.vcodeToken);
		}
	});
}

</script>
</html>
