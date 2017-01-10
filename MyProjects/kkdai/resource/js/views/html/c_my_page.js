var bindCardBeforeFlag="";
	var authentication_02='authentication_02';	//身份验证信息page
	var linkman='linkman';						//联系人page
	var zhimaxinyong='zhimaxinyong';			//芝麻信用page
    var processCode=sessionStorage.processCode;
	
    
    
   
   $(document).ready(function(){
	   $("div.footer>a").removeClass("footer_current");
	   $("i.foot_ico_3").parent().parent().addClass("footer_current");
	   
	   operationLink();

	   
   });
   
   function  operationLink(){
	   $("a[data-check]").on("click",function(e){
		   e.preventDefault();
		   var item=$(this).data("href");
		   if(item=="credit_card_01"){//银行卡判定
			   if(processCode&&processCode!='30'){
				   MessageWin("您还未授信，不能查看银行卡信息！",function(){
					   
					   if(processCode == '00' || processCode == ""){
							
							bindCardBeforeFlag=authentication_02;
							
						}else if(processCode == '10'){
						
							bindCardBeforeFlag=linkman;
							
						}else if (processCode == '20'){
							
							bindCardBeforeFlag=zhimaxinyong;
						}
					   
					   if(bindCardBeforeFlag){
							window.location=bindCardBeforeFlag;
						}
					   
					   
				   });
			   }else{
				   location.assign(item);
			   }
			   
		   }
	   });
	   
   }