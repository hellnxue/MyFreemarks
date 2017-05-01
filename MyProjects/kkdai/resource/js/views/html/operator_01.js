mui.init();
$(document).ready(function(){
		var website = "";
		var token = "";
		//下一步
		$("#btn_pwd").click(function(){
			if('' == $("input[name='telephone']").val() || "" == $("input[name='passWord']").val()){
				/* MessageWin("信息填写不完整", function(){}); */
				promt("信息填写不完整！");
				return;
			}
			$.ajax({
				async: false,
				type: "post",
				dataType: 'json',
				url: "getAirtel",
				data: {telephone : $("input[name='telephone']").val(),
					   passWord : $("input[name='passWord']").val()},
				success: function(msg){
					if("0000" == msg.code){
						if("10008" == msg.result.processCode){
							// window.location.href="credit_03";
							window.location.href="withdraw_cash";
						}else if("10001" == msg.result.processCode){
							$(".mask_outer").show();
							$(".layer-wrap").show();
						}else if("10002" == msg.result.processCode){
							$(".mask_outer").show();
							$(".layer-wrap").show();
							token = msg.result.token;
							website = msg.result.website;
						}else {
							MessageWin(msg.msg );
						}
					}else {
						MessageWin(msg.msg );
					}
				}
			}); 
	    });
		
		$("#operator_01_cm").bind("click", function(){
			$.ajax({
				async: false,
				type: "post",
				dataType: 'json',
				url: "getAirtel",
				data: {website: website,
					   captcha:  $("input[name=captcha]").val(),
					   telephone:  $("input[name=telephone]").val(),
					   passWord:  $("input[name=passWord]").val(),
					   token:  token},
				success: function(msg){
					if("0000" == msg.code){
						window.location.href="operator_02";
						 //window.location.href="withdraw_cash";
					}else{
						MessageWin(msg.msg );
					}
				}
			});
		});
		
		//是否结束运营商提额 
		$("#confirm")[0].addEventListener("tap",function(){
			mui.confirm('是否结束运营商提额  ？', '提示', ['确认', '取消'], function(e) {
				if (e.index == 0) {
					 
					ajaxUtil({
						url:"notice",
						data:{
							userId:userId,
							type:1,
							result:0,
						},
						callback:function(data){
							if(data.code=="0000"){
								
								location="index";
								 
							}else{
								mui.toast(data.msg,{ duration:'short', type:'div' }) ;
							}
							
						},
						failCallback:function(data){
							mui.toast("网络请求错误！请重试",{ duration:'short', type:'div' }) ;					
						}
					});					 
				}  
			});
		});
	});
	
	function checkNull(){
		var validate = true;
		$(".validate").each(function(){
			if('' == $(this).val() || 'undefined' == $(this).val()){
				MessageWin($(this).attr('msg'), function(){});
				validate = false;
				return false;
			}
		});	
	}