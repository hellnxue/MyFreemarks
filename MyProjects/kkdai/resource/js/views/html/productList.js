	var calculateResult=[];//产品试算结果
	
	$(document).ready(function() {
		
		initProduct();
		
		$(".qs_li > span").bind("click", function(){
			$(".qs_li > span").removeClass("qs_current");
			$(this).addClass("qs_current");
		});
		
		
		//金额输入
		$('input[name=loanAmt]').on('click', function() {
 
			$(".shade_outer").css("background","rgba(0,0,0,0)").show();
			new KeyBoard(this,
				{
					
					accomplished:function(){
					
					var productCode=$(".swiper-slide-active").attr("productCode");
					var period=$(".swiper-slide-active").attr("period");
					
					//初始化试算结果
					inputchange(productCode,period);
					
					//匹配产品试算结果
					capticalMatchByPC(productCode);
					
				
			},
				endCallback:function(){
					setTimeout(function(){
						$(".shade_outer").css("background","rgba(0,0,0,0.5)").hide();
					},600);
				}
			});
			
			$("img[data-delete]").attr("src",path+"/resource/images/main/v1/delete@2x.png").css("width","0.59rem");

		});
		
		
		//下一步
		$("#step").on("click", next);
		
		
		
	});
	
	function next(){
			if(validate()){
				$(this).parents("form").submit();
			}

	}
	
	//根据输入金额获取产品试算结果
	function inputchange(productCode,period){ 
		
		var amount = $("input[name=loanAmt]").val(); 
		
		if("" == amount || "" == period || "" == productCode){
			$(".bMoney").text("0");
			return false;
		}
		
		if(!validate()){
			return ;
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
				promt(data.msg, function(){});
			}
			
		});
		
	}
	
	
	//产品试算匹配
	function capticalMatchByPC(productCode){
		 
		if(calculateResult.length>0){
			$.map(calculateResult,function(item,index){
				if(item.productCode==productCode){
					$(".pd_area[productcode="+productCode+"]").find(".bMoney").html(item.capital);
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
							//productDesc
							dom +=
							"<div class='swiper-slide pd_area sp " + "" + "' period='" + obj.period + "' productCode='" + obj.productCode +"' productName='" + obj.productName + "' >" +
					        "<div class='t_lit'>" +
						        "<div class='p_n' productCode='" + obj.productCode + "'>" + obj.productName +
						        "</div>" +
						        "<div class='p_d'>" + obj.productDesc +
						        "</div>" +
					        "</div>" +
					        "<div class='t_lit'>" +
					        "<span>手续费扣收方式</span>" +
					        "<span class='t_lit_je'>"+obj.interestTypeDesc+"</span>" +
					        "<p class='t_lit_p'>&nbsp;</p>" +
//					        "<span class='t_lit_je'>从放款余额中直接扣除</span>" +
//					        "<p class='t_lit_p'><span class='orange'>/</span>还款时收取</p>" +
					        
				        "</div>" +
					        "<div class='t_lit'>" +
						        "<span>每期还款</span>" +
						        "<span class='t_lit_je bMoney'>0  &gt; </span>" +
					        "</div>" +
					    "</div>";
						});
					
					
					
					$(".pd_list_cn .swiper-wrapper").html(dom);
					
					$(".swiper-slide:first").addClass("cur-scales");
					
					
					initSwiperTool(paramObj.productCode);
					 $(".swiper-active-switch").css("background-color","orange");
					
					//返回
					if(paramObj.productCode){
						var $curSelector=$(".pd_area[productcode="+paramObj.productCode+"]");
						$("#period_dom").text($curSelector.attr("period"));				//期数
						$("input[name=repaymentPeriod]").val($curSelector.attr("period")); //期数
						$("input[name=productCode]").val($curSelector.attr("productCode"));
						$("input[name=productName]").val($curSelector.attr("productName"));
						
						inputchange(paramObj.productCode,$curSelector.attr("period"));
						 
						capticalMatchByPC(paramObj.productCode);
					} 
				}else {
					promt(data.msg);
				}
			}
		});
	}
	
	

	/*额度验证*/
	function validate() {
		var flag=false;
		var amount = $("input[name=loanAmt]").val(); 
		if(amount==""){
			promt("请输入借款金额！");
			 
		}else if(parseInt(amount) > parseInt(creditAmount)){
			promt("您的信用额度不够！");
			 
		}else if(parseInt(amount) < 100 || parseInt(amount) % 100 != 0){
			promt("贷还金额为100的整数倍！");
		 
		}else{
			flag=true;
		}
		
		return flag;
	}
	
	//初始化滑动插件
	function initSwiperTool(bProductCode){
		var index=0;
		if(bProductCode){
			index=$(".pd_area[productcode="+bProductCode+"]").index();
		}
		
	     resetSwiperContainerWH({
		      	remWidth:6.72,					//相对宽度 6.72
		      	remHeight:3.5,					//相对高度
		      	containerSelector:".swiper-container" , //滑动容器
		      	firstInitPage:true			    //是否第一次执行
	      });
	     
    	var swiper=new Swiper(".swiper-container" ,{
		   	    pagination:".pagination",
  		   	    paginationClickable:true,
  		   	    resizeReInit:true,
		   	    onTouchEnd: function(swiper){
		   	      var $curSelector=$(".swiper-slide-active");
				  swiper.swipeTo($curSelector.index());
				
				  touchAndClick(swiper);
		   	    },
		   	  onSliderMove:function(swiper, event){
		   		  
		   	    	console.log("滑动中。。。。。");
		   	    },
		   	 onTouchMove:function(swiper, event){
		   	      //console.log("滑动中。。。。。111");
//		   	      $(".swiper-slide").removeClass("scales");
//				  $(".swiper-slide-active").addClass("scales");
		   	    } 
   	        });
     
    	 
    	
    	//设置默认选中项
    	$(".swiper-container .pagination span").eq(index).click();
     
    	
    	//分页器点击处理
    	$(".swiper-container .pagination span").click(function(){
    		
    		 touchAndClick(swiper);
    		
    	});
    		
		
	}
	
	
	function touchAndClick(swiper){
		
		  
		  $(".swiper-slide").removeClass("cur-scales right");
		  $(".swiper-slide-active").prev("div").addClass("right");
		  $(".swiper-slide-active").addClass("cur-scales");
		  $(".swiper-pagination-switch").css("background-color","#555");
		  $(".swiper-active-switch").css("background-color","orange");
		
		 var $curSelector=$(".swiper-slide-active");
		  
		 $("#period_dom").text( $curSelector.attr("period") );//产品期数
		 
		 $("input[name=productName]").val($curSelector.attr("productName"));
		 $("input[name=productCode]").val($curSelector.attr("productCode"));
		 $("input[name=repaymentPeriod]").val($curSelector.attr("period"));
		 
		//匹配产品试算结果
		 capticalMatchByPC($curSelector.attr("productCode"));
		 
	}