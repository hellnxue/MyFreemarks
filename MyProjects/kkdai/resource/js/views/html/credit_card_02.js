$(document).ready(function(){
	
	dateScrollControl();
	
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
	 
 
	//合同套件（暂时注掉）
	$("#signlink").bind("click", function(){
		 
		$("form[name=myform]").attr("action", "credit_card_03").submit();
	});
	
	var userSignature = $("input[name=userSignature]").val();
	if('null' != userSignature && userSignature.length > 0){
		
		$("#btnSubmit").removeClass("disabled");
		
		$("#signlink").find("i").addClass("ico_check_current");
		
		$("#btnSubmit").bind("click", function(){
			

			var makeLoanDay=$("input[name=makeLoanDay]").val();
			
			
			if(makeLoanDay == ""){ 
				
				promt("放款日期不能为空！");
				
				return;
			}else if( parseInt(makeLoanDay.replace(new RegExp("-","gm"),""))<parseInt(getCurrentDate().replace(new RegExp("-","gm"),""))){
				
				promt("放款日期不能小于当天日期！");
				return;
			}
			
			 $.ajax({
		 			type: "POST",
		 			dataType: 'json',
		 			url: 'kakadai/order/submitOrder',
		 			data:$("form[name='myform']").serializeObject()
		 			
		    	 }).done(function(data){
		 			   
		 				if(data.code&&data.code=="0000"){
		 					window.location.href="credit_card_04?orderId="+data.result.orderId;
		 				}else{
		 					promt(data.msg);
		 				}
		 			});
		});
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
				$("div[data-credit-list]").empty().append($html);
				
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
				if(creditBank&&creditNo){
					$("span[data-credit]").html(creditBank + " | " + creditNo );
				}
				
				$("input[name=md5CreditNo]").val(md5CreditNo);
				$("input[name=creditCardNo]").val(creditNo);
				$("input[name=creditBank]").val(creditBank);
				
			}
			
			 
		}else{
			MessageWin(data.msg);
		}
	 
		
	});
	
}

function dateScrollControl(){
	var currDate=new Date();
	var currYear = currDate.getFullYear();	
	var opt={
		'default':{
			theme: 'android-ics light', //皮肤样式
			display: 'modal', //显示方式 
			mode: 'scroller', //日期选择模式
			dateFormat: 'yyyy-mm-dd',
			lang: 'zh',
			showNow: true,
			nowText: "今天",
			minDate: currDate,
			startYear: currYear , //开始年份
			endYear: currYear + 5 //结束年份
		}	
			
	};
	opt.date = {preset : 'date'};
	opt.datetime = {preset : 'datetime'};
	opt.time = {preset : 'time'};
	 

	$("#makeLoanDay").mobiscroll($.extend(opt['date'], opt['default']));
}



function layerShow(){
	 $(".mask_outer").removeClass("none");
	 $(".window_credit").slideDown();
}

function layerHide(){
	$(".mask_outer").addClass("none");
	$(".window_credit").slideUp();
}