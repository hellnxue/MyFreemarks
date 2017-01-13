<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
<jsp:include page="../commen.jsp"></jsp:include>
<title>信贷GUI-银行卡信息2</title>
<link type="text/css" href="<%=request.getContextPath()%>/resource/css/common/mobiscroll_date.css" rel="stylesheet" />
 
</head>
<body>
  	<!--提示-->
	 <div class="tips_main" style="display:none;">
			<p class="lead"></p>
	 </div>
	 
	<div class="header">
		<a href="javascript:void(0);" class="icon ico_back" id="proBack"></a>
		银行卡信息
	</div>
	
	
	<div class="maincontainer">
	<!-- 返回数据隐藏域 -->
	<form action="productList" method="post" id="productList">
         <input name="loanAmt" value="${param.loanAmt}" type="hidden">
         <input name="productCode" value="${param.productCode}" type="hidden">
    </form>        
            
	<form action="./credit_card_04.html" method="post" name="myform">
		<div class="tips_info">
			<i class="icon ico_sign"></i>亲，您申请的金额需大于1000小于您的授信额度哦~~
		</div>
		<div class="box_circle circle_not_b">
			<div class="hd" ><span data-credit>&nbsp;</span><i class='more_crieds'></i></div>
			<input type="hidden" name="creditBank" value=""/>
			<input type="hidden" name="creditCardNo" value=""/>
			<input type="hidden" name="md5CreditNo" value=""/>
			<input type="hidden" name="productCode" value="<%=request.getParameter("productCode")%>"/>
			<input type="hidden" id="creditAmount" value="${userSession.creditAmount}"/>
			<input type="hidden" id="userId" name='userId' value="${userSession.userId}"/>
			<input type="hidden" id="bankKey" name='bankKey' value="${credit.bankKey}"/>
			<div class="form_wrap">
				<div class="form-group">
					<label class="control-label">申请代还金额</label>
					<input type="text" name='loanAmt' value="<%=request.getParameter("loanAmt")==null?"":request.getParameter("loanAmt")  %>" id="amount" placeholder="最低1000且为100整数倍" class="form-control form_ipt_right" readonly="readonly"/>
				</div>
				<div class="form-group">
					<label class="control-label">还款期数</label>
					<span style="text-align:right;margin-right:0.6rem;"><%=request.getParameter("repaymentPeriod")==null?"":request.getParameter("repaymentPeriod")%></span>
					<input type="hidden" name="repaymentPeriod" value="<%=request.getParameter("repaymentPeriod")%>" />
					<!-- <i class="icon ico_arrow_down" style="right:0.45rem ;"></i>
					<div class="subnav none">
						<a href="javascript:void(0)">6个月</a>
						<a href="javascript:void(0)">12个月</a>
						<a href="javascript:void(0)">18个月</a>
						<a href="javascript:void(0)">24个月</a>
					</div> -->
				</div>
				<div class="form-group">
					<label class="control-label">手续费</label>
					<bdo class="form_text_right c_orange fs36" id="poundage"><%=request.getParameter("poundage")==null?"":request.getParameter("poundage")%></bdo>
					<input type="hidden" name="poundage" value="<%=request.getParameter("poundage")%>" />
				</div>
				<div class="form_hint">注：手续费需从代还金额中扣除</div>
				<div class="form-group">
					<label class="control-label">放款日期</label>
					<input required="required" type="date" name="makeLoanDay" readonly="readonly" value="<%= request.getParameter("makeLoanDay") == null  ? "" : request.getParameter("makeLoanDay") %>" class="form-control form_ipt_right_ico" id="makeLoanDay" style="background:url(resource/images/day@3x.png) no-repeat scroll 83% 42% / 8% 42%"/>
					<!-- <i class="icon ico_date"></i> -->
				</div>
				<div class="form_hint">注：放款成功后，预计1-2个工作日到账</div>
			</div>
		</div>
		<div class="from_line"></div>
		<div class="box_circle circle_not_t">
			<div class="form_wrap">
				<div class="form-group">
					<label class="control-label">每月还款</label>
					<bdo class="form_text_right c_orange" id="capital"><%=request.getParameter("capital")==null?"":request.getParameter("capital")%></bdo>
					<input type="hidden" name="capital" value="<%=request.getParameter("capital")%>" />
				</div>
				<div class="form-group">
					<label class="control-label">还款日</label>
					<input type="text" id="repaymentDate" name="repaymentDate" value="" placeholder="放款成功后查看“还款详情”" class="form-control form_ipt_right" readonly="readonly" />
				</div>
				<div class="form-group">
					<label class="control-label">绑定借记卡</label>
					<input type="text" name="depositsCardNo" value="" placeholder="" readonly="readonly" class="form-control form_ipt_right"/>
					<input type="hidden" name="md5CardNo" value="" />
					<input type="hidden" name="cardBankKey" value="" />
				</div>
			</div>
		</div>
		<div class="btn-agree"><a id="signlink" href="javascript:void(0)"><i class="icon ico_check"></i>同意并签署<bdo class="c_orange">《合同套件》</bdo></a></div>
		<div class="btn-wrap">
			<button type="button" class="btn btn-orange ctm-box-shadow disabled" onclick="javascript:void(0)" id="btnSubmit">确认代还</button>
		</div>
		<input type="hidden" name="userSignature" value="<%=request.getParameter("userSignature")%>" />
	</form>
	</div>
	
	<div class="mask_outer none" data-mask-outer></div>
	<div class="layer-wrap none window_credit ctm-layer-wrapper" data-layer-wrapper >
		<div class="credit_title orange">请选择代还信用卡号</div>
		<div class='credit_list' data-credit-list>
		
	    </div>
	   <div class='credit_close'> </div> 
	</div>
<!-- 信用卡 -->	
<script id="creditList" type="text/html">
 
  {{if credit}}
  	{{each credit as card index}}
			<div class='list_item ctm-cursor-ptr'>
		        <label class="orange" creditBank="{{card.creditBank}}">{{card.creditBank}} </label> | 
		        <span creditCity="{{card.creditCity}}" bankKey="{{card.bankKey}}" md5CreditNo="{{card.md5CreditNo}}" creditNo="{{card.creditNo}}"> 
			        {{card.creditNo}}
			    </span>
	        </div>
 	{{/each}}
  {{/if}}
 
</script>	
<!-- <script type="text/javascript" src="resource/js/jquery.js"></script>
<script src="resource/js/htmlsize.js"></script>  
<script src='resource/js/My97DatePicker/WdatePicker.js'/></script>-->

<script src="<%=request.getContextPath()%>/resource/js/common/mobiscroll_date.js" type="text/javascript"  ></script>
<script src="<%=request.getContextPath()%>/resource/js/common/mobiscroll.js" type="text/javascript" ></script>
<script type="text/javascript">
var path="<%=request.getContextPath()%>";
var userId="${userSession.userId}";


</script>
		
<script src="<%=request.getContextPath()%>/resource/js/common/template.js" type="text/javascript" ></script>
<script src="<%=request.getContextPath()%>/resource/js/views/html/credit_card_02.js" type="text/javascript" ></script>  
</body>
 
</html>
