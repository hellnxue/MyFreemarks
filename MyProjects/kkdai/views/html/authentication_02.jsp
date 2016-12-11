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
<script type="text/javascript">
function checkNull(){
	var validate = true;
	$(".validate").each(function(){
		if('' == $(this).attr("value") || 'undefined' == $(this).attr("value")){
			MessageWin($(this).attr('msg') );
			validate = false;
			return false;
		}
	});
	return validate;
}
</script>
</head>
<body class="white_bg">
	<div class="header">
		<a href="index" class="icon ico_back"></a>
		身份验证信息
	</div>
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
				<input id='file1' type="file" name="" value="" accept="image/*" class="validate form-control pic-img-style" capture="camera" msg='请上传身份证正面'>
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
				<label class="control-label">手持身份证：</label>
				<input id='file3' type="file" name="" value="" accept="image/*" class="validate form-control pic-img-style" capture="camera" msg='请上传手持身份证'>
				<img id="img3" imgType="103" name="img" width="100%" height="100%" style="display: none;" />
			    <input type="text" id="fileData" name="fileData" style='display: none;' />
				<!-- <i class="icon ico_camera_gray"></i> -->
			</div>
			<div class="form-group">
				<label class="control-label">姓　　名：</label>
				<input type="text" name="name" value="" class="form-control" required="required"/>
			</div>
			<div class="form-group">
				<label class="control-label">户籍地址：</label>
				<input type="text" name="address" value="" class="form-control" required="required"/>
			</div>
			<div class="form-group">
				<label class="control-label">身份证号：</label>
				<input type="text" name="identityNo" value="" class="form-control" required="required"/>
				<!-- <i class="icon ico_camera_gray"></i> -->
			</div>
			<div class="form-group">
				<label class="control-label">有效期：</label>
				<input type="text" name="validity" value="" class="form-control" required="required"/>
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
</body>
<script type="text/javascript">
	var pre;//源图片名称

	/**
	 * 获得base64
	 * @param {Object} obj
	 * @param {Number} [obj.width] 图片需要压缩的宽度，高度会跟随调整
	 * @param {Number} [obj.quality=0.8] 压缩质量，不压缩为1
	 * @param {Function} [obj.before(this, blob, file)] 处理前函数,this指向的是input:file
	 * @param {Function} obj.success(obj) 处理后函数
	 *
	 */
	$.fn.localResizeIMG = function(obj) {
		this.on('change', function() {
			
			var file = this.files[0];
			pre = file.name;
			
			var URL = window.URL || window.webkitURL;
			
			var blob = URL.createObjectURL(file);
			
			
			// 执行前函数
			if ($.isFunction(obj.before)) {
				obj.before(this, blob, file);
			}
			
			
			_create(blob, file);
			this.value = ''; // 清空临时数据
		});

		/**
		 * 生成base64
		 * @param blob 通过file获得的二进制
		 */
		function _create(blob) {
			var img = new Image();
			img.src = blob;
			img.onload = function() {
				
				var that = this;
				//生成比例
				var w = that.width, h = that.height, scale = w / h;
				w = obj.width || w;
				h = w / scale;
				//生成canvas
				var canvas = document.createElement('canvas');
				var ctx = canvas.getContext('2d');
				$(canvas).attr({
					width : w,
					height : h
				});
				ctx.drawImage(that, 0, 0, w, h);
				/**
				 * 生成base64
				 * 兼容修复移动设备需要引入mobileBUGFix.js
				 */
				var base64 = canvas.toDataURL('image/jpeg', obj.quality || 0.8);
				
				// 修复IOS
				if (navigator.userAgent.match(/iphone/i)) {
					var mpImg = new MegaPixImage(img);
					mpImg.render(canvas, {
						maxWidth : w,
						maxHeight : h,
						quality : obj.quality || 0.8
					});
					base64 = canvas.toDataURL('image/jpeg', obj.quality || 0.8);
				}
				// 修复android
				if (navigator.userAgent.match(/Android/i)) {
					var encoder = new JPEGEncoder();
					base64 = encoder.encode(ctx.getImageData(0, 0, w, h),
							obj.quality * 100 || 80);
				}
				
				
				// 生成结果
				var result = {
					base64 : base64,
					clearBase64 : base64.substr(base64.indexOf(',') + 1)
				};
				
				// 执行后函数
				
				obj.success(result);
			};
		}
	};

	$(function() {
		$("input[id=file1]").each(
				function() {
					
					var _this = $(this);
					_this.localResizeIMG({
						width : 400,
						quality : 0.8,
						success : function(result) {
							//获取后缀名
							var att = pre.substr(pre.lastIndexOf("."));
							//压缩后图片的base64字符串
							var base64_string = result.clearBase64;
							//图片预览
							var imgObj = $("#img1");
							//imgObj.attr("src", "data:image/jpeg;base64," + base64_string).show();
							imgObj.attr("src", "data:image/jpeg;base64," + base64_string);
							//拼接data字符串，传递会后台
							var fileData = $("#fileData");
							fileData.val(att + "," + imgObj.attr("src"));
							/* var type = imgObj.attr("imgType");
							alert(type); */
							//此处可直接使用ajax上传，也可存于form，表单提交上传
							//此处例子使用ajax提交
							var $rtCard=$('div[data-type="recognitionIDCard"]').filter(".front");//识别提示部分
							$rtCard.html("信息自动识别中...").css("display","block");
							$.ajax({
								type : "POST",
								url : "authentication_card_num",
								data :{
									file : fileData.val(),
									type : imgObj.attr("imgType")
								},
								dataType : "json",
								success : function(msg) {
									if(msg.code == "0000"){
										imgObj.parent().find('input[id=file1]').attr("value", "101");
										if('null' == msg.result || '' == msg.result){
											$rtCard.html("信息识别失败");
											MessageWin("识别失败");
											
											return ;
										}
										
										if(msg.result.id_number&&msg.result.id_number!=""){
											$rtCard.html("信息自动识别");
											$("input[name=name]").val(msg.result.name);
											$("input[name=address]").val(msg.result.address);
											$("input[name=identityNo]").val(msg.result.id_number);
										}else{
											$rtCard.html("信息识别失败");
											MessageWin("识别失败");
										}
									}else {
										$rtCard.html("信息识别失败");
										MessageWin(msg.msg);
									}
								}
							});

						}
					});
				});
	});
	
	$(function() {
		$("input[id=file2]").each(
				function() {
					var _this = $(this);
					_this.localResizeIMG({
						width : 400,
						quality : 0.8,
						success : function(result) {
							//获取后缀名
							var att = pre.substr(pre.lastIndexOf("."));
							//压缩后图片的base64字符串
							var base64_string = result.clearBase64;
							//图片预览
							var imgObj = $("#img2");
							//imgObj.attr("src", "data:image/jpeg;base64," + base64_string).show();
							imgObj.attr("src", "data:image/jpeg;base64," + base64_string);
							//拼接data字符串，传递会后台
							var fileData = $("#fileData");
							fileData.val(att + "," + imgObj.attr("src"));
							/* var type = imgObj.attr("imgType");
							alert(type); */
							//此处可直接使用ajax上传，也可存于form，表单提交上传
							//此处例子使用ajax提交
							var $rtCard=$('div[data-type="recognitionIDCard"]').filter(".verso");//识别提示部分
							$rtCard.html("信息自动识别中...").css("display","block");
							$.ajax({
								type : "POST",
								url : "authentication_card_num",
								data :{
									file : fileData.val(),
									type : imgObj.attr("imgType")
								},
								dataType : "json",
								success : function(msg) {
									if(msg.code == "0000"){
										if('null' == msg.result || '' == msg.result){
											$rtCard.html("信息识别失败");
											MessageWin("识别失败" );
											return ;
										}
										if(msg.result.validity&&msg.result.validity!=""){
											$rtCard.html("信息自动识别");
											imgObj.parent().find('input[id=file2]').attr("value", "102");
											$("input[name=validity]").val(msg.result.validity);
										}else{
											$rtCard.html("信息识别失败");
										}
										
									}else {
										$rtCard.html("信息识别失败");
										MessageWin(msg.msg );
									}
								}
							});

						}
					});
				});
	});
	$(function() {
		$("input[id=file3]").each(
				function() {
					var _this = $(this);
					_this.localResizeIMG({
						width : 400,
						quality : 0.8,
						success : function(result) {
							//获取后缀名
							var att = pre.substr(pre.lastIndexOf("."));
							//压缩后图片的base64字符串
							var base64_string = result.clearBase64;
							//图片预览
							var imgObj = $("#img3");
							//imgObj.attr("src", "data:image/jpeg;base64," + base64_string).show();
							imgObj.attr("src", "data:image/jpeg;base64," + base64_string);
							//拼接data字符串，传递会后台
							var fileData = $("#fileData");
							fileData.val(att + "," + imgObj.attr("src"));
							/* var type = imgObj.attr("imgType");
							alert(type); */
							//此处可直接使用ajax上传，也可存于form，表单提交上传
							//此处例子使用ajax提交
							$.ajax({
								type : "POST",
								url : "authentication_card_num",
								data :{
									file : fileData.val(),
									type : imgObj.attr("imgType")
								},
								dataType : "json",
								success : function(msg) {
									imgObj.parent().find('input[id=file3]').attr("value", "103");
								}
							});

						}
					});
				});
	});
</script>
</html>
