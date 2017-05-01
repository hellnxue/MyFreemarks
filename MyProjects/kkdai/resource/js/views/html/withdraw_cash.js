$(document).ready(function() {
	
	initData();
	
		 
});

function initData(){
	 $.ajax({
			type: "POST",
			dataType: 'json',
			url: 'liftingQuotaStatusInfo',
			data:null
			
 	 }).done(function(data){
 		 
				if(data.code&&data.code=="0000"){
					 var html=template("withdraw",data);
					 
					 var $withdrawHTML=$($(html).html());
					 
					 $("div[data-withdraw-list]").empty().append($withdrawHTML);
					 
					 $withdrawHTML.find("button").on("click",function(){
						 var processCode=$(this).data("processCode");
						 var status=$(this).data("status");
						 if(processCode==40&&status!=0){//人行征信
							 
							 location.assign("credit_03");
							 
						 }else if(processCode==50&&status!=0){ //运营商
							 
							 location.assign("operator_01");
							 
						 }
					 });
				} 
	});

	
}