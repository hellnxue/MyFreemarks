<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="../commen.jsp"></jsp:include>
<title>信贷GUI</title>
</head>
<body class="white_bg">
	<div class="header header_gray">
		<a href="index" class="hd_left"><i class="icon ico_back"></i>返回</a>
	</div>
	<div class="index_bg"></div>
	<div class="maincontainer">
		<div class="index_text">
			￥<span> ${creditAmount}</span>
			<p>您的信用额度</p>
		</div>
		<div class="btn-wrap index_btn">
			<button id='apply_amount' type="button" processCode="${processCode}" class="btn m_wd btn-orange">申请额度</button>
			<button id='repayment_amount' type="button" processCode="${processCode}" class="btn m_wd btn-orange">代还信用卡</button>
			<button id='billing_center' type="button" processStatus="${processStatus}" class="btn m_wd btn-orange">账单中心</button>
		</div>
		<div class="index_footer"></div>
		<input type="button" id='zhimaxinyong' value='芝麻信用'>
	</div>
</body>
<script type="text/javascript">
$(document).ready(function(){
	
	$("input[id=zhimaxinyong]").bind("click", function(){
		$.ajax({
			async: false,
			type: "post",
			dataType: 'json',
			url: 'zmxy',
			data: {type:"Q"},
			success: function(data) {
				if(data.code == '0000'){
					window.location.href= data.result;
				}
			}
		});
	})
	
	var dom = $("button[id=apply_amount]");
	if(dom.attr("processCode") == '00' || '' == dom.attr("processCode") ||'null' == dom.attr("processCode")){
		dom.bind("click", function(){
			window.location.href='authentication_02';
		})
	}else if(dom.attr("processCode") == '10'){
		dom.bind("click", function(){
			window.location.href='linkman';
		})
	}else if (dom.attr("processCode") == '20'){
		dom.bind("click", function(){
			window.location.href='operator_01';
		})
	}else if(dom.attr("processCode") == '30'){
		dom.bind("click", function(){
			window.location.href='credit_03';
		})
	}else if(dom.attr("processCode") == '40' || dom.attr("processCode") == '50'){
		dom.css("background", "gray");
	}
	
	var dom2 = $("button[id=repayment_amount]");
	if(dom2.attr("processCode") == '00' || dom2.attr("processCode") == '10' || dom2.attr("processCode") == '20' || dom2.attr("processCode") == '30' || dom.attr("processCode") == ''){
		dom2.css("background", "gray");
	}else if(dom2.attr("processCode") == '40' || dom2.attr("processCode") == '50'){
		dom2.bind("click", function(){
			window.location.href='credit_card_01';
		})
	}
	
	var dom3 = $("button[id=billing_center]");
	if(dom3.attr("processStatus") == '1'){
		dom3.bind("click", function(){
			window.location.href='bill_manage_01';
		})
	}else if(dom3.attr("processStatus") == '0' || dom3.attr("processStatus") == ''){
		dom3.css("background", "gray");
	}
})
</script>
</html>
