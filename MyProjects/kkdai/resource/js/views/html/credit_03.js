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
					console.log(data);
					if(data.code == "0000"){
						location.assign("credit_05");
					}else{
						promt("data.msg");
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