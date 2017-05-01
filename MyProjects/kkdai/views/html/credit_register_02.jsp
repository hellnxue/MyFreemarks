<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="../commen_mui.jsp"></jsp:include>
<title>信贷GUI-注册征信账号</title>
</head>
<body  >
  	<!--提示-->
	 <div class="tips_main" style="display:none;">
			<p class="lead"></p>
	 </div>
	<header class="ctm-header ctm-header-default">
		<a href="javascript:history.go(-1);" class="nav-left-icon"> <em></em>
		</a> 
		<h1 class="ctm-header-title">注册证信账号</h1>
	</header>

	<div class="maincontainer m-t-lg">

		<form action="credit_04" method="post" id="reg2Form">
			<input type="hidden" name="token">
			<input type="hidden" name="cookieString">
			<input type="hidden" name="tcId">
			<div class="form_wrap m-t-none p-t-none">
				<div class="form-group hm-form-group">
					<label class="control-label">授权账号</label>
					<input type="text"
						name="userName" value="" placeholder="请输入授权账号"
						class="form-control validate" required="required" msg='授权账号不能为空' />
				</div>
				<div class="form-group hm-form-group">
					<label class="control-label">授权密码</label> 
					<input type="password"
						name="userPwd" value="" placeholder="请输入授权密码"
						class="form-control validate" required="required" msg='授权密码不能为空' />
				</div>
				 

				<div class="form-group hm-form-group long-label">
					<label class="control-label">确认授权查询码</label>
					<input type="password"
						name="cuserPwd" value="" placeholder="请输入授权查询码"
						class="form-control validate" required="required" msg='确认授权查询码不能为空' />
				</div>
			 
			</div>

			<div class="form_wrap ">
				<div class="form-group hm-form-group">
					<label class="control-label">手机号码</label> 
					<input type="text"
						name="mobileNo" value="${userSession.mobilePhone}"   class="form-control  "   readonly="readonly"/>
				</div>
				<div class="form-group hm-form-group">
					<label class="control-label">校验码</label> 
					<input type="password" name="telAuthCode" value="" placeholder="请输入手机校验码" class="form-control validate" required="required" msg='校验码不能为空' />
					<div class="mobileCode" id="getMobileCode">获取验证码</div>
				</div>
				 

				<div class="form-group hm-form-group long-text">
					<label class="control-label">邮箱地址</label> 
					<input type="text"
						name="email" value="" placeholder="请输入邮箱地址"
						class="form-control validate" required="required" msg='邮箱地址不能为空' />
				</div>
			 
			</div>
			<div class="btn-wrap">
				<button type="button" class="btn  btn-orange ctm-box-shadow"  id="regNext2">立即注册</button>
			</div>

		</form>

	</div>
	<script>
		var  userId= '${userSession.userId}';
		var  cookieString= '${param.cookieString}';
		var  MobileCookieString=sessionStorage.getItem("MobileCookieString");
		
	</script>
	<script src="<%=request.getContextPath()%>/resource/js/views/html/credit_register_02.js" type="text/javascript" ></script>  
  
</body>
</html>
