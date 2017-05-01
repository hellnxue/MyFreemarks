<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="../commen_mui.jsp"></jsp:include>
<title>信贷GUI-运营商1</title>

</head>
<body class="white_bg">

  	<!--提示-->
	 <div class="tips_main" style="display:none;">
			<p class="lead"></p>
	 </div>
	<header class="ctm-header ctm-header-default">
			<a href="javascript:void(0);" class="nav-left-icon" id="confirm"> <em></em> </a> 
			<h1 class="ctm-header-title">运营商</h1>
	</header>	
	<div class="nav_wrap">
		<a href="javascript:void(0)" class="selected"><i class="nav_ico nav_ico_sfxx"></i>身份信息<i class="icon nav_ico_line"></i></a>
		<a href="javascript:void(0)" class="selected"><i class="nav_ico nav_ico_linkman"></i>联系人<i class="icon nav_ico_line"></i></a>
		<a href="javascript:void(0)" class="selected"><i class="nav_ico nav_ico_operator"></i>运营商<i class="icon nav_ico_line"></i></a>
		<a href="javascript:void(0)"><i class="nav_ico nav_ico_credit"></i>征信验证</a>
	</div>

	<div class="maincontainer">
	    <form id='form1' action="getAirtel" method="post" >
		<div class="form_wrap">
			<div class="form-group hm-form-group">
				<label class="control-label">手机号码：</label>
				<input type="text" name="telephone" value="" class="form-control" required="required"/>
			</div>
			<div class="form-group hm-form-group">
				<label class="control-label">服务密码：</label>
				<input type="password" name="passWord" value="" placeholder="服务密码" class="form-control" required="required"/>
			</div>
		</div>
		<div class="tips">
			<bdo class="c_orange">*</bdo>忘记密码需要前往运营商网站修改密码或拨打运营商客服电话进行修改。
		</div>
		<div class="btn-wrap">
			<button type="button" class="btn l_wd btn-white ctm-box-shadow" id="btn_pwd" onclick="checkNull()">下一步</button>
		</div>
		<div class="pwd_gain_way">
			<div class="title">密码获取方式 </div>
			<h5>移动用户：</h5>
			<p>方法一：手机拨打10086转人工服务。</p>
			<p>方法二：手机登陆http://10086.cn，个人登录 - 忘记密码。</p>
			<h5>联通用户：</h5>
			<p>方法一：手机拨打10010转人工服务。</p>
			<p>方法二：手机登陆http://wap.10010.com，个人登录 - 忘记密码。</p>
			<h5>联通用户：</h5>
			<p>方法一：手机拨打10000转人工服务。</p>
			<p>方法二：手机登陆http://wapzt.189.cn，个人登录 - 忘记密码。</p>
		</div>
		</form>
	</div>
	<div class="mask_outer none"></div>
	<div class="layer-wrap none">
		<form id='form2' action="">
			<div class="bd">
				<input type="text" name="captcha" value="" placeholder="请输入验证码"
					class="form-control form-control-border mt20" />
			</div>
			<div class="btn-wrap">
				<!-- <button type="button" class="btn s_wd btn-orange" onclick="javascript:window.location.href='./operator_02.html'">提交</button> -->
				<button id='operator_01_cm' type="button"
					class="btn s_wd btn-orange">提交</button>
			</div>
			<input name='telephone' type="hidden"
				value=<%=request.getParameter("telephone")%>> <input
				name='passWord' type="hidden"
				value=<%=request.getParameter("passWord")%>>
		</form>
	</div>
	<script>
	var  userId= '${userSession.userId}';
	</script>
	<script src="<%=request.getContextPath()%>/resource/js/views/html/operator_01.js" type="text/javascript" ></script> 
</body>
</html>
