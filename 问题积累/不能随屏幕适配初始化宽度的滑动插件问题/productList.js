	var calculateResult=[];//产品试算结果
	
	$(document).ready(function() {
	
		
		initProduct();
		
		$(".qs_li > span").bind("click", function(){
			$(".qs_li > span").removeClass("qs_current");
			$(this).addClass("qs_current");
		});
		
		
		//金额输入
		$('input[name=loanAmt]').on('click', function() {
		 
			new KeyBoard(this,{accomplished:function(){
				
				var productCode=$(".swiper-slide-active").attr("productCode");
				var period=$(".swiper-slide-active").attr("period");
				
				//初始化试算结果
				inputchange(productCode,period);
				
				//匹配产品试算结果
				capticalMatchByPC(productCode);
			}});

		});
		
		
		//下一步
		$("#step").on("click", function(){
			
			if(validate()){
				$(this).parents("form").submit();
			}
			
		});
		
		
		
	});
	
	//根据输入金额获取产品试算结果
	function inputchange(productCode,period){ 
		
		var amount = $("input[name=loanAmt]").val(); 
		
		if("" == amount || "" == period || "" == productCode){
			$(".t_lit_je").text("0");
			return false;
		}
		
		if(parseInt(amount) > parseInt(creditAmount)){
			MessageWin("您的信用额度不够");
			return false;
		}
		$.ajax({
			async: false,
			type: 'post',
			dataType: 'json',
			url: 'kakadai/order/trial',
			data: {
				userId : sessionUserId,
				amount : amount,
//				period : period,
//				productCode : productCode
			}
		}).done(function(data){
			if(data.code == '0000'){
				
				calculateResult=data.result;
				
			}else {
				MessageWin(data.msg, function(){});
			}
			
		});
		
	}
	
	
	//产品试算匹配
	function capticalMatchByPC(productCode){
		 
		if(calculateResult.length>0){
			$.map(calculateResult,function(item,index){
				if(item.productCode==productCode){
					$(".pd_area[productcode="+productCode+"]").find(".t_lit_je").html(item.capital);
					$("input[name=poundage]").val(item.poundage);
					$("input[name=capital]").val(item.capital);
				}
				 
			});
			
		}
	}
	
	
	//产品数据初始化
	function initProduct(){
		
		
		$.ajax({
			async: false,
			type: 'post',
			dataType: 'json',
			url: 'getProduct',
			success: function(data) {
				if(data.code == '0000'){
					var dom = "", pd_c= "";
					
						$(data.result).each(function(i, obj){
							
							if(i == 0 ){
								//pd_c = " pd_c_first checked";
								$("#period_dom").text(obj.period);
								$("input[name=repaymentPeriod]").val(obj.period);
								$("input[name=productCode]").val(obj.productCode);
								$("input[name=productName]").val(obj.productName);
								
							}  else {
								//pd_c = " pd_c";
							}
							dom +=
							"<div class='swiper-slide pd_area sp" + "" + "' period='" + obj.period + "' productCode='" + obj.productCode +"' productName='" + obj.productName + "' >" +
					        "<div class='t_lit'>" +
						        "<div class='p_n' productCode='" + obj.productCode + "'>" + obj.productName +
						        "</div>" +
						        "<div class='p_d'>" + obj.productDesc +
						        "</div>" +
					        "</div>" +
					        "<div class='t_lit'>" +
						        "<span>每期还款</span>" +
						        "<span class='t_lit_je'>0 <i>&gt;</i></span>" +
					        "</div>" +
					    "</div>";
						});
					
					
					
					$(".pd_list_cn .swiper-wrapper").html(dom);
					
					
					
					var index=0;
					if(paramObj.productCode){
						index=$(".pd_area[productcode="+paramObj.productCode+"]").index();
					}
					 
					//初始化滑动参数
					 initWiperParam({
						  index:index,
						  isWiper:true,
						  wiperSelector:'.swiper-container',
						  pagination: '.pagination',
						  onTouchEnd:function(swiper){
							  
							  var $curSelector=$(".swiper-slide-active");
							  
							 $("#period_dom").text( $curSelector.attr("period") );//产品期数
							 
							 $("input[name=productName]").val($curSelector.attr("productName"));
							 $("input[name=productCode]").val($curSelector.attr("productCode"));
							 $("input[name=repaymentPeriod]").val($curSelector.attr("period"));
							 
							//匹配产品试算结果
							 capticalMatchByPC($curSelector.attr("productCode"));
							 
							 //console.log($curSelector.parents(".swiper-container").find(".pagination").html());
							 
							  
						 }
						 
					 });
					 
					 $(".swiper-container .pagination").find("span").eq(1).click();
					 console.log( $(".swiper-container .pagination"));
					 
					 $( $(".swiper-container .pagination")[0].childNodes[1]).click();
					 
//					 var $curSelector=$(".swiper-container");
//					 console.log("=="+$curSelector.html());
					
					
					
					//返回
					if(paramObj.productCode){
						console.log(paramObj.productCode);
//					    $(".pd_c_first").removeClass("checked").addClass("pd_c");
//						$(".pd_area[productcode="+paramObj.productCode+"]").removeClass("pd_c").addClass("checked");
						
						 
					 
						var $curSelector=$(".pd_area[productcode="+paramObj.productCode+"]");
						var $cp=$curSelector.parents(".swiper-wrapper");
					 
						//$(".pagination span").eq(index).trigger("click");
						
//						var x=pp.parents(".swiper-wrapper").html();
						
						
//						console.log($curSelector.attr("productName"));
// 						console.log($cp.next().attr("class"));
// 						
// 						$cp.next().html("hello world");
 						 
						
						$("#period_dom").text($curSelector.attr("period"));				//期数
						$("input[name=repaymentPeriod]").val($curSelector.attr("period")); //期数
						$("input[name=productCode]").val($curSelector.attr("productCode"));
						$("input[name=productName]").val($curSelector.attr("productName"));
						
						inputchange(paramObj.productCode,$curSelector.attr("period"));
						 
						capticalMatchByPC(paramObj.productCode);
					} 
					
					
					
				
					
					//点击产品
//					$(".pd_area").bind("click", function(){
//						
//					 
//						$(this).addClass("pd_c").removeClass("checked");
//						
//						if($(this).next().hasClass("pd_c")){
//							
//							$(this).next().removeClass("pd_c").addClass("checked");
//							
//						}else {
//							
//							$(".pd_c_first").removeClass("pd_c").addClass("checked");
//						}
//						
//						$("#period_dom").text( $(".checked").attr("period") );//产品期数
//						
//						$("input[name=productName]").val($(".checked").attr("productName"));
//						$("input[name=productCode]").val($(".checked").attr("productCode"));
//						$("input[name=repaymentPeriod]").val($(".checked").attr("period"));
//						
//						//匹配产品试算结果
//						 capticalMatchByPC($(".checked").attr("productCode"));
//						 
//					});
				}else {
					MessageWin(data.msg);
				}
			}
		});
	}
	
	

	
	function validate() {
		var amount = $("input[name=loanAmt]").val(); 
		if(amount==""){
			MessageWin("请输入借款金额！");
			return false;
		}else if(parseInt(amount) > parseInt(creditAmount)){
			MessageWin("您的信用额度不够");
			return false;
		}else{
			return true;
		}
	}