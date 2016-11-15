
var payOrderStatus="01";//审核状态标示

$(function(){
	
	 initPageParam();
	 
	 $("button[data-url]").each(function(index,el){
	     
	     $(el).on("click",function(){
	          location.href=$(this).data("url");
	      });
	 });
	 
	 $("button[data-anew]").on("click",function(){
		 
		 location.href="anewDocumentUpload.html";
	 });
	 
});

/*初始化页面数据*/
function initPageParam(){
	
	//获取当前商户用户信息
	/* if(user){
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
	} */
	
	//获取参数
	var content = getQueryUrlParamVal("obj");
	//解密
	if(content){
		//获取参数
		var desss = getEncriptParams(content,null);
		console.log(desss);
		//加载产品
		if(desss.productCode){
			$("#productCode").val(desss.productCode);
		}else{
			var product = findProducts(merCode);
			$("#productCode").val(product.productCode);
		}
		
		
		if(desss.orderStatus){//参数中的订单审核状态
			
			payOrderStatus=desss.orderStatus;
		
		}else{ //查询订单审核状态
			var merCode = trimStr($("#merCode").val());
			var merUserId = trimStr($("#merUserId").val());
			var productCode = trimStr($("#productCode").val());
			var request = {};
			request.merCode = '1000000';  // 商户号
			request.merUserId = '08593eb2-666a-4e5f-b1fa-3416cf1eaae1'; //商户用户号
			request.productCode = '600';
			payOrderStatus=getOrderStatus(request);
			
		}
		
		showByStatus(payOrderStatus);
	}
	
	
}


function getOrderStatus(requestObj){
	var orderStatus="";
	CommonUtil.executeAjax("0100007",requestObj,function(data) {
		var msgCode = data.responseBody.msgCode;
		console.log(data);
		 
		if (msgCode!='0') {
			promt(data.responseBody.msg);
			return;
		} else {
			if(data.responseBody.orderStatus){
				orderStatus=data.responseBody.orderStatus;
			}
		} 	 	
	}, false);
	
	return orderStatus;
}

/*根据审核状态动态显示部分页面*/
function showByStatus(flag){

	 var $rtSection=$("[data-type='txResult']");					//审核结果
	 var $rtFailSection=$("[data-type='rtResultFail']");			//审核失败
	 var $rtWaitingSection=$("[data-type='rtResultWaiting']");		//审核等待
	 var $rtAnewAuditSection=$("[data-type='rtResultAnewAudit']");	//重新审核
	 
	 $rtSection.hide();
	 $rtFailSection.hide();
	 $rtWaitingSection.show();
	 $rtAnewAuditSection.hide();
	 
	switch(flag){
		case "01":
			 $rtSection.hide();
			 $rtFailSection.hide();
			 $rtWaitingSection.show();
			 $rtAnewAuditSection.hide();
			 break;	
			 
		case "02":
			 $rtSection.show();
			 $rtFailSection.hide();
			 $rtWaitingSection.hide();
			 $rtAnewAuditSection.hide();
			 break;

		case "03":
			 $rtSection.hide();
			 $rtFailSection.show();
			 $rtWaitingSection.hide();
			 $rtAnewAuditSection.hide();
			 break;
			 
		case "04":
			 $rtSection.hide();
			 $rtFailSection.hide();
			 $rtWaitingSection.hide();
			 $rtAnewAuditSection.show();
			 break;
				 
	}
}