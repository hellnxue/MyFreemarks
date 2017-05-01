<%@ page language="java" import="java.util.*" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<html style=" font-size:70.6667px">
<head>
 
<jsp:include page="../commen_mui.jsp"></jsp:include>


 <title>账单中心-我的账单</title>

</head>
<body >
	<!-- <header class="ctm-header ctm-header-default">
			<a href="index" class="nav-left-icon" data-ajax="false"> <em></em> </a> 
			<h1 class="ctm-header-title">我的账单</h1>
	</header> -->
	
	<div class="mui-content">
	 <!--下拉刷新容器-->
		<div id="pullrefresh" class="mui-content mui-scroll-wrapper">
			<div class="mui-scroll">
				<!--数据列表-->
				<ul class="mui-table-view hm-table-view mui-table-view-chevron hm-table-view-no-bd" data-bill-items>
					
				</ul>
			</div>
		</div>
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
	 <div class="ctm-container m-t-xxxl none" id="noMessage">
	  
		<div class="ctm-img-wrapper text-center" data-success>
		   <img src="<%=request.getContextPath()%>/resource/images/main/v1/email@2x.png" width="30%"/>
		   <p class="m-t-xxl p-t img-title" style="font-size: 0.38rem;">您尚无账单信息</p>
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
			{{if value.status!=10&&value.status!=20&&value.status!=14}}
			   
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
						{{value.creditNo}}
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
			    {{if value.status!=10&&value.status!=20&&value.status!=14}}
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
					  {{else if value.status==14}}
						审核未通过
					  {{else if value.status==20}}
						解约
					  {{/if}}
					</bdo>  
					  {{if value.status==10||value.status==13}}
						  {{if value.cancOrder==0&&value.appointDate!=currentDate}}
							
				       		<bdo class="c_orange ctm-f-r   m-l-lg  ctm-cursor-ptr" data-type="cancel" data-orderId="{{value.orderId}}" data-appointDate="{{value.appointDate}}">取消订单</bdo>
						  {{/if}}
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
				<p class="text-center lead c_orange" data-friendly></p>
			</div>
			<div class="ctm-row wrpBorder clearfix m-t-xxl">
				<div class="custom-col-l">
					<input  name="verifyCode" class="custom-form-control hm-no-border hm-verify-ode" placeholder="请输入验证码" type="text" data-input="dy">
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
