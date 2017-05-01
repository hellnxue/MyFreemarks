mui.init();
hasIframe=true;
var questionAry=[];
var checkedQtnPrmObj={};

ajaxHandleFlag=false;//关闭进度提示 
//var regObj={userId:userId};

$(document).ready(function(){
	 getImageCode();
	 
	 $("#getMobileCode").on("click",function(){
		 getImageCode( ); 
	 });
	 
	 nextStap();
	 
	 checkQuestions();
	 
	 
});

 /*获取图片验证码*/
 function getImageCode(param){
 	
	 $("img").attr("src",path +"/resource/images/main/v1/loading.gif").css("width","15%").parent().addClass("text-center");
	 ajaxUtil({
		 url:"vertifyCode",
		 data:{vcodeKind:1},
		 callback:function(data){
			 
			 if(data.code&&data.code=="0000"){
				 
				 $("img").attr("src","data:image/jpeg;base64," + data.result.base64Captcha);
				 setTimeout(function(){
					 $("img").css("width","100%").parent().removeClass("text-center");

				 },100);
				 
				 $("input[name=date]").val(data.result.hideDate);
				 $("input[name=cookieString]").val(data.result.cookieString);
			 }else{
				// $("img").attr("src","");
//				 mui.toast(data.msg,{ duration:'short', type:'div' }) ;
				 console.log(data.msg);
				 promt(data.msg);
			 }
		 },
		 failCallback:function(data){
			 $("img").attr("src","");
			 mui.toast("网络异常！",{ duration:'short', type:'div' }) ;
		 }
	 });
	 
 
 }
 
 
 /*获取问题*/
 function nextStap(){

	 $("#regNext").on("click",function(){
		 if(formValidation($(this).parents("form"))){
			 var reqObj=$(this).parents("form").serializeObject();
			 ajaxUtil({
				 url:"credit_04",
				 data:reqObj,
				 callback:function(data){
					 
					 if(data.code&&data.code=="0000"){
						 questionAry=data.result.questions;
						 checkedQtnPrmObj=reqObj;
		 
		 				checkedQtnPrmObj.cookieString=data.result.cookieString;
		 				checkedQtnPrmObj.authtype=data.result.authtype;
		 				checkedQtnPrmObj.token=data.result.token;
		 				checkedQtnPrmObj.applicationOption=data.result.applicationOption;
		 				checkedQtnPrmObj.authCode=checkedQtnPrmObj.verifyCode;
		 				delete checkedQtnPrmObj.verifyCode;
		 				 
		 				
		 				var html=template("questionItems",data);
		 				var $html=$(html);
		 				 
		 				 $('#questionsItems').html("").append($html);
		 				 
		 				 //选择问题
		 				 $html.find("li a").on("click",function(){
		 					 var $this= $(this);
		 					 $this.parents("ul").find("li i").removeClass("checked");
		 					 $this.find("i").addClass("checked");
		 					 $this.parents("ul").find("input").val($this.data("option"));
		 					 
		 				 });
		 				 
		 				 $('form[data-step="getCreditQuestion"]').removeClass("show").addClass("none").siblings("form").removeClass("none").addClass("show");
		 				 parent.changeCaption();
						 
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
 
 
 
 /*验证问题*/
 function checkQuestions(){
	 $("#checkQuestions").on("click",function(){
		  
		 if(formValidation($(this).parents("form"))){
			 var checkedQtnObj=$(this).parents("form").serializeObject();
			 
			 for(var i=0;i<questionAry.length;i++){
				 if(questionAry[i].orderNo in checkedQtnObj){
					 
					 console.log(checkedQtnObj[questionAry[i].orderNo]);
					 questionAry[i].options=checkedQtnObj[questionAry[i].orderNo];
					 questionAry[i].answerresult=checkedQtnObj[questionAry[i].orderNo];
					  
				 }
			 }
			 checkedQtnPrmObj.questions=JSON.stringify(questionAry);
			//调用验证问题接口 checkedQtnPrmObj
			 ajaxUtil({
				 url:"verifyCreditQuestion",
				 data:checkedQtnPrmObj,
				 callback:function(data){
					 if(data.code&&data.code=="0000"){
						 mui.alert("问题提交成功！", '提示',"确认",function(e){
								 
							 	//征信验证
								mui.openWindow({
								    url:"credit_03",
								    id:"credit_03",
								    show:{
								        autoShow:true,//页面loaded事件发生后自动显示，默认为true
								      } 
								});
								 
						    });
						
						 
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
 
 
	//内容更换
	function changeContent(){
		  $('form[data-step="getCreditQuestion"]').removeClass("none").addClass("show").siblings("form").removeClass("show").addClass("none");
	} 