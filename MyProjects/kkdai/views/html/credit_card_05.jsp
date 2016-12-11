<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="../commen.jsp"></jsp:include>
<title>信贷GUI-还款账单</title>
</head>
<body class="white_bg">
	<div class="header">
		<a href="./credit_card_04.html" class="icon ico_back"></a>
		还款账单
	</div>
	<div class="maincontainer">
		<div class="repayment_account">
			<div class="repayment_con">
				<div class="hd">工商丨6222 **** **** 2205<span class="pos_a_r date">2016-06-06</span></div>
				<div class="bd">
					应还金额<span class="btn_group"><a href="#">逾期</a></span>
					<div class="money">200.00</div>
				</div>
			</div>
		</div>
		<div class="form_wrap form_msg">
			<div class="form-group">
				<label class="control-label">借款金额</label>
				<bdo class="form_text_right c_orange">3000</bdo>
			</div>
			<div class="form-group">
				<label class="control-label">每月应还</label>
				<bdo class="form_text_right">278.5</bdo>
			</div>
			<div class="form-group">
				<label class="control-label">逾期费用</label>
				<bdo class="form_text_right c_orange">60</bdo>
			</div>
			<div class="form-group">
				<label class="control-label">扣款日期</label>
				<bdo class="form_text_right">每月6日零点</bdo>
			</div>
			<div class="form-group">
				<label class="control-label">已还期限</label>
				<bdo class="form_text_right">0/12</bdo>
			</div>
		</div>
	</div>
</body>
</html>
