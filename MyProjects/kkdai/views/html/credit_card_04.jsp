<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="../commen.jsp"></jsp:include>
<title>信贷GUI-已还款页面</title>
<script type="text/javascript">
   	$(document).ready(function(){
   		var orderId = ${result.orderId}
   		var userId = ${userSession.userId}
   		$.ajax({
   			async: false,
   			type: 'post',
   			dataType: 'json',
   			url: '../../kakadai/order/orderInfo',
   			data: {
   				orderId:orderId,
   				userId:userId,
   				pageSize:10,
   				pageIndex:1
   			},
   			success: function(data) {
   				if(data.code == '0000'){
   					$(data.result).each(function(i, obj){
   						$("#loanAmount").text(obj.loanAmt + "元");
   						$("#cardNo").text(obj.creditNo);
   						$("#creditBank").text(obj.creditBank);
   						$("#makeLoanDay").text(obj.appointDate);
   						$("#repaymentPeriod").text(obj.applyPeroids);
   						$("#capital").text(obj.repaymentAmount);
   						$("#repaymentDate").text( obj.repaymentDate);
   					})
   				}
   			}
   		});
   		
   		$("#btn_repayment").bind("click", function(){
   			window.location.href='../../bill_manage_01';
   		})
   		
	});
</script>
</head>
<body class="yellow_bg">
	<div class="header">
		<a href="../../index" class="icon ico_back" id="pageback"></a>
		已还款页面
	</div>
	<div class="maincontainer">
		<div class="text-con">
			<div class="hd">恭喜您，<bdo class="c_orange fs50" id="loanAmount"></bdo> 代还成功！</div>
			<p>代还金额（除手续费）将在预约日会如您的招商银行信用卡（<bdo class="c_orange" id="cardNo"></bdo>）中。</p>
		</div>
		<div class="box_circle box_gray_circle">
			<div class="hd">代还信用卡丨<span class="ml50" id="creditBank"></span></div>
			<div class="form_wrap form_msg">
				<div class="form-group">
					<label class="control-label">预约日期</label>
					<bdo class="c_orange" id="makeLoanDay"></bdo>
				</div>
				<div class="form-group">
					<label class="control-label">还款期数</label>
					<bdo id="repaymentPeriod"></bdo>
				</div>
				<div class="form-group">
					<label class="control-label">每月应还</label>
					<bdo class="c_orange" id="capital"></bdo>
				</div>
				<div class="form-group">
					<label class="control-label">还款日期</label>
					<bdo id="repaymentDate"></bdo>
				</div>
			</div>
		</div>
		<div class="tips c_424242"><bdo class="c_orange">*</bdo> 若放款日晚于27号，则还款日统一为每月26号，节假日不顺延。</div>
		<div class="btn-wrap">
			<button type="button" class="btn l_wd btn-orange" id="btn_repayment">查看还款账单</button>
		</div>
	</div>
<div class="mask_outer none"></div>
<div class="layer-wrap none">
	<div class="bd">
		<p class="hint_tex">您的贷款正在放款处理中，<br/>请耐心等待！</p>
	</div>
	<div class="btn-wrap">
		<button type="button" class="btn s_wd btn-orange" onclick="javascript:window.location.href='credit_card_05'">确认</button>
	</div>
</div>
</body>
</html>
