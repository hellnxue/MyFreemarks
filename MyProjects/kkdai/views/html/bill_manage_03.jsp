<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="../commen.jsp"></jsp:include>
<title>账单中心-提前还贷</title>
<style type="text/css">
.displayno {
	display:none;
}
</style>
<script type="text/javascript" src="resource/js/jquery.min.js"></script>
<script type="text/javascript">
   
</script>
</head>
<body class="white_bg">
	<div class="header">
		<a href="./bill_manage_02.html" class="icon ico_back" id="pageback"></a>
		提前还贷
	</div>
	<div class="maincontainer">
		<div class="tips_info">
			<i class="icon ico_sign"></i>如要提前清贷，除剩余本金外，涉及到的其他费用，如下
		</div>
		<div class="box_circle">
			<div class="form_wrap form_msg">
				<div class="form-group">
					<label class="control-label">剩余本金</label>
					<bdo class="form_text_right"><label class="c_orange displayno">#oddCorpus#</label> 元</bdo>
				</div>
				<div class="form-group">
					<label class="control-label">本月未计利息</label>
					<bdo class="form_text_right c_orange displayno">#monthlyInterest#</bdo>
				</div>
				<div class="form-group">
					<label class="control-label">逾期费用</label>
					<bdo class="form_text_right c_orange displayno">#demurrage#</bdo>
				</div>
				<div class="form-group">
					<label class="control-label">提前清贷手续费</label>
					<bdo class="form_text_right c_orange displayno">#handlingcharge#</bdo>
				</div>
				<div class="form-group">
					<label class="control-label">扣款时间</label>
					<bdo class="form_text_right c_orange">实时</bdo>
				</div>
				<div class="form-group">
					<bdo class="form_text_right fs36">总计<label class="c_orange displayno">#totaling#</label></bdo>
				</div>
			</div>
		</div>
		<div class="btn-wrap mt280">
			<button type="button" class="btn btn-orange ctm-box-shadow" id="btn_repayment">确认还款</button>
		</div>
	</div>
<div class="mask_outer none"></div>




	<!-- 弹框模板-->
	<div id="ctCode" class="none">
		<div class="custom-code-wrapper">
			<input type="hidden" id="orderId"  data-order="order"/>
			<input type="hidden" id="appointDate"  data-appointDate="appointDate"/>
			<div class="ctm-row m-b">
			<!-- 	<p class="text-center lead m-b-none c_orange">注：取消账单，将导致在约定日信用卡代还失效。</p>
				<p class="text-center lead m-b-none">您确定要取消账单吗？</p> -->
				<p class="text-center lead m-b-none">您确定要一次性清贷吗？请再次确认并输入手机动态码，通过后将一次性从您绑定的借记卡中扣除所有提前清贷费用。</p>
			</div>
			<div class="ctm-row wrpBorder clearfix m-t-xxl">
				<div class="custom-col-l">
					<input  name="verifyCode" class="custom-form-control" placeholder="请输入验证码" type="text" data-input="dy">
				</div>

				<div class="custom-col-r ctm-cursor-ptr">
					<div class="codeBorder c_orange"></div>

					<span class="m-t-xs catch " id="checkcode">获取验证码</span>

				</div>
			</div>

			<div class="ctm-row m-t-xxxl clearfix">

				<div class="ctm-col-6 pull-left text-left">
					<button class="btn custom-btn c_orange" type="button" data-cancel="cancelation">取消</button>
				</div>
				<div class="ctm-col-6 pull-right text-right">
					<button class="btn custom-btn btn-orange ctm-box-shadow" type="button" data-confirm="confirm" style="cursor:default;">确认</button>
				</div>
			</div>
		</div>
	</div>
<!-- <div class="layer-wrap none">
	<div class="bd">
		<p>您确定要一次性清贷吗？请再次确认并输入手机动态码，通过后将一次性从您绑定的借记卡中扣除所有提前清贷费用。</p>
		<div class="yzm_wrap mt20">
			<input type="text" name="verifyCode" value="" placeholder="请输入验证码" class="form-control form-control-circle m_wd"/>
			<button type="button" class="btn xs_wd btn-orange-circle" id="btnSend">发送</button>
		</div>
	</div>
	<div class="btn-wrap mt60">
		<button type="button" class="btn s_wd btn-orange" id="btnCancel">取消</button>
		<button type="button" class="btn s_wd btn-orange disabled" onclick="javascript:void(0)" id="btnConfirm">确认</button>
	</div>
</div> -->

<script src="<%=request.getContextPath()%>/resource/js/common/layer.js" type="text/javascript"></script>
<script type="text/javascript">
	var  sessionUserId= '${userSession.userId}';
	var  param= "${param.param}";
	var  sessionMobile= "${userSession.mobilePhone}";
</script> 

<script src="<%=request.getContextPath()%>/resource/js/common/template.js" type="text/javascript" ></script>
<script src="<%=request.getContextPath()%>/resource/js/views/html/bill_manage_03.js" type="text/javascript" ></script>  
</body>
</html>
