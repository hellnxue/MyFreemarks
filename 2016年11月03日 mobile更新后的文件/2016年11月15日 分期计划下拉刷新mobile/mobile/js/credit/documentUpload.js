$(function(){
	//获取参数
	var content = getQueryUrlParamVal("obj");
	//解密
	if(content){
		//获取参数
		var desss = getEncriptParams(content,null);
		//加载产品
		if(desss.productCode){
			$("#productCode").val(desss.productCode);
		}else{
			var product = findProducts(merCode);
			$("#productCode").val(product.productCode);
		}
	}
	
	//获取当前商户用户信息
	if(user){
		var merCode = user.merCode;
		var merUserId = user.merUserId;
		if(merUserId){
			$("#merUserId").val(merUserId);
		}
		if(merCode){
			$("#merCode").val(merCode);
		}
	}else{
		CommonUtil.showLoading();
		jAlert("对不起，该用户为未授权用户，请检测您的登陆账号！");
	}
	
	$("[data-type]").on("click",function(){
		linkBtn(Number($(this).data("type")));
	});
});

function linkBtn(n){
	switch(n) { 
		case 1: document.uploadForm.image1.click();break; 
		case 2: document.uploadForm.image2.click();break; 
		case 3: document.uploadForm.image3.click();break; 
	} 
}

function uploadIdCard(img,num) {
	lrz($("#" + img).prop ('files')[0], {width: 1024}, {quality: 0.5}).then(function (rst) {
			var url = "/emploan/credit/saveFilesToQiniu";
	  		var realpath = "/emploan/img/customerIdCard/"; //七牛云存储key前缀（查看图片时需用到此key获取图片地址）
	  		var businessKey = $("#bypayUserId").val(); //businessKey传入业务活动ID，bypayUserId
	  		var note = "七牛云存储"; //备注
	  		var documentTitle = "客户身份证照片"; //文件标题
	  		rst.formData.append('base64Img', rst.base64);
	  		rst.formData.append('realpath',realpath);
	  		rst.formData.append('businessKey',businessKey);
	  		rst.formData.append('note',note);
	  		rst.formData.append('documentTitle',documentTitle);
			$.ajax({
	        	url: url,
	            type: 'post',
	            data: rst.formData,
	            processData: false,
	            contentType: false,
	            success : function(data) {
					if (data.status == "succ") {
						setTimeout(function() {
							setImagePreview(num);
							$("#key" + num).val(data.key);
							$("#"+img+" + a").nextAll().removeClass("coverHidden").addClass("coverShow");
						}, 1000);
					}else{
		    			alert("上传失败,请重试");
		    		}
				}
			});
	});
}

function setImagePreview(num) {
	var preview, img_txt, localImag, file_head = document.getElementById("uploadFile" + num);
	if (preview = document.getElementById("preview" + num),
		file_head.files && file_head.files[0])
		preview.src = window.navigator.userAgent.indexOf("Chrome") >= 1	|| 
		              window.navigator.userAgent.indexOf("Safari") >= 1 ? window.webkitURL.createObjectURL(file_head.files[0])
						                                                        : window.URL.createObjectURL(file_head.files[0]),
		$("#photoView"+num).val(true);	   
	else {
		file_head.select(), file_head.blur(),
				img_txt = document.selection.createRange().text,
				localImag = document.getElementById("localImag"),
				localImag.style.width = "100px",
				localImag.style.height = "100px";
		try {
					localImag.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)",
					localImag.filters
							.item("DXImageTransform.Microsoft.AlphaImageLoader").src = img_txt;
		} catch (f) {
			return alert("您上传的图片格式不正确，请重新选择！"), !1;
		}
		preview.style.display = "none", document.selection.empty();
	}
}

function f_commit(bt){
	
	commitCheck(bt,2000);
	
	var faceIdCard = trimStr($("#key1").val());
	if (!faceIdCard) {
		promt("请上传身份证正面照片");
		return;
	}
	
	var rearIdCard = trimStr($("#key2").val());
	if (!rearIdCard) {
		promt("请上传身份证背面照片");
		return;
	}
	
	var handIdCard = trimStr($("#key3").val());
	if (!handIdCard) {
		promt("请上传手持身份证照片");
		return;
	}
	
	var productCode = trimStr($("#productCode").val());
	if (!productCode) {
		promt("未加载到产品相关信息");
		return;
	}
	
	var merCode = trimStr($("#merCode").val());
	var merUserId = trimStr($("#merUserId").val());
	var faceIdCard = trimStr($("#key1").val());
	var rearIdCard = trimStr($("#key2").val());
	var handIdCard = trimStr($("#key3").val());
	var request = {};
	request.merCode = merCode;  // 商户号
	request.merUserId = merUserId; //商户用户号
	request.faceIdCard = faceIdCard; //身份证正面照片key
	request.rearIdCard = rearIdCard; //身份证背面照片key
	request.handIdCard = handIdCard; //手持身份证照片key
	request.productCode = productCode;
	CommonUtil.executeAjax("0100003",request,function(data) {
		var msgCode = data.responseBody.msgCode;
		// 基本信息是否正确 0:不正确 1:正确
		if (msgCode!='0') {
			promt(data.responseBody.msg);
			return;
		} else {
			var obj = JSON.stringify(data.responseBody);
			var desss =  getEncriptParams(obj,"encrypt");
			location = 'creditSubmitSucc.html?obj='+desss;
		} 	 	
	}, false);
}
