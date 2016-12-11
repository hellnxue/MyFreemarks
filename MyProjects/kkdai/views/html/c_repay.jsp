<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="../commen.jsp"></jsp:include>
<title>还款明细</title>
</head>

<body style="background-color:#F3F3F3;">
    <div class="header header_y">
		<!-- <a href="#" class="icon hd_left"></a> -->
		<a href="javascript:history.go(-1)" class="icon ico_back"></a>
		还款明细
	</div>
	<div id="main">
		
		
		<div class="btn-wrap ctm-mx-m-t" data-btm>
			<button class="btn ctm-mx-btn btn-orange ctm-box-shadow" type="button" data-repayment>提交还款</button>
		</div>
	</div>

	<!-- 数据渲染模板 -->	
	<script id="specifyTemplate" type="text/html">
		<div class="hk_mx_box">
			<div class="hk_line2"></div>
			<div class="hk_mx_t">
				{{repaymentDate}}  &nbsp;<span>第 {{billPeriod}} 期</span>
			</div>
			<div class="hk_mx_m">
				还款金额<span>{{total}}元</span>
			</div>
			<div class="hk_mx_card">
				<img src="resource/images/img/card_1@2x.png" class="hk_mx_card_img" />扣款银行卡<span>{{cardBank}}</span>
			</div>
			<div class="hk_mx_text">
				<p class="t1">还款明细</p>
				<p class="t2">
					还款本金： 
				{{if payAmt}}
					{{payAmt}}
				{{else}}
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				{{/if}}
				<span>手续扣款：
				{{if handingFee}}
					{{handingFee}}
				{{else}}
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				{{/if}}
				</span>
				</p>
				<p class="t2">
					分期利息： 
					{{if interest}}
						{{interest}}
				    {{else}}
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				    {{/if}}
				<span>逾期费： 
					{{if lateCharge}}
						{{lateCharge}}
				    {{else}}
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				    {{/if}}
				</span>
				</p>
				<p class="t2">
					逾期扣失：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>提前还：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
				</p>
			</div>


		</div>

	</script>
	  
	  
	  
	  
	  
	  
	  
	  
<!--   <div class="hk_ceng">
    <p style=" padding-top:0.55rem;">请在下方输入手机189****7878，</p>
     <p>所收到的验证码</p>
     <div class="hk_yzm">
       <input type="text" class="hk_ipt" />
       <div class="hk_yzm_text">倒计时55秒</div>
     </div>
     
        <button class="hk_btn" value=""> 确认提交</button>
     
   
  </div> -->
	<!-- 弹框模板-->
	<div id="ctCode" class="none">
		<div class="custom-code-wrapper">
			<div class="ctm-row ">
				<!-- <p class="text-center lead m-b-none c_orange">注：取消账单，将导致在约定日信用卡代还失效。</p>
				<p class="text-center lead m-b-none">您确定要取消账单吗？</p> -->
				<p class="text-center lead m-b-none" data-info>请在下方输入手机13671832769，所收到的验证码</p>
			</div>
			<div class="ctm-row wrpBorder clearfix m-t-xxl ">
				<div class="custom-col-l">
					<input  name="verifyCode" class="custom-form-control" placeholder="请输入验证码" type="text" data-input="dy">
				</div>

				<div class="custom-col-r ctm-cursor">
					<div class="codeBorder c_orange"></div>

					<span class="m-t-xs catch " id="checkcode">获取验证码</span>

				</div>
			</div>

			<div class="ctm-row m-t-xxxl ">
			
				<button class="btn  custom-btn btn-orange ctm-layer-btn" type="button" data-confirm>确认还款</button>
				 
			</div>
		</div>
	</div>  
<script src="<%=request.getContextPath()%>/resource/js/common/layer.js" type="text/javascript"></script>
<script type="text/javascript">
	var  sessionUserId= '${userSession.userId}';
	var  sessionMobile= "${userSession.mobilePhone}";
	var  pmOrderId= "${param.param}";
	var  billId= "${param.billId}";
</script> 

<script src="<%=request.getContextPath()%>/resource/js/common/template.js" type="text/javascript" ></script>
<script src="<%=request.getContextPath()%>/resource/js/views/html/c_repay.js" type="text/javascript" ></script>  
</body>
</html>
