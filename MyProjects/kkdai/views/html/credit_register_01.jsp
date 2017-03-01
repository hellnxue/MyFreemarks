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
		<a href="credit_03" class="nav-left-icon"> <em></em>
		</a> 
		<h1 class="ctm-header-title">注册证信账号</h1>
	</header>

	<div class="maincontainer m-t-lg">

		<form action=" " method="post"  >
			<div class="form_wrap m-t-none p-t-none">
				<div class="form-group hm-form-group">
					<label class="control-label">身份证号码</label> 
					<input type="text"  value="${userSession.idCard}" placeholder="请输入身份证号码" class="form-control  "  readonly="readonly" />
				</div>
				<div class="form-group hm-form-group">
					<label class="control-label"><!-- <bdo class="c_orange">*</bdo> -->验证码</label> 
					<input type="text" name="verifyCode" value="" placeholder="请输入验证码" class="form-control validate" required="required" msg='验证码不能为空' style="width:55%;"/>
					<div class="ImageCode" id="getMobileCode"><img src="" alt="请点击重新获取"  /></div>
				</div>
			 
			</div>

			
			<div class="btn-wrap">
				<button type="button" class="btn  btn-orange ctm-box-shadow" id="regNext" >下一步</button>
			</div>

		</form>

	</div>
	<script>
		var  userId= '${userSession.userId}';
		var path="<%=request.getContextPath()%>";
	</script>
	<script src="<%=request.getContextPath()%>/resource/js/views/html/credit_register_01.js" type="text/javascript" ></script>  
  
</body>
</html>
