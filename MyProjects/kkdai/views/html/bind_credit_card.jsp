<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="../commen.jsp"></jsp:include>
<script type="text/javascript" src="resource/js/json.js"></script>
<title>银行卡绑定</title>

</head>
<body>
	<div class="header">
		<a href="index" class="icon ico_back"></a>
		银行卡绑定
	</div>
	<div class="maincontainer">
	<form action="vefCard" method="post">
		<div class="tips_info gray_bg">请绑定本人银行卡</div>
		<div class='form_wrap mt20_no'>
			<div class="form-group">
				<label class="control-label">持卡人：</label>
			    <input class="form-control" name="name" placeholder="请输入姓名" type="text" required="required">
			</div>
			<div class="form-group">
				<label class="control-label">省份</label>
			    <span id='province'>选择发卡行省份</span>
				<input type='hidden' name='province' class='validate' msg='选择发卡行省份'/>
				<i class="icon ico_arrow_down"></i>
				<div class="subnav none">
					<a href="javascript:void(0)" code='201'>在校</a>
					<a href="javascript:void(0)" code='202'>在职</a>
					<a href="javascript:void(0)" code='203'>自由职业</a>
				</div>
			</div>
			<div class="form-group">
				<label class="control-label">城市</label>
				<span id='city'>选择发卡行城市</span>
			    <input type='hidden' name='cardCity' class='validate' msg='选择发卡行城市'/>
				<i class="icon ico_arrow_down"></i>
				<div class="subnav none">
					<a href="javascript:void(0)" code='201'>在校</a>
					<a href="javascript:void(0)" code='202'>在职</a>
					<a href="javascript:void(0)" code='203'>自由职业</a>
				</div>
			</div>
			<div class="form-group">
				<label class="control-label">卡号</label>
			    <input class="form-control" name="cardNo" placeholder="银行卡号" type="text" required="required">
			</div>
		</div>
		<div class="tips_info gray_bg">认证通过后，该卡将成为购买理财产品的<bdo class="font_red_color">安全卡</bdo>!<br></br></div>
		<div class="tips_info gray_bg">
		    <button id='next_step' class="btn_new" type="button">下一步</button>
		</div>
	</form>
	</div>
	
	<div class="mask_outer none"></div>
	<div class="layer-wrap none">
		<div class="bd">
		    <center>&nbsp;</center>
			<center>您的信息填写有误，</center>
			<center>请核对后再输入，</center>
			<center>谢谢！</center>
		</div>
		<div class="btn-wrap">
			<!-- <button class="btn_new" type="button" onclick="javascript:window.location.href='./bind_credit_card_info.html'">下一步</button> -->
			<button class="btn_new" type="button" onclick="javascript:window.location.href='./bind_credit_card'">下一步</button>
		</div>
	</div>
	
	<script src="<%=request.getContextPath()%>/resource/js/views/JSON/dataJSON.js" type="text/javascript" ></script>
	<script type="text/javascript">
	var code = "${code}"; 
	var msg = "${msg}";
 
	</script>
	<script src="<%=request.getContextPath()%>/resource/js/views/html/bind_credit_card.js" type="text/javascript" ></script>  
	
</body>
</html>