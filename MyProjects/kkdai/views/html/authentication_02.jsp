<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="../commen.jsp"></jsp:include>
<title>信贷GUI-身份验证2</title>
<style type="text/css">
.pic-img-style {
	background : url(resource/images/photo_1@3x.png) no-repeat scroll right center / contain;  
	background-size:contain; 
	cursor:pointer;   
	display:block;   
	font-size:0;   
	line-height:0;   
	text-indent:-9999px; 
	border: none;
    text-align: center;
}

/* 证件识别文字 */
div.recognitionIDCard {
	color: #aaa;
    display: block;
    left: 50%;
    margin-left: -80px;
    margin-right: -80px;
    position: absolute;
    text-align: center;
    width: 160px;
}
</style>
 
</head>
<body class="white_bg">
	 <div class="tips_main" style="display:none;">
		<p class="lead"></p>
      </div>
	 <header class="ctm-header ctm-header-default">
		<a href="index" class="nav-left-icon" > <em></em>
		</a> 
		<!-- <a href="#" class="nav-right-icon"> <span>返回首页</span>
		</a> -->
		<h1 class="ctm-header-title">身份验证信息</h1>
	 </header>
	 
	<div class="nav_wrap">
		<a href="javascript:void(0)" class="selected"><i class="nav_ico nav_ico_sfxx"></i>身份信息<i class="icon nav_ico_line"></i></a>
		<a href="javascript:void(0)"><i class="nav_ico nav_ico_linkman"></i>联系人<i class="icon nav_ico_line"></i></a>
		<a href="javascript:void(0)"><i class="nav_ico nav_ico_operator"></i>运营商<i class="icon nav_ico_line"></i></a>
		<a href="javascript:void(0)"><i class="nav_ico nav_ico_credit"></i>征信验证</a>
	</div>
	<div class="maincontainer">
	<form id='authentication_03_form' action='authentication_03' method='post'>
		<div class="form_wrap">
		    <div class="form-group">
		    	<div data-type="recognitionIDCard" class="recognitionIDCard front"></div>
				<label class="control-label">身份证正面：</label>
				<input id='file1' type="file" name="" value="" accept="image/*" capture="camera"  class="validate form-control pic-img-style" msg='请上传身份证正面'>
				<img id="img1" imgType="101" name="img" width="100%" height="100%" style="display: none;" />
			    <input type="text" id="fileData" name="fileData" style='display: none;' />
				<!-- <i class="icon ico_camera_gray"></i> -->
			</div>
			<div class="form-group">
				<div data-type="recognitionIDCard" class="recognitionIDCard verso"></div>
				<label class="control-label">身份证反面：</label>
				<input id='file2' type="file" name="" value="" accept="image/*" class="validate form-control pic-img-style" capture="camera" msg='请上传身份证反面'>
				<img id="img2" imgType="102" name="img" width="100%" height="100%" style="display: none;" />
			    <input type="text" id="fileData" name="fileData" style='display: none;' />
				<!-- <i class="icon ico_camera_gray"></i> -->
			</div>
			<div class="form-group">
				<div data-type="recognitionIDCard" class="recognitionIDCard handel"></div>
				<label class="control-label">手持身份证：</label>
				<input id='file3' type="file" name="" value="" accept="image/*" class="validate form-control pic-img-style" capture="camera" msg='请上传手持身份证' >
				<img id="img3" imgType="103" name="img" width="100%" height="100%" style="display: none;" />
			    <input type="text" id="fileData" name="fileData" style='display: none;' />
				<!-- <i class="icon ico_camera_gray"></i> -->
			</div>
			<div class="form-group">
				<label class="control-label">姓　　名：</label>
				<input type="text" name="name" value="" class="form-control validate" required="required"  msg='请填写姓名' maxlength="50"/>
			</div>
			<div class="form-group">
				<label class="control-label">户籍地址：</label>
				<input type="text" name="address" value="" class="form-control validate" required="required" msg='请填写户籍地址' maxlength="100"/>
			</div>
			<div class="form-group">
				<label class="control-label">身份证号：</label>
				<input type="text" name="identityNo" value="" class="form-control validate" required="required"  msg='请填写身份证号' maxlength="18"/>
				<!-- <i class="icon ico_camera_gray"></i> -->
			</div>
			<div class="form-group">
				<label class="control-label">有效期：</label>
				<input type="text" name="validity" value="" class="form-control validate" required="required"   msg='请填写有效期' maxlength="21"/>
				<!-- <i class="icon ico_camera_gray"></i> -->
			</div>
		</div>
		<div class="btn-wrap">
			<!-- <button type="button" class="btn l_wd btn-orange" onclick="javascript:window.location.href='authentication_03'"> -->
			<button class="btn l_wd btn-orange ctm-box-shadow" type="submit" onclick="return checkNull()" >
			    <!-- <i class="icon ico_face"></i> -->下一步
			</button>
		</div>
		<div class="tips">
			<bdo class="c_orange">*</bdo>请填写真实有效的身份证信息，以便通过审核
		</div>
		</form>
	</div>
	<script src="<%=request.getContextPath()%>/resource/js/views/html/authentication_02.js" type="text/javascript" ></script>  
</body>
</html>
