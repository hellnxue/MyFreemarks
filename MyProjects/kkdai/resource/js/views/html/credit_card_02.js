$(document).ready(function(){
	
	
	$(".more_crieds").bind("click", function(){
		layerShow();
		
	});
	$(".mask_outer").bind("click", function(){
	   layerHide();
    });
	
	initData();

	
	$("#proBack").on("click",function(){
		
		$("#productList").submit();
	 
	   	
	});
	 
 
	
	$("#signlink").bind("click", function(){
		$("form").attr("action", "credit_card_03").submit();
	});
	
	var userSignature = $("input[name=userSignature]").val();
	if('null' != userSignature && userSignature.length > 0){
		$("#btnSubmit").removeClass("disabled");
		$("#signlink").find("i").addClass("ico_check_current");
		$("#btnSubmit").bind("click", function(){
			if($("input[name=makeLoanDay]").val() == ""){ 
				MessageWin("放款时间不能为空", function(){}); 
				return false;
			}
			$("form").attr("action", "kakadai/order/submitOrder").submit();
		})
	}
	

	$(".credit_list").bind("click", function(){
		 
		var creditBank = $(this).find('label').attr("creditBank");
		var creditNo = $(this).find('span').attr("creditNo");
		var md5CreditNo = $(this).find('span').attr("md5CreditNo");
		var bankKey = $(this).find('span').attr("bankKey");
		
		layerHide();
		    
		$("#bankKey").val(bankKey);
		 
		$("span[data-credit]").html(creditBank + " | " + creditNo );
		
		$("input[name=md5CreditNo]").val(md5CreditNo);
		$("input[name=creditCardNo]").val(creditNo);
		$("input[name=creditBank]").val(creditBank);
		
	});
	
	

});

function initData(){
	$.ajax({
		type: 'post',
		dataType: 'json',
		url: 'refreshCard',
		data: {
			userId:userId,
			 
		}
	}).done(function(data){
		 
		if(data.code == "0000"){
			if(data.result){
				var html=template("creditList",data.result);
				var $html=$(html);
				$("div[data-credit-list]").empty().html($html);
				
				if(data.result.card&&data.result.card.length>0){
					var card=data.result.card[0];
					
					$("input[name='depositsCardNo']").val(card.cardNo).attr("placeholder",card.cardNo);
					$("input[name='md5CardNo']").val(card.md5CardNo);
					$("input[name='cardBankKey']").val(card.cardBankKey);
					
				}
				
				var dom = $(".credit_list").children(":first");
				var creditBank = dom.find('label').attr("creditBank");
				var creditNo = dom.find('span').attr("creditNo");
				var md5CreditNo = dom.find('span').attr("md5CreditNo");
				var bankKey = dom.find('span').attr("bankKey");
				$("#bankKey").val(bankKey);
				$("span[data-credit]").html(creditBank + " | " + creditNo );
				$("input[name=md5CreditNo]").val(md5CreditNo);
				$("input[name=creditCardNo]").val(creditNo);
				$("input[name=creditBank]").val(creditBank);
				
			}
			
			 
		}else{
			MessageWin(data.msg);
		}
	 
		
	});
	
}



function layerShow(){
	 $(".mask_outer").removeClass("none");
	 $(".window_credit").slideDown();
}

function layerHide(){
	$(".mask_outer").addClass("none");
	$(".window_credit").slideUp();
}