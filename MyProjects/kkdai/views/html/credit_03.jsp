<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="../commen_mui.jsp"></jsp:include>
<title>信贷GUI-征信验证3</title>
</head>
<body class="white_bg">
  	<!--提示-->
	 <div class="tips_main" style="display:none;">
			<p class="lead"></p>
	 </div>
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
	
	<form action="credit_04" method="post" id="cdForm">
		<div class="form_wrap" >
			<div class="form-group hm-form-group">
				<label class="control-label">账号</label>
				<input type="text" name="username" value="" placeholder="账号" class="form-control validate" required="required" msg='征信账号不能为空'/>
			</div>
			<div class="form-group hm-form-group">
				<label class="control-label">密码</label>
				<input type="password" name="password" value="" placeholder="密码" class="form-control validate" required="required" msg='征信密码不能为空'/>
			</div>
			<div class="form-group hm-form-group">
				<label class="control-label">查询码</label>
				<input type="text" name="queryCode" value="" placeholder="查询码" class="form-control validate" required="required" msg='征信查询码不能为空'/>
			</div>
		</div>
		 
		<div class="btn-wrap">
			<button type="button" class="btn l_wd btn-orange ctm-box-shadow" data-confirm>确认</button>
		</div>
	</form>
	
	
	
	<!-- <form action="credit_04" method="post">
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
			<button type="submit" class="btn l_wd btn-orange ctm-box-shadow">授权登陆</button>
		</div>
	</form> -->
	</div>
</body>
	<script>
	var  sessionUserId= '${userSession.userId}';
	</script>
	<script src="<%=request.getContextPath()%>/resource/js/views/html/credit_03.js" type="text/javascript" ></script>  
     
 
</html>
