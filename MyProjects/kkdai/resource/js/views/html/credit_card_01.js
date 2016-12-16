	$(document).ready(function(){
		
		initData();
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
					var html=template("cList",data.result);
					var $html=$(html);
					$(".maincontainer").empty().html($html);
					
					$html.find(".dl_item").click(function(){
						$(this).siblings().removeClass("selected");
						$(this).addClass("selected");
					});
					$html.find("#b1").click(function(){
						var md5CreditNo = $(".selected").find('input').val();
						if(md5CreditNo!=null && md5CreditNo!=""){
							window.location.href="credit_card_02?md5CreditNo="+md5CreditNo; 
						}else{
							MessageWin("请先选择代还信用卡");
						}
						
					});
				}
				
				 
			}else{
				MessageWin(data.msg);
			}
		 
			
		});
		
	}