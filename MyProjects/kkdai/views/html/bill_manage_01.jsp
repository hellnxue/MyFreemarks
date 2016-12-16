<%@ page language="java" import="java.util.*" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<html style=" font-size:70.6667px">
<head>
 
<jsp:include page="../commen.jsp"></jsp:include>


 <title>账单中心-我的账单</title>

</head>
<body >
 <!-- <a data-ajax="false" onclick="ttest()">测试</a> -->
	<div class="header">
		<a href="javascript:history.go(-1)" class="icon ico_back" data-ajax="false"></a>
		我的账单
	</div>
	<div class="maincontainer">
		<%-- <div class="box_wrap2" >
			<div class="title2">
				订单日期ff：
				<div class="pos_a_r">订单编号：</div>
			</div>
			<div class="form_wrap form_noborder">
				<div class="form-group hd">
					<label class="control-label">代还金额：</label>
					元
				</div>
				<div class="form-group">
					<label class="control-label">代还卡号：</label>
					
				</div>
				<div class="form-group">
					<label class="control-label">预约代还日期：</label>
					
				</div>
				<div class="form-group">
					<label class="control-label">还款期数：</label>
					
				</div>
				<div class="form-group">
					<label class="control-label">应还日期：</label>
					
				</div>
				<div class="form-group">
					<label class="control-label">每月应还：</label>
					 元
				</div>
				<a href="javascript:void(0)" class="icon pos_a_r"></a>
			</div>
			<!-- <div class="form_ft ctm-ft"> 
			  <bdo class="c_orange ctm-cursor-ptr v-hidden" data-type="cancel">取消订单</bdo>
			  <bdo class="c_orange ctm-f-r">状态：订单申请中</bdo>  
			</div> -->
			<div class="form_ft ctm-ft"> 
			   支付状态：
			   <bdo class="c_orange">订单申请中</bdo>  
			   <bdo class="c_orange ctm-cursor-ptr m-l-lg" data-type="cancel" onclick="orderCancel(this)">取消订单</bdo>
			    <a class="c_orange ctm-f-r" href="#">
			               立即查看
			     <img src="<%=request.getContextPath()%>/resource/images/j_rt@3x.png" class="ctm-icon1"/>
			    </a>  
			</div>
			
		</div> --%>
	</div>
	
	<div   class="none" id="hhhh">
		<div class="box_wrap2">
			<div class="title2">
				订单日期：#createTime#
				<div class="pos_a_r">订单编号：#orderNo#</div>
			</div>
			<div class="form_wrap form_noborder" onclick="javascript:location.href='./bill_manage_02.html?param=#orderId#'">
					<div class="form-group hd">
						<label class="control-label">代还金额：</label>
						#loanAmt# 元
					</div>
					<div class="form-group">
						<label class="control-label">代还卡号：</label>
						#cardNo#
					</div>
					<div class="form-group">
						<label class="control-label">预约代还日期：</label>
						#appointDate#
					</div>
					<div class="form-group">
						<label class="control-label">还款期数：</label>
						#applyPeroids#
					</div>
					<div class="form-group">
						<label class="control-label">应还日期：</label>
						#repaymentDate#
					</div>
					<div class="form-group">
						<label class="control-label">每月应还：</label>
						#repaymentAmount# 元
					</div>
					<a  class="icon ico_next pos_a_r "  ></a>
			</div>
		    <div class="form_ft ctm-ft"> 
			      	   支付状态：
				   <bdo class="c_orange">#status#</bdo>  
				   <bdo class="c_orange  m-l-lg  v-hidden " data-type="cancel" data-orderId="#orderId#" data-appointDate="#appointDate#">取消订单</bdo>
				   <%--  <a class="c_orange ctm-f-r" href="./bill_manage_02.html?param=#orderId#"  data-ajax="false">
				               立即查看
				     <img src="<%=request.getContextPath()%>/resource/images/j_rt@3x.png" class="ctm-icon1"/>
				    </a>   --%>
			</div>
			
			
		</div>
	</div>
	
	
	
<!-- 数据渲染模板 -->	
<script id="billManageTemplate" type="text/html">
  {{each result as value index}}
		<div class="box_wrap2 m-t-lg ctm-f-t">
			<div class="title2 f-t-b">
				订单日期： {{value.createTime}}
				<div class="pos_a_r">订单编号：{{value.orderNo}}</div>
			</div>
			<!--测试 value.status!=10&&value.status!=20-->
			{{if value.status!=10&&value.status!=20}}
			   
			  <div class="form_wrap form_noborder f-ct ctm-cursor-ptr"  data-href="./bill_manage_02.html?param={{value.orderId}}"> 
			{{else}}

			  <div class="form_wrap form_noborder f-ct"  >
			      
			{{/if}}

					<div class="form-group hd f-ct m-b-none">
						<label class="control-label">代还金额：</label>
						{{value.loanAmt}} 元
					</div>
					<div class="form-group">
						<label class="control-label">代还卡号：</label>
						{{value.cardNo}}
					</div>
					<div class="form-group">
						<label class="control-label">预约代还日期：</label>
						{{value.appointDate}}
					</div>
					<div class="form-group">
						<label class="control-label">还款期数：</label>
						{{value.applyPeroids}}
					</div>
					<div class="form-group">
						<label class="control-label">应还日期：</label>
						{{value.repaymentDate}}
					</div>
					<div class="form-group">
						<label class="control-label">每月应还：</label>
						{{value.repaymentAmount}} 元
					</div>
			    {{if value.status!=10&&value.status!=20}}
			   	    <a  class="icon ico_next pos_a_r "  ></a>
			      
				{{/if}}					
					
			</div>
		    <div class="form_ft ctm-ft f-t-b"> 
			      	   支付状态：
				   <bdo class="c_orange">
					  {{if value.status==10}}
						订单申请中
					  {{else if value.status==11}}
						已放款
					  {{else if value.status==12}}
						已结清
					  {{else if value.status==13}}
						已签约未放款
					  {{else if value.status==20}}
						解约
					  {{/if}}
					</bdo>  
					  {{if value.status==10||value.status==13}}

				       <bdo class="c_orange ctm-f-r   m-l-lg  ctm-cursor-ptr" data-type="cancel" data-orderId="{{value.orderId}}" data-appointDate="{{value.appointDate}}">取消订单</bdo>
						 
					  {{/if}}
				   <%--  <a class="c_orange ctm-f-r" href="./bill_manage_02.html?param=#orderId#"  data-ajax="false">
				               立即查看
				     <img src="<%=request.getContextPath()%>/resource/images/j_rt@3x.png" class="ctm-icon1"/>
				    </a>   --%>
			</div>
			
			
		</div>

  {{/each}}

</script>
	
	<!-- 弹框模板-->
	<div id="ctCode" class="none">
		<div class="custom-code-wrapper">
			<input type="hidden" id="orderId"  data-order="order"/>
			<input type="hidden" id="appointDate"  data-appointDate="appointDate"/>
			<div class="ctm-row m-b">
				<p class="text-center lead m-b-none c_orange">注：取消账单，将导致在约定日信用卡代还失效。</p>
				<p class="text-center lead m-b-none">您确定要取消账单吗？</p>
				<p class="text-center lead m-b-none">请再次确认并输入手机验证码。</p>
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
					<button class="btn custom-btn c_orange" type="button"
						data-cancel="cancelation">取消</button>
				</div>
				<div class="ctm-col-6 pull-right text-right">
					<button class="btn custom-btn btn-orange  ctm-box-shadow" type="button"
						data-confirm="confirm">确认</button>
				</div>
			</div>
		</div>
	</div>

<script type="text/javascript" src="<%=request.getContextPath()%>/resource/js/jquery.mobile-1.4.5.js"></script>
<script src="<%=request.getContextPath()%>/resource/js/common/layer.js" type="text/javascript"></script>
<script type="text/javascript">
	var  sessionUserId= '${userSession.userId}';
	var  sessionMobile= "${userSession.mobilePhone}";
</script> 
<%-- <script src="<%=request.getContextPath()%>/resource/js/views/html/bill_manage_01.js" type="text/javascript" ></script>
 --%>	 	



<script src="<%=request.getContextPath()%>/resource/js/common/template.js" type="text/javascript" ></script>
<script src="<%=request.getContextPath()%>/resource/js/views/html/bill_manage_01.js" type="text/javascript" ></script>
	
</body>
</html>
