mui.init();

ajaxHandleFlag=false; 
var regObj={userId:userId};

$(document).ready(function(){
	getImageCode();
	 
	 $("#getMobileCode").on("click",function(){
		 getImageCode( ); 
	 });
	 
	 nextStap();
	 
});

 
 function getImageCode(param){
 	
	 $("img").attr("src",path +"/resource/images/main/v1/loading.gif").css("width","15%").parent().addClass("text-center");
	 ajaxUtil({
		 url:"vertifyCode",
		 data:{vcodeKind:2},
		 callback:function(data){
			 
			 if(data.code&&data.code=="0000"){
				 
				 
				 $("img").attr("src","data:image/jpeg;base64," + data.result.base64Captcha);
				 setTimeout(function(){
					 $("img").css("width","100%").parent().removeClass("text-center");

				 },100);
				 regObj.token=data.result.token;
				 regObj.cookieString=data.result.cookieString;
			 }else{
				// $("img").attr("src","");
//				 mui.toast(data.msg,{ duration:'short', type:'div' }) ;
				 console.log(data.msg);
				 promt(data.msg);
			 }
		 },
		 failCallback:function(data){
			 $("img").attr("src","");
			 mui.toast(data.msg,{ duration:'short', type:'div' }) ;
		 }
	 });
	 
 
 }
 
 
 //注册
 function nextStap(){
	 $("#regNext").on("click",function(){

		 if(formValidation($(this).parents("form"))){
			 regObj.verifyCode=$("input[name=verifyCode]").val();
			 ajaxUtil({
				 url:"registerCreditAccount",
				 data:regObj,
				 callback:function(data){
					 
					 if(data.code&&data.code=="0000"){
						 
						 mui.alert("身份验证成功！", '提示',"确认",function(e){
							 
							 sessionStorage.setItem("MobileCookieString",data.result.cookieString);
							 location="credit_register_02";
								 
						    });
						 
						
						 
					 }else{
						 promt(data.msg);
						 getImageCode( ); 
					 }
				 },
				 failCallback:function(data){
					 mui.toast(data.msg,{ duration:'short', type:'div' }) ;
				 }
			 });
		 }
	 });
	 
	 
	
	 
 }