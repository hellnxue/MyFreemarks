<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="../commen.jsp"></jsp:include>
<title>账单中心-还款状况</title>
</head>
<body>
		<header class="ctm-header ctm-header-default">
			<a href="bill_manage_01.html" class="nav-left-icon"> <em></em>
			</a> 
			<!-- <a href="#" class="nav-right-icon"> <span>返回首页</span>
			</a> -->
			<h1 class="ctm-header-title">还款状况</h1>
		</header>
	<div class="ctm-container bill-table" >
		<div class="ctm-row">
			<div class="custom-col-5 ctm-cursor-ptr cur" data-tab="bill"><span>分期账单</span></div>
			<div class="custom-col-5 ctm-cursor-ptr" data-tab="record"><span>还款记录</span></div>
		</div>
	</div>
	<div class="maincontainer">
		<div data-bill>
		
		</div>
		<div data-record>
		    
		</div>
		<!-- <div class="box_wrap2" style="display:none">
			<div class="title2">
				应还日期：
				<div class="pos_a_r">期数：<bdo class="c_orange"></bdo></div>
			</div>
			<div class="form_wrap form_noborder">
				<div class="form-group">
					<label class="control-label">应还金额：</label>
					 元
				</div>
				<div class="form-group">
					<label class="control-label">超期罚息：</label>
					 元
				</div>
				<div class="form-group">
					<label class="control-label">扣款日期：</label>
					
				</div>
			</div>
			<div class="form_ft">支付状态：<bdo class="c_orange"></bdo></div>
		</div>
		<div class="btn-wrap mt280" id="btnRepay">
			<button class="btn l_wd btn-orange disabled" type="button">提前还款</button>
		</div> -->
	</div>
	
	<!-- 分期账单数据渲染模板 -->	
	<script id="billManageTemplate" type="text/html">

		{{if bills}}
         
	      {{each bills as bill index0}}
	      <div class="box_wrap2   ctm-f-t">
			<div class="title2 f-t-b">
				应还日期：{{bill.repaymentDate}}

				{{if bill.overdueDay}}
					<span class="m-l-xl">逾期天数：{{bill.overdueDay}}</span>
				{{/if}}

				<div class="pos_a_r">期数：<bdo class="c_orange">{{bill.billPeriod}}</bdo></div>
			</div>
			<div class="form_wrap form_noborder f-ct m-b-none">
				<div class="form-group ctm-hor-l c_orange">
					<label class="control-label">应还总额：</label>
					{{bill.total}} 元
				</div>
				<div class="form-group ctm-hor-r">

				  {{if bill.actualRepayDate}}
					<label class="control-label">扣款日期：</label>
					{{bill.actualRepayDate}}
				  {{else}}
					<label class="control-label">&nbsp;</label>

				  {{/if}}

				</div>

				<div class="form-group ctm-hor-l">
					<label class="control-label">还款本金：</label>
					{{bill.payAmt}} 元
				</div>
				<div class="form-group ctm-hor-r">
					<label class="control-label">还款利息：</label>
					{{bill.interest}}
				</div>

				<div class="form-group ctm-hor-l">
					<label class="control-label">滞纳金：</label>
					{{bill.lateCharge}} 元
				</div>
				<div class="form-group ctm-hor-r">
					<label class="control-label">超期罚息：</label>
					{{bill.deductionFee}}
				</div>

 				<div class="form-group ctm-hor-l">
					<label class="control-label">手续费：</label>

					{{if bill.monthServiceFee==0}}
						    无
					 {{else}}
					     {{bill.monthServiceFee}}元						
					 {{/if}} 
				</div>
				<div class="form-group ctm-hor-r">
					

					{{if bill.deduck!=0}}
						<label class="control-label">减免：</label>
						  {{bill.deduck}}元		
					 
					     				
					 {{/if}} 
				</div>

			</div>
			<!-- <div class="form_ft">支付状态：<bdo class="c_orange">{{bill.payStatus}}</bdo></div> -->
			<div class="form_ft ctm-ft  f-t-b">
			   支付状态：
				   <bdo class="c_orange"> 
					  {{if bill.payStatus==0}}
						已还
					  {{else if bill.payStatus==1}}
						结清
					  {{else if bill.payStatus==2}}
						逾期
					  {{else if bill.payStatus==3}}
						未还
					  {{else if bill.payStatus==4}}
						订单取消
					  {{else if bill.payStatus==5}}
						还款处理中
					  {{else if bill.payStatus==6}}
						放款处理中
					  {{else if bill.payStatus==7}}
						还款失败
					  {{/if}}

				 </bdo> 
					  
					  {{if bill.payStatus==2||bill.payStatus==3}}

				  	     <a class="c_orange ctm-f-r " href="javascript:void(0)"  data-repayment-immediately  data-id="{{bill.id}}" data-billPeriod="{{bill.billPeriod}}" data-payStatus="{{bill.payStatus}}">
				             	  立即还款
				    	 <img src="<%=request.getContextPath()%>/resource/images/j_rt@3x.png" class="ctm-icon1"/>
				   		</a>
 
				  		<!-- <a class="c_orange ctm-f-r " href="./bill_manage_02.html?param={{bill.orderId}}"  data-ajax="false">
				             	  立即还款
				    	 <img src="<%=request.getContextPath()%>/resource/images/j_rt@3x.png" class="ctm-icon1"/>
				   		</a> -->

					  {{else if bill.payStatus==5}}
				  		 <a class="c_orange ctm-f-r " href="./c_repay_status.html?params={{bill.orderId}}"  data-ajax="false">
				             	  立即查看
				    	 <img src="<%=request.getContextPath()%>/resource/images/j_rt@3x.png" class="ctm-icon1"/>
				   		</a> 
					  {{/if}}  
			</div>	    
				    
		   </div>
          {{/each}}

		{{else}}
			<div class="text-center"><h5 style="font-size:0.3rem;font-weight:500;margin-top: 2rem;">暂无记录！</h5></div>
		{{/if}}
		<!--提前还款-->	
		{{if  status=="11"&&whLen>1&&whLen!=1&&!isShow}}
		   <div class="btn-wrap m-t-lg" id="btnRepay">
			 <button class="btn l_wd btn-orange ctm-box-shadow" type="button" data-bid="{{bid}}" data-repayment  >提前还款</button>
		   </div>			
		  <!-- <div class="btn-wrap m-t-lg" id="btnRepay">
			 <button class="btn l_wd btn-orange disabled ctm-box-shadow-none custom-btn-hfnone" type="button">提前还款</button>
		   </div>	-->
		{{/if}}	 

	</script>
		
	<!-- 还款记录数据渲染模板 -->	
	<script id="detailManageTemplate" type="text/html">

		{{if details}}
         <div>
	      {{each details as detail index0}}
	      <div class="box_wrap2   ctm-f-t history_list" data-detail-id="{{detail.id}}">
			<div class="title2 f-t-b">
				还款日期：{{detail.repaymentDate}}
				<div class="pos_a_r">期数：<bdo class="c_orange">{{detail.billPeriod}}</bdo></div>
			</div>
			<div class="form_wrap form_noborder f-ct m-b-none">
				<div class="form-group">
					<label class="control-label">还款金额：</label>
					{{detail.total}}元
					<img class="detailsInfo m-l-lg" src="<%=request.getContextPath()%>/resource/images/main/v1/mark@2x.png"  >	
				</div>
				<div class="form-group">
					<label class="control-label">支付状态：</label>
					<bdo class="c_orange">
					 {{if detail.payStatus==0}}
						已还
					  {{else if detail.payStatus==1}}
						结清
					  {{else if detail.payStatus==2}}
						逾期
					  {{else if detail.payStatus==3}}
						未还
					  {{else if detail.payStatus==4}}
						订单取消
					  {{else if detail.payStatus==5}}
						还款处理中
					  {{else if detail.payStatus==6}}
						放款处理中
					  {{else if detail.payStatus==7}}
						还款失败
					  {{/if}}
					</bdo>
				</div>
				<div class="form-group">
					<label class="control-label">扣款时间：</label>
					{{detail.actualRepayDate}}
				</div>
			</div>
			<div class="form_ft ctm-ft  f-t-b">
			  类型：<bdo class="c_orange">  {{detail.repayType}} </bdo> 
			</div>	    
				    
		   </div>
          {{/each}}
		  </div>
		{{else}}
			<div class="text-center"><h5 style="font-size:0.3rem;font-weight:500;margin-top: 2rem;">暂无记录！</h5></div>
		{{/if}}


	</script>
	
	<script id="selectedDetail" type="text/html"> 
			<ul class="clearfix">
					<li>
						<div class="custom-col-5">
							<span>应还总额</span>
						</div>
						<div class="custom-col-5">
							<span>{{total}}元</span>
						</div>
					</li>
					<li>
						<div class="custom-col-5">
							<span>还款本金</span>
						</div>
						<div class="custom-col-5">
							<span>{{payAmt}}元</span>
						</div>
					</li>
					<li>
						<div class="custom-col-5">
							<span>还款利息</span>
						</div>
						<div class="custom-col-5">
							<span>{{interest}}元</span>
						</div>
					</li>
					<li>
						<div class="custom-col-5">
							<span>滞纳金</span>
						</div>
						<div class="custom-col-5">
							<span>{{lateCharge}}元</span>
						</div>
					</li>
					<li>
						<div class="custom-col-5">
							<span>超期罚息</span>
						</div>
						<div class="custom-col-5">
							<span>{{deductionFee}}元</span>
						</div>
					</li>
					<li>
						<div class="custom-col-5">
							<span>手续费</span>
						</div>
						<div class="custom-col-5">
							<span>{{handingFee}}元</span>
						</div>
					</li>															
				</ul>		
	</script>

	<!-- 底部弹出层 -->
	<div class="mask_outer none" data-mask-outer></div>
	<div class="layer-wrap none window_credit ctm-layer-wrapper hty-record"  >
		<!-- <div class="credit_title orange">请选择代还信用卡号</div>
		<div class='credit_list' data-credit-list>
		
	    </div>
	   <div class='credit_close'> </div>  -->
	   
	   	<div class="ctm-container">
	   	   <div class="ctm-row">
	   	     <div class="custom-col-10 ctm-layer-title" >
				<img src="<%=request.getContextPath()%>/resource/images/main/v1/follow@2x.png">
				<span class="m-l-sm">还款金额明细</span> 
			 </div>
	   	   </div>
	   	   <div class="ctm-row ctm-layer-content" id="detailItem">
	   	   
	   	   </div>
	   	</div>
	</div>
<script src="<%=request.getContextPath()%>/resource/js/common/layer.js" type="text/javascript"></script>
<script type="text/javascript">
	var  sessionUserId= '${userSession.userId}';
	var  pmOrderId= "${param.param}";
</script> 

<script src="<%=request.getContextPath()%>/resource/js/common/template.js" type="text/javascript" ></script>
<script src="<%=request.getContextPath()%>/resource/js/views/html/bill_manage_02.js" type="text/javascript" ></script>
</body>
</html>