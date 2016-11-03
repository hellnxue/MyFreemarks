function linkBtn(n){
	switch(n) { 
		case 1: document.uploadForm.image[0].click();break; 
		case 2: document.uploadForm.image[0].click();break; 
		case 3: document.uploadForm.image[0].click();break; 
	} 
}

function uploadIdCard(img,num) {
	lrz($("#" + img).prop ('files')[0], {width: 1024}, {quality: 0.5}).then(function (rst) {
			var url = "/emploan/credit/saveFilesToQiniu";
	  		var realpath = "/emploan/img/customerIdCard/"; //七牛云存储key前缀（查看图片时需用到此key获取图片地址）
	  		var businessKey = $("#idCardBypayUserId").val(); //businessKey传入业务活动ID，bypayUserId
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
					if (data == "succ") {
						setTimeout(function() {
							setImagePreview(num);
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