	$(document).ready(function(){

   		$.ajax({
   			async: false,
   			type: 'post',
   			dataType: 'json',
   			url: 'kakadai/order/orderInfo',
   			data: {
   				orderId:907,//907
   				userId:userId,
   				pageSize:10,
   				pageIndex:1
   			},
   			success: function(data) {
   				if(data.code == '0000'){
   					$(data.result).each(function(i, obj){
   						$("#loanAmount").text(obj.loanAmt + "元");
   						$("#creditNo").text(obj.creditNo.substr(obj.creditNo.length-4));
   						$("#creditName").text(obj.creditBank);
   						$("#creditBank").text(obj.creditBank+"（"+obj.creditNo+"）");
   						$("#makeLoanDay").text(obj.appointDate);
   						$("#repaymentPeriod").text(obj.applyPeroids);
   						$("#capital").text(obj.repaymentAmount);
   						$("#repaymentDate").text( obj.repaymentDate);
   						
   						
   					})
   				}
   			}
   		});
   		
   		$("#btn_repayment").bind("click", function(){
   			window.location.href='bill_manage_01';
   		});
   		
	});