<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="../commen.jsp"></jsp:include>
<title>信贷GUI-已还款页面</title>

</head>
<body >
	<div class="header">
		<a href="javascript:history.go(-1)" class="icon ico_back" id="pageback"></a>
		已还款页面
	</div>
	<div class="maincontainer repay-wrapper">
		<div class="text-con">
			<div class="hd">恭喜您，<bdo class="c_orange fs50" id="loanAmount"></bdo> 代还成功！</div>
			<p>放款余额将在预约日汇入您的<bdo id="creditName"></bdo>信用卡（尾号<bdo class="c_orange" id="creditNo"></bdo>）中。</p>
		</div>
		<div class="box_circle box_gray_circle">
			<div class="hd">代还信用卡丨<span class="m-l-sm" id="creditBank"></span></div>
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
		<div class="tips c_424242"><bdo class="c_orange">*</bdo> 还款日统一为次月的放款日期，若次月无该日期，则统一为该月的
		<p class="indent">最后一天，请以还款分期计划日期为准。</p></div>
		<div class="btn-wrap">
			<button type="button" class="btn l_wd btn-orange ctm-box-shadow" id="btn_repayment">查看还款账单</button>
		</div>
	</div>
<div class="mask_outer none"></div>
<div class="layer-wrap none">
	<div class="bd">
		<p class="hint_tex">您的贷款正在放款处理中，<br/>请耐心等待！</p>
	</div>
	<div class="btn-wrap">
		<button type="button" class="btn s_wd btn-orange ctm-box-shadow" onclick="javascript:window.location.href='credit_card_05'">确认</button>
	</div>
</div>
<script type="text/javascript">
 	var orderId = "${param.orderId}";
 	var userId = "${userSession.userId}";
   
</script>
<script src="<%=request.getContextPath()%>/resource/js/views/html/credit_card_04.js" type="text/javascript" ></script>  

</body>
</html>
