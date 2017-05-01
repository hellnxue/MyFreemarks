
var wait = 60;
var sendCodeFlag=false;
mui.init();

$(document).ready(function(){
	  //获取验证码
	  $("#getMobileCode").get(0).onclick = dynamic; 
	  
	  regNext2();
});

 

function time(o) {
	if (wait == 0) {
		
		$(o).get(0).onclick = dynamic;
		$(o).html("获取验证码");
		 
		wait = 60;
		
	} else {
		
		$(o).get(0).onclick = null;
		$(o).html( wait + "s<bdo style='color:#999'>后重发</bdo>");
		wait--;
		setTimeout(function() {
			time(o);
		}, 1000);
	}
}

function dynamic() {
//	var th=this;
//	time(th);
	 
	var th=this;
		
    $.post("phoneDynCode",
    		{
	    	verifyKind:"CRERE",
	    	userId:userId,
	    	cookieString:MobileCookieString   
	    	},function(data){ 
    	 
    	if(data.code=="0000"){
    		 
    		time(th);
    		$("input[name=cookieString]").val(data.result.cookieString);
    		$("input[name=tcId]").val(data.result.tcId);
    		
    	}else{
    		
    		 mui.toast(data.msg,{ duration:'short', type:'div' }) ;  
    		 
    	}
    	
    });
	 
	

}


//补充注册账号
function regNext2(){
	
	$("#regNext2").on("click",function(){
		if(formValidation($(this).parents("form"))){
			var pwd=$("input[name=userPwd]").val(),
				cpwd=$("input[name=cuserPwd]").val();
			if(pwd!=cpwd){
				promt("确认授权查询码与授权密码不一致！");
				return;
			}
			
			var paramObj=$("#reg2Form").serializeObject();
			
			paramObj.userId=userId;
			delete paramObj.cuserPwd;
			delete paramObj.mobileNo;
			
//			console.log(JSON.stringify(paramObj));
			
			 ajaxUtil({
				 url:"queryAccountBalance",
				 data:paramObj,
				 callback:function(data){
					 
					 if(data.code&&data.code=="0000"){
 						
 						mui.alert("补充账号注册成功！", '提示',"确认",function(e){
							 
							location="credit_03";//征信验证
							 
					    });
 						
					 }else if(data.code=="1041"){
						 
						 mui.alert("注册名已存在！", '提示',"确认");
						 
					 }else{
						 promt(data.msg);
					 }
				 },
				 failCallback:function(data){
					 mui.toast(data.msg,{ duration:'short', type:'div' }) ;
				 }
			 });
			
		}
	});
	
	
	
}