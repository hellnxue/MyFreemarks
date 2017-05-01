<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="../commen_mui.jsp"></jsp:include>
<script type="text/javascript" src="resource/js/json.js"></script>
<title>银行卡绑定</title>

</head>
<body>
	<div class="tips_main" style="display:none;">
		<p class="lead"></p>
    </div>
	<div class="header">
		<a href="javascript:history.go(-1);" class="icon ico_back"></a>
		银行卡绑定
	</div>
	<div class="maincontainer m-t-md">
	<form action="vefCard" method="post">
		<input type='hidden' name='type' />
		<div class="tips_info gray_bg l-t-entry">请绑定本人借记卡</div>
		<div class='form_wrap mt20_no'>
			<div class="form-group hm-form-group">
				<label class="control-label">持卡人：</label>
			    <input class="form-control validate" name="name" placeholder="请输入姓名" type="text" required="required" msg='请输入持卡人姓名'>
			</div>
			<div class="form-group">
				<label class="control-label">省份</label>
			    <span id='province'>选择发卡行省份</span>
				<input type='hidden' name='province' class='validate' msg='选择发卡行省份'/>
				<i class="icon ico_arrow_down"></i>
				<div class="subnav none">
				</div>
			</div>
			<div class="form-group">
				<label class="control-label">城市</label>
				<span id='city'>选择发卡行城市</span>
			    <input type='hidden' name='cardCity' class='validate' msg='选择发卡行城市'/>
				<i class="icon ico_arrow_down"></i>
				<div class="subnav none">
				</div>
			</div>
			<div class="form-group hm-form-group">
				<label class="control-label">卡号</label>
			    <input class="form-control validate" name="cardNo" placeholder="银行卡号" type="text" required="required" msg='请输入银行卡号'>
			</div>
		</div>
<!-- 		<div class="tips_info gray_bg">认证通过后，该卡将成为购买理财产品的<bdo class="font_red_color">安全卡</bdo>!<br></br></div>

 -->	<div class="l-t-entry gray_bg m-t-md">绑定成功后，该借记卡将成为唯一还款安全卡，如需替换，请到我的银行卡列表根据提示操作。</div>
 		<div class="tips_info gray_bg m-t-xxxl">
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
	
	var hType="${param.type}";//卡类型
	var hFrom="${param.from}";//替换标示
 
	</script>
	<script src="<%=request.getContextPath()%>/resource/js/views/html/bind_credit_card.js" type="text/javascript" ></script>  
	
</body>
</html>