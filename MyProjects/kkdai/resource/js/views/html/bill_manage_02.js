var json = {
	userId: sessionUserId,
	orderId: pmOrderId
};

var billsAry=[];//子订单列表

$(function(){
	
	cutTab();
	
	initData();
 });

/*tab切换*/
function cutTab(){
	$("div[data-tab]").on("click",function(){
		var cur=$(this).data("tab");
		$(this).addClass("cur").siblings("div").removeClass("cur");
		$(".maincontainer [data-"+cur+"]").show().siblings("div").hide();
	
	}); 
	
}


/*数据初始化*/
function initData(){
	 $.post("kakadai/order/orderInfo",
			  {userId: json.userId,account:'baifutianxia',pageSize:100,pageIndex:1, orderId: json.orderId},
			  function(res){
			 	 var resdata = typeof res == 'string' ? $.parseJSON(res) : res;
			 	 
			 	 if(resdata.code != '0000') {
			 		 MessageWin(resdata.msg );
			 		 return;
			 	 }
			 	 if(resdata.result&&resdata.result[0]) {
			 		 
			 		 billsAry=resdata.result[0].bills;
			 		 
			 		 //只有一个未还
			 		 resdata.result[0].whLen=resdata.result[0].bills.length;
			 		 
			 		 var billHTML=template("billManageTemplate",resdata.result[0]);
			 		 var detailHTML=template("detailManageTemplate",resdata.result[0]);
			 		 
			 		 var $html=$(billHTML);
			 		 var $detailHTML=$(detailHTML);
			 		 
			 		$(".maincontainer > div[data-bill]").empty().append($html);					//分期账单
			 		$(".maincontainer > div[data-record]").empty().append($detailHTML).hide();  //还款记录
			 		
			 		
			 		
			 		//提前还款
			 		$html.find(":button[data-repayment]").on("click",function(){
			 			if(!window.atob) {
							 MessageWin("参数传递失败" );
							 return;
						 }
			 			
					  window.location.href = './bill_manage_03.html?param=' + window.btoa(JSON.stringify({bid:$(this).data("bid"),orderId: json.orderId}));
			 			
			 		});
			 		
			 		//立即还款(都按照期数顺序判定。逾期为先 ，再者未还)
			 		$html.find("a[data-repayment-immediately]").on("click",function(){
			 			
			 			var curObj={
			 					id:$(this).data("id"),				//子订单id
			 					billPeriod:$(this).data("billperiod"),	//还款期数
			 					payStatus:$(this).data("paystatus")	//还款状态
			 			};
			 			
			 			var payStatus={
			 					yq:2,	//逾期
			 					wh:3,	//未还
			 					hkz:5	//还款处理中
			 			};
			 			
			 			//还款处理中
			 			var hkz=yqFlag(billsAry,payStatus.hkz);
			 			
			 			if(hkz){
			 				
			 				 MessageWin("有未处理完的账单！");
			 				 return ;
			 			}
			 			
			 			//逾期状态的期数数组
		 				var yqAry=periodList(billsAry,payStatus.yq);
		 				
		 				//逾期判断
			 			if(curObj.payStatus==payStatus.yq){
			 				 
			 				var flagy=orderDecide(yqAry,curObj.billPeriod);
			 				
			 				if(flagy){
			 					location.href="./c_repay?param="+pmOrderId+"&billId="+curObj.id;//还款明细页面
			 				}else{
			 					 MessageWin("有上一期的逾期账单未处理！");
			 				}
			 				
			 			//未还 判断	
			 			}else if(curObj.payStatus==payStatus.wh){
			 				 
			 				if(yqAry.length!=0){
			 				    MessageWin("有逾期的账单未处理！");
			 				}else{
			 					
			 					var flagw=orderDecide(periodList(billsAry,payStatus.wh),curObj.billPeriod);
			 					
			 					if(flagw){
				 					location.href="./c_repay?param="+pmOrderId+"&billId="+curObj.id;//还款明细页面
				 				}else{
				 					 MessageWin("有上一期的未还账单未处理！");
				 				}
				 				
			 					
			 				}
			 				
			 			}
			 			
			 			
			 		});
			 		
			 		
			 	 }
			  })
			  .error(function(){
				  alert("ajax异常");
				  //checkButton.call(this,false);
				  /* var $wrap = $("div.box_wrap2");
				  $wrap.html($wrap.html().replace(/#\w+#/g,""));
				  $wrap.show(); */
			  });
	
}


//期数列表
function periodList(billsAry,status){
	return $.map(billsAry,function(item,index){
			
		 if(status==item.payStatus){
			   return item.billPeriod;
			}
	});
	
	
}


//期数顺序判定
function orderDecide(typeAry,billPeriod){
	return typeAry.every(function(item,index){
	     return billPeriod<=item;
	 });
	
}

//还款中判断
function yqFlag(billsAry,hkzStatus){
	return billsAry.some(function(item,index){
		return hkzStatus==item.payStatus;
	});
}



 function checkButton(enable, p) {
	 if(enable) {
		 var $button = $("#btnRepay>button");
		 $button.removeClass("disabled");
		 $("div.maincontainer").on("click",$button, function(e){
			 if(!window.atob) {
				 MessageWin("参数传递失败");
				 return;
			 }
			 window.location.href = './bill_manage_03.html?param=' + window.btoa(JSON.stringify(p));
		 })
	 }
	 
 }