$(function(){
	
	loadData();
	
	$("#subbtn").bind('click',function(){
		initUploadForm();
	});
	
	$('body').on('click', '#downloadBtn', function(){
		var picUrl = createThumbnail($('#downloadUrl').text(),100,80);
		$('#downloadImg').attr('src', picUrl);
	});

	$("#confirm").bind('click',function(){
		oAuthAlipayLogin();
	});
	
	$("#wxLogin").bind('click',function(){
		oAuthWeChatLogin();
	});
});


//function loadData(){
//	var request = generateParams('0000000','{"userCode":"wanglijun"}');
//	$.ajax({
//		url: "/portal/access/doSubmit.do",
//		type: "POST",
//		data: request,
//		async : false,
//		success: function(data){	
//			var datas = eval("("+data+")");
//			var response = datas.responseBody;
//			alert(data);
//		},
//		error:function(data){
//			jAlert("系统繁忙！");
//		}
//	});
//}

//登录
function loadData(){
	var request = generateParams('0200002','{"userName":"来福","password":"321","isLock":"0"}');
	$.ajax({
		url: "/portal/access/doSubmit.do",
		type: "POST",
		data: request,
		async : false,
		success: function(data){	
			var datas = eval("("+data+")");
			var response = datas.responseBody;
			alert(data);
		},
		error:function(data){
			jAlert("系统繁忙！");
		}
	});
}

//// 修改头像
//function loadData(){
//	var request = generateParams('0200003','{"empId":"11","photoAddress":"狗头"}');
//	$.ajax({
//		url: "/portal/access/doSubmit.do",
//		type: "POST",
//		data: request,
//		async : false,
//		success: function(data){	
//			var datas = eval("("+data+")");
//			var response = datas.responseBody;
//			alert(data);
//		},
//		error:function(data){
//			jAlert("系统繁忙！");
//		}
//	});
//}

////修改密码
//function loadData(){
//	var request = generateParams('0200004','{"empId":"11","oldPassword":"321","newPassword":"765"}');
//	$.ajax({
//		url: "/portal/access/doSubmit.do",
//		type: "POST",
//		data: request,
//		async : false,
//		success: function(data){	
//			var datas = eval("("+data+")");
//			var response = datas.responseBody;
//			alert(data);
//		},
//		error:function(data){
//			jAlert("系统繁忙！");
//		}
//	});
//}

////修改昵称
//function loadData(){
//	var request = generateParams('0200005','{"empId":"11","nickName":"小菲菲"}');
//	$.ajax({
//		url: "/portal/access/doSubmit.do",
//		type: "POST",
//		data: request,
//		async : false,
//		success: function(data){	
//			var datas = eval("("+data+")");
//			var response = datas.responseBody;
//			alert(data);
//		},
//		error:function(data){
//			jAlert("系统繁忙！");
//		}
//	});
//}

////查询收单任务
//function loadData(){
//	var request = generateParams('0200007','{"empId":"2"}');
//	$.ajax({
//		url: "/portal/access/doSubmit.do",
//		type: "POST",
//		data: request,
//		async : false,
//		success: function(data){	
//			var datas = eval("("+data+")");
//			var response = datas.responseBody;
//			alert(data);
//		},
//		error:function(data){
//			jAlert("系统繁忙！");
//		}
//	});
//}

/**
 * 万象优图上传图片
 */
function initUploadForm () {
	// 获取签名的链接
	// 通过业务登陆态检查来增强安全性，避免签名被非法获取
	var request = generateParams('0100032','{"type":"upload"}');
	$.ajax({
		url: "/portal/access/doSubmit.do",
		type: "POST",
		data: request,
		async : false,
		success: function(data){	
			var datas = eval("("+data+")");
			var response = datas.responseBody;
			var sign = response.sign;
//			alert(sign);
		    var url = response.url + '?sign=' + encodeURIComponent(sign);
			//var url = response.url + '?sign=V9adfbSKIP518AZULNUVBRxZhnBhPTEwMDA1MDU1JmI9ZGVtb3NwYWNlJms9QUtJRFBJdHNkZjQ3WHphSDJFcU9Nc0FOYXlITFFsaFhlaWJYJmU9MTQ0MzY5ODA5NyZ0PTE0NDExMDYwOTcmcj00MTYwOTE0MzYmdT0wJmY9';
			//var url = 'http://web.image.myqcloud.com/photos/v2/10000001/testa/0?sign=M+fGdcTKULfw1NvcIWAIRioH275hPTEwMDAwMDAxJmI9dGVzdGEmaz1BS0lETlp3RFZoYlJ0ZEdrTVpRZldnbDJHbm4xZGhYczk1QzAmZT0xNDQzNjk1NzQ1JnQ9MTQ0MTEwMzc0NSZyPTE2MzAyNDMxNzgmdT0wJmY9';
		    $('#sign').text(sign);	
			var options = { 
	                    type: 'post',
	                    url: url,
	                    dataType: 'json',
			    success:function(ret) { 
			    	$('#downloadUrl').html(ret.data.download_url);
			    	$('#fileid').text(ret.data.fileid);	    	
			    	$('#url').text(ret.data.url);
			    	$('#downloadRet').show();
			    },
			    error:function (ret) {
			    	alert(ret.responseText);
			    }
			}; 		 
			$('#uploadForm').ajaxForm(options);
		},
		error:function(data){
			jAlert("系统繁忙！");
		}
	});
}	

/**
 * @author jianbo.kong
 * 
 * 生成图片缩略图
 * @param downloadUrl  生成的下载url
 * @param ss  缩放方式(value:1 or 0)  
 * 			  1: 限定长边，短边自适应缩放; 0：限定短边，长边自适应缩放
 * @param width  图片宽  取值范围10-16383 
 * @param height  图片高  取值范围10-16383 			   
 */
function createThumbnail_V2(downloadUrl,ss,width,height){
	var url = downloadUrl+'?ss='+ss+'&w='+width+'&h='+height;
	return url;
}	


/**
 * @author jianbo.kong
 * 
 * 生成图片缩略图
 * @param downloadUrl  生成的下载url
 * @param width  图片宽 
 * @param height  图片高 			   
 */
function createThumbnail(downloadUrl,width,height){
	var url = downloadUrl+'?imageView2/2/w/'+width+'/h/'+height;
	return url;
}

/**
 * 支付宝第三方登陆
 */
function oAuthAlipayLogin() {
	var request = generateParams('0100036','{"type":"1"}');
	$.ajax({
		url: "/portal/access/doSubmit.do",
		type: "POST",
		data: request,
		async : false,
		success: function(data){	
			var datas = eval("("+data+")");
			var response = datas.responseBody;
			//alert(response.url);
			//window.location.href=response.url;
			window.open(response.url,'_blank') 
		},
		error:function(data){
			jAlert("系统繁忙！");
		}
	});
}

/**
 * 微信第三方登陆
 */
function oAuthWeChatLogin() {
	var request = generateParams('0100036','{"type":"0"}');
	$.ajax({
		url: "/portal/access/doSubmit.do",
		type: "POST",
		data: request,
		async : false,
		success: function(data){	
			var datas = eval("("+data+")");
			var response = datas.responseBody;
			//alert(response.url);
			//window.location.href=response.url;
			window.open(response.url,'_blank') 
		},
		error:function(data){
			jAlert("系统繁忙！");
		}
	});
}
