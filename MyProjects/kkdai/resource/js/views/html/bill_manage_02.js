var json = {
	userId: sessionUserId,
	orderId: pmOrderId
};

var billsAry=[];//子订单列表
var detailsAry=[];//还款记录

//分页参数
var pageIndex=1, pageSize=10 ,pullBottomMTop="m-t-xxxl";

$(function(){
	
	cutTab();
	
	
	$(".mask_outer").bind("click", function(){
		   layerHide();
	 });
 });
mui.init();
(function($) {
	$.ready(function() {
		
		$.each(document.querySelectorAll('.mui-slider-group .mui-scroll'), function(index, pullRefreshEl) {
			
			var paramObj={
					down: {
						callback: pulldownRefresh
				
					},
					up: {
						auto:true,//默认上拉一次
						callback:pullupRefresh
					}
				};
			//设置第一个下拉组执行一次数据加载
			if(index==0){
				paramObj.up.auto=true;
			}else{
				paramObj.up.auto=false;
			}
			$(pullRefreshEl).pullToRefresh(paramObj);
		});
	});
})(mui);

/**
 * 下拉刷新具体业务实现
 */
function pulldownRefresh() {
	var self = this;
	var ele=$(self.element);
	var billOrRecordFlag=$(ele).parents(".mui-control-content").data("flag");//分期账单or还款记录
	loadData(self,billOrRecordFlag,"pullDown");
}

/**
 * 上拉加载具体业务实现
 */
function pullupRefresh() {
	var self = this;
	var ele=$(self.element);
	var billOrRecordFlag=$(ele).parents(".mui-control-content").data("flag");//分期账单or还款记录
	loadData(self,billOrRecordFlag,"pullUp");
}

//分情况加载数据
function loadData(self,billOrRecordFlag,status){
	
	setTimeout(function() {
		
		renderData(billOrRecordFlag,status,self);
		
		if(status=="pullDown"){
			self.endPullDownToRefresh();
		}else{
			self.endPullUpToRefresh();
		}
		
	}, 1000);
	
}


//数据渲染
function renderData(billOrRecordFlag,status,self){
	
	 $.post("kakadai/order/orderInfo",
			  {
				userId : json.userId,
				account : 'baifutianxia',
				pageSize : 10,
				pageIndex : pageIndex,
				orderId : json.orderId
			},
			  function(res){
				   
			 	 var resdata = res;
			 	 
			 	 if(resdata.code != '0000') {
			 		 mui.toast("获取信息失败！"+res.msg,{ duration:'short', type:'div' }) ;
			 		
			 		 if(status=="pullDown"){
			 			 
			 			 //停止下拉刷新
			 			self.endPullDownToRefresh();
			 			
			 		 }else{
			 			 
			 			//禁用上拉加载更多 
			 			self.endPullUpToRefresh(true);
			 			 
			 		 }
				 	
			 		 $(self.element).find(".mui-pull-bottom-tips").addClass(pullBottomMTop);
			 		 
			 		 return;
			 	 }
			 	 
			 	 if(resdata.result&&resdata.result[0]) {
			 		 
				 		if(  $(self.element).find(".mui-pull-bottom-tips").hasClass(pullBottomMTop)){
				 			
				 			 $(self.element).find(".mui-pull-bottom-tips").removeClass(pullBottomMTop);
				 		}
				 		 
				 		 //分期账单
				 		 if(resdata.result[0].bills&&resdata.result[0].bills.length>0){
				 			 billsAry=resdata.result[0].bills; 
				 			 //只有一个未还不可提前还款
					 		 resdata.result[0].whLen=resdata.result[0].bills.length;
				 		 } 
				 		 
				 		 //还款记录
						 if(resdata.result[0].details&&resdata.result[0].details.length>0){
							 detailsAry=resdata.result[0].details;		 			 
						  }  
					 
				 		 //是否可提前还款的判定
				 		 var flag=billsAry.some(function(item,index){
				 			 
				 			return item.payStatus==0||item.payStatus==1||item.payStatus==4||item.payStatus==5||item.payStatus==6 ;
				 			 
				 		 });
				 		 
				 		 resdata.result[0].isShow=flag;
				 		 var billHTML=template("billManageTemplate",resdata.result[0]);
				 		 var detailHTML=template("detailManageTemplate",resdata.result[0]);
				 		 
				 		 var $html=$(billHTML);
				 		 var $detailHTML=$(detailHTML);
				 		 
				 		 var $billSel=$(".mui-slider-group   div[data-bill] ul");
				 		 var $recordSel=$(".mui-slider-group   div[data-record] ul");
				 		 
				 		if(pageIndex==1){//数据初始化
				 			 
				 			$billSel.empty().append($html);//分期账单
					 		$recordSel.empty().append($detailHTML).parents("div[data-record]").hide();//还款记录
					 		
					 		//数据初始化若无账单或还款，不显示下拉加载更多
					 		$billSel.siblings(".mui-pull-bottom-tips").find("span").html("");
					 		$recordSel.siblings(".mui-pull-bottom-tips").find("span").html("");
				 		
				 		}else{
				 			
				 			if(status=="pullDown"){//下拉刷新-前置
				 				
				 				$billSel.append($html);
						 		$recordSel.append($detailHTML);
						 		
				 			}else{//上拉加载更多-append
				 				
						 		$billSel.prepend($html);
						 		$recordSel.prepend($detailHTML);
				 			}
			 				
				 			
				 		}
				 		
				 		//还款记录详情
				 		$detailHTML.find(".box_wrap2").each(function(){
				 			this.addEventListener("tap",function(){
				 				var id=$(this).data("detailId");
					 			
					 			$.map(detailsAry,function(item,index){
					 				if(id==item.id){
					 					var $selDetailHTML=template("selectedDetail",item);
					 					$("#detailItem").empty().html( $selDetailHTML);
							 			layerShow();
					 				}
					 				
					 			});
					 		});
				 		});
				 		
				 		
				 		//提前还款
				 		$html.find(":button[data-repayment]").each(function(){
				 			this.addEventListener("tap",function(){
					 			if(!window.atob) {
									 MessageWin("参数传递失败" );
									 return;
								 }
					 			
							  window.location.href = './bill_manage_03.html?param=' + window.btoa(JSON.stringify({bid:$(this).data("bid"),orderId: json.orderId}));
					 			
				 			});
				 		});
				 		
				 		//立即还款(都按照期数顺序判定。逾期为先 ，再者未还)
				 		$html.find("a[data-repayment-immediately]").each(function(){
				 			this.addEventListener("tap",function(){
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
				 			
				 		});
			 		 
			 		//拉动完后
					pageIndex++;
			 		
			 	 } else{
			 		
			 		//无数据禁用上拉加载更多
			 		if(status=="pullUp"){
						self.endPullUpToRefresh(true);
					}
			 		
			 		//$(self.element).find(".mui-pull-bottom-tips").addClass(pullBottomMTop);
			 	 }
			 	 

				
					
			  })
			  .fail(function(){
					     mui.alert("获取信息失败！", '提示',"确认");
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
		 });
	 }
	 
 }
 
 /*tab切换*/
 function cutTab(){
 	$("div[data-tab]").on("click",function(){
 		var cur=$(this).data("tab");
 		$(this).addClass("cur").siblings("div").removeClass("cur");
 		$(".mui-content [data-"+cur+"]").show().siblings("div").hide();
 	}); 
 	
 }
 
 function layerShow(){
	 $(".mask_outer").removeClass("none");
//	 $(".window_credit").fadeIn('fast',"linear");
 	 $(".window_credit").removeClass("none");
}

function layerHide(){
	$(".mask_outer").addClass("none");
// 	$(".window_credit").slideUp().addClass("none");
	$(".window_credit").addClass("none");
}

