var wait = 60;
var json = {
	userId: sessionUserId	,
	orderId: pmOrderId,
	billId:billId
};

var billsAry=[];//子订单里列表

var lyIndex;//layer层标记

$(function(){
	
	//还款详情数据渲染
	repaySpecify();
	
	//提前还款
	$("button[data-repayment]").on("click",function(){
		var hMobile=sessionMobile.replace(sessionMobile.substr(3,4),"****");
		$("#ctCode").find("[data-info]").html("请在下方输入手机"+hMobile+"，所收到的验证码");;
		 var html=$("#ctCode").html();
		 var lyIndex=layer.open({
	  			anim: 'up',
	  			content: html,
	  			shadeClose:true
	  		});
	  	  
	  	  //获取验证码
	  	  $(".layui-m-layercont").find("#checkcode").get(0).onclick = dynamic; 
	  	  
	  	  
	  	  //确认还款
	  	 $(".layui-m-layercont").find("button[data-confirm]").on("click",function(){
	  		var $selector=$(this).parents(".custom-code-wrapper");
	  		var code=$selector.find("input[data-input]").val(); //验证码
	  		   
  		    if($.trim(code)==""){
  		       MessageWin("请输入验证码！");
  			   return;
  		    }
  		    //个人主动还款
	  		$.post("kakadai/order/payOffLaonActivePersonal",{id:billId, verifyCode: $.trim(code)},function(data){
	  			 if(data &&data.code&&data.code=="0000"){
	  				    
	  				    layer.close(lyIndex);
	  				    location.href="./c_repay_status";//还款状态页面
	  				   
	  			   }else{
	  				   
	  				    MessageWin(data.msg);
	  			   }
	  			
	  		});
	  		 
	  	 });
		
	});
	
	
 });


function repaySpecify(){
	 $.post("kakadai/order/orderInfo",
			  {userId: json.userId,account:'baifutianxia',pageSize:100,pageIndex:1, orderId: json.orderId},
			  function(res){
			 	 var resdata = typeof res == 'string' ? $.parseJSON(res) : res;
			 	 
			 	 if(resdata.code != '0000') {
			 		 MessageWin(resdata.msg);
			 		 return;
			 	 }
			 	 
			 	 if(resdata.result&&resdata.result[0]) {
			 		var resultObj=resdata.result[0];
			 		var data={
			 				cardBank:resultObj.cardBank//扣款银行卡
			 		};
			 		
			 		var billObj=$.map(resultObj.bills,function(item,index){
			 			
			 			if(item.id==json.billId){
			 				return item;
			 			}
			 			
			 		});
			 		
			 		data.interest=billObj[0].interest;//利息
			 		data.lateCharge=billObj[0].lateCharge;//滞纳金
			 		data.billPeriod=billObj[0].billPeriod;//还款期数
			 		data.payAmt=billObj[0].payAmt;//还款金额
			 		data.repaymentDate=billObj[0].repaymentDate;//应还日期
			 		data.total=billObj[0].total;//还款总额
			 		data.handingFee=billObj[0].handingFee;//手续扣费
			 		
			 		var html=template("specifyTemplate",data);
			 		$("#main [data-btm]").before("");
			 		$("#main [data-btm]").before($(html));
			 		 
			 	 }
			 	 
			  });	
}



function dynamic() {
	var $selector=$(this).parents(".custom-code-wrapper");
	var th=this;
	$selector.find("button[data-confirm]").removeAttr("disabled"); //验证码
	 
    $.post("phoneDynCode",{verifyKind:"CHK"},function(){
    	if(data.code=="0000"){
    		time(th);
    	}else{
    		 layer.close(lyIndex);
    		 MessageWin(data.msg);
    		 
    	}
    });
}

function time(o) {
	if (wait == 0) {
		$(o).get(0).onclick = dynamic;
		$(o).html("获取验证码");
		$(o).removeAttr("style").addClass("catch");
		wait = 60;
	} else {
		$(o).get(0).onclick = null;
		$(o).html("(" + wait + ")重获验证码");
		wait--;
		setTimeout(function() {
			time(o);
		}, 1000);
	}
}