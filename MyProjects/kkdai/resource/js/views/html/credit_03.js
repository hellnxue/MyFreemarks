mui.init();
$(document).ready(function(){
	//getCode();
	zxConfirm();
});



function zxConfirm(){
	
	$("button[data-confirm]").on("click",function(){
		
		if(checkNull()){
			var dataObj=$(this).parents("form").serializeObject();
			dataObj.userId=sessionUserId;
			
			ajaxUtil({
				url:"juxinliDecision",
				data:dataObj,
				callback:function(data){
					if(data.code == "0000"){
						location.assign("credit_05");
						
						//是否进项运营商提额提示
						mui.confirm('是否进行运营商提额 ？', '提示', ['确认', '取消'], function(e) {
							if (e.index == 0) {
								 
								location="operator_01";
								 
							} else {
								
								ajaxUtil({
									url:"notice",
									data:{
										userId:sessionUserId,
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
						
					}else{
						promt( data.msg );
					}
				},
				failCallback:function(data){
					mui.alert("征信验证失败！", '提示',"确认");
				}
			});
		}
		

		
	});
}

function checkNull(){
	var validate = true;
	$(".validate").each(function(){
		if('' == $(this).val() || 'undefined' == $(this).val()){
			promt($(this).attr('msg'));
			validate = false;
			return false;
		}
	});	
	return validate;
}




//$("i>img").bind("click", function(){
//	 getCode();
//});

function getCode(){
	$.ajax({
		async: false,
		type: "post",
		dataType: 'json',
		url: 'vertifyCode?vcodeKind=1',
		success: function(data) {
			$("i>img").attr("src", data.result.vcodeUrl)
			$("input[id=vcodeToken]").val(data.result.vcodeToken);
		}
	});
}