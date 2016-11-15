var content;
$(function(){
	//获取当前商户用户信息
	if(user){
		//获取参数
		content = getQueryUrlParamVal("obj");
		//解密
		if(content){
			var desss =  getEncriptParams(content,null);
			var creditLimit ;
			//额度从删一个页面传过来
			creditLimit = desss.creditLimit;
			if(creditLimit){
				var talk = "目前可用的 "+creditLimit+" 元额度已放入您的钱包";
				$("#creditSum").html(talk);
			}
		}
		setTimeout(function() { 
			location = "../repay/withdrawals.html?obj="+content;
	    }, 10000);
	}else{
		CommonUtil.showLoading();
		jAlert("对不起，该用户为未授权用户，请检测您的登陆账号！");
	}
	
});


function jumpToPage (){
	location = "../repay/withdrawals.html?obj="+content;
}