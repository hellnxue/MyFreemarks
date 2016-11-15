// 基本信息验证
$(function(){
	//获取参数
	var content = getQueryUrlParamVal("obj");
	
	//解密
	var desss =  getEncriptParams(content,null);
	
	var customerName = decodeURI(desss.customerName);
	var merCode = desss.merCode;
	var idCardMd5 = desss.md5IdCard;
	
	$('#indexButton').bind("click", function(){
			location = 'baseInfo.html?obj='+content;
		});
});


