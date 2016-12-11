var wait = 60; 
var sendCodeFlag=false;
if(!!param) {
    	var decode = window.atob(param);
    	if(!!decode && decode != 'undefined') {
    		console.log("参数:" + decode);
    		param = $.parseJSON(decode);
    	} else {
    		MessageWin("参数为空!");
    	}
    	
    } else {
    	MessageWin("解析参数失败");
    } 
	var json = {
			userId: sessionUserId
	}
	
	$(document).ready(function(){
		
		//确认还款
		$("#btn_repayment").on("click",function(e){
			var layerHTML=$("#ctCode").html();
			 var index=layer.open({
		  			anim: 'up',
		  			area: '500px' ,
		  			closeBtn:1,
		  			content: layerHTML,
		  			shadeClose:false
		  		});
		  	  
		  	  //获取验证码
		  	  $(".layui-m-layercont").find("#checkcode").get(0).onclick = dynamic; 
		  	  
		  	  //取消
		  	  $(".layui-m-layercont").find("button[data-cancel]").on("click",function(){
		  		  layer.close(index);
		  		  sendCodeFlag=false;
		  		  
		  	  });
		  	  
		  	  
		  	//确认-提前还款
		  	  $(".layui-m-layercont").find("button[data-confirm]").on("click",function(){
		  		  
		  		  if(!sendCodeFlag){
		  		     MessageWin("请点击获取验证码！");
		  			 return;
		  		  }
		  		  
		  		   var $selector=$(this).parents(".custom-code-wrapper ");
		  		   var phoneCode=$selector.find("input[data-input]").val(); //验证码
		  		   
		  		   if($.trim(phoneCode)==""){
		  			   MessageWin("请输入验证码！");
		  			   return;
		  		   }
		  		   
		  		   
				  $.post("kakadai/order/payOffLoan",{bid:param.bid, verifyCode:phoneCode, userId:sessionUserId },function(data){
					 if(data.code == "0000"){
						 window.location.href = "./bill_manage_01.html";
					 }else{
						 
						 MessageWin(data.msg);
					 }
				 });
		  		   
	  		  
		  	   });
		 });
		
		
		
		$.post("kakadai/order/redemptionBill",
				{userId: json.userId,account:'baifutianxia',bid: param.bid},
				function(res){
					var resdata = typeof res == 'string' ? $.parseJSON(res) : res;
					if(resdata.code != '0000') {
						MessageWin(resdata.msg);
						return;
					}
					var html = $("div.form_wrap").html();
					for(var k in resdata.result) {
						html = html.replace("#" + k + "#", resdata.result[k]);
					}
					var $formwrap = $("div.form_wrap");
					$formwrap.html(html);
					$formwrap.find(".displayno").removeClass("displayno");
					
//					checkButton.call(this,true);
					
				})
				.error(function(){
					MessageWin("ajax异常");
					//checkButton.call(this,true);
				});
		
		$("#pageback").on("click",function(){
			var href = $(this).attr("href");
			$(this).attr("href",href + "?param=" + param.orderId);
		});
	});
	
	
	function dynamic() {
//		var $selector=$(this).parents(".custom-code-wrapper");
//		$selector.find("button[data-confirm]").removeAttr("disabled"); //验证码
		sendCodeFlag=true;
		time(this);
	    $.post("phoneDynCode",{verifyKind:"HK", mobileNo: sessionMobile},function(){ });
		 
	}

	function time(o) {
		if (wait == 60) {
			//sendVerifyCode('verifyCode','');
		}
		if (wait == 0) {
			$(o).get(0).onclick = dynamic;
			$(o).html("获取验证码");
			$(o).removeAttr("style").addClass("catch");
			wait = 60;
		} else {
			$(o).get(0).onclick = null;
			$(o).html("(" + wait + ")重获验证码");
			//$(o).css("color", "#FF0000");
			wait--;
			setTimeout(function() {
				time(o);
			}, 1000);
		}
	}
	
	
	
	
	
	
	
	
	
	
//	 function checkButton(enable) {
//		 if(enable) {
//			 $("#btn_repayment").on("click",function(e){
//				 $(".mask_outer").show();
//				 $(".layer-wrap").show();
//			 }).removeClass("disabled");
//			 
//			 $("#btnCancel").on("click",function(){
//				 $(".mask_outer").hide();
//				 $(".layer-wrap").hide();
//			 });
//			 $("#btnSend").on("click",function(){
//				 //发送手机验证码
//				 $.post("phoneDynCode",{verifyKind:"4", mobileNo: "${userSession.mobilePhone}"},function(){
//					 $("#btnConfirm").on("click",function(){
//						 $.post("kakadai/order/payOffLoan",{bid:param.bid, verifyCode: $("input[name=verifyCode]").val(), userId:"${userSession.userId}" },function(data){
//							 if(data.code == "0000"){
//								 window.location.href = "./bill_manage_01.html";
//							 }else{
//								 MessageWin(data.msg, function(){})
//							 }
//						 })
//					 }).removeClass("disabled");
//				 });
//			 });
//			 
//			 
//		 }
//		 
//	 }