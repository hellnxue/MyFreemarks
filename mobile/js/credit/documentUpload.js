function fn_browse(n){
	  
	switch(n) { 
		case 1: document.uploadForm.image[0].click();break; 
		case 2: document.uploadForm.image[1].click();break; 
		case 3: document.uploadForm.image[2].click();break; 
	} 
}

function uploadIdCard(img,num) {
	setImagePreview(num);
	$("#progressModal").modal('show');
	$("#progressbar").css("width", "20%").html("20%");
	lrz($("#" + img).prop ('files')[0], {width: 1024}, {quality: 0.5}).then(function (rst) {
			rst.formData.append('base64Img', rst.base64);
   		//七牛云存储key前缀（查看图片时需用到此key获取图片地址）
	  		var realpath = "emploan/img/customerIdCard/";
	  		//businessKey传入业务活动ID，bypayUserId
	  		var businessKey = $("#idCardBypayUserId").val();
	  		var reqUrl = "systemController.do?saveFilesToQiniu&businessKey="
	  				+ businessKey + "&realpath=" + realpath + //此处表示七牛云key的前缀(不含文件名)
	  				"&note=" + encodeURIComponent(encodeURIComponent("七牛云存储")) + //备注
	  				"&documentTitle="
	  				+ encodeURIComponent(encodeURIComponent("客户身份证照片")); //文件标题
			$.ajax({
	        	url: reqUrl,
	            type: 'post',
	            data: rst.formData,
	            processData: false,
	            contentType: false,
	            success : function(data) {
	            	var d = $.parseJSON(data);
					if (d.success) {
						startbar();
						setTimeout(function() {
							$("#progressModal").modal('hide');
							$("#progressbar").css("width", "0%").html("0%");
							$("#" + img + "Hid").val(d.attributes.url);
							setImagePreview(num);
						}, 2000);
					}else{
		    			alert("上传失败,请重试");
		    		}
				}
			});
	});
}

function setImagePreview(num) {
	var preview, img_txt, localImag, file_head = document.getElementById("file_head" + num);
	if (preview = document.getElementById("preview" + num),
		file_head.files && file_head.files[0])
		preview.style.display = "block",
		preview.style.width = 210,
		preview.style.height = 120,
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