<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
<%-- <jsp:include page="../commen.jsp"></jsp:include> --%>
<jsp:include page="../commen_mui.jsp"></jsp:include>
<title>信贷GUI-银行卡信息1</title>
</head>
<body class="body">
  	<!--提示-->
	 <div class="tips_main" style="display:none;">
			<p class="lead"></p>
	 </div>
		 
	<header class="ctm-header ctm-header-default">
		<a href="c_my_page" class="nav-left-icon"> <em></em>
		</a>
		<h1 class="ctm-header-title">银行卡信息</h1>
	</header>
	
	<div class="maincontainer  ">
			<!-- <div class="box_wrap">
			  <div class="title">代还信用卡<a class="icon add_back_card_icon" href="bind_credit_card"></a></div>
  	
			  <dl class="dl_item">
				<input name="md5CreditNo" value="82c186419636d8e15aa5c6e3bf56165c" type="hidden">
				<input name="bankKey" value="guangfahang" type="hidden">
				<dt>
					<i class="icon bank_logo"></i>
				</dt>
					<dd>
						<span class="hd">625808******1504</span>
						<span class="bank_name">广发银行丨安庆市</span>
					</dd>
				</dl>
			 	
  
      		</div> -->


      	<!-- 	<div class="box_wrap bank_list">
	      		<div class="title">
		      		代还信用卡
		      		<a class="icon add_back_card_icon" href="bind_credit_card"></a>
		      	</div>      		
      			<ul class="mui-table-view" id="creditList">
      				<li class="mui-table-view-cell">
      					<div class="mui-slider-right ctm-silider-right mui-disabled"  >
							<a class="mui-btn mui-btn-red"  >删除</a>
						</div>

						<div class="mui-slider-handle dl_item">
							 <div class="ctm-container">
							 	<div class="ctm-row">
							 		<div class="custom-col-2">
							 			<div class="bank_icon">
							 				<i class="icon bank_logo"></i>
							 			</div>
							 		 
							 		</div>
							 		<div class="custom-col-8" style="margin-left: -0.5rem">
							 			<p class="hd">625808******1504</p>
							 			<p class="bank_name">广发银行丨安庆市</p>
							 		</div>							 		
							 	</div>

							 </div>
						</div>
      				</li>
       				<li class="mui-table-view-cell">
      					<div class="mui-slider-right ctm-silider-right mui-disabled"  >
							<a class="mui-btn mui-btn-red"  >删除</a>
						</div>

						<div class="mui-slider-handle dl_item">
							 <div class="ctm-container">
							 	<div class="ctm-row">
							 		<div class="custom-col-2">
							 			<div class="bank_icon">
							 				<i class="icon bank_logo"></i>
							 			</div>
							 		 
							 		</div>
							 		<div class="custom-col-8" style="margin-left: -0.5rem">
							 			<p class="hd">625808******1504</p>
							 			<p class="bank_name">广发银行丨安庆市</p>
							 		</div>							 		
							 	</div>

							 </div>
						</div>
      				</li>
      				
      			</ul>
      		</div>
      		<div class="box_wrap bank_list mt30">
	      		<div class="title">
		      		还款借记卡
		      	</div>      		
      			<ul class="mui-table-view">
      				<li class="mui-table-view-cell">
      					<div class="mui-slider-right ctm-silider-right mui-disabled"  >
							<a class="mui-btn mui-btn-red"  >删除</a>
						</div>

						<div class="mui-slider-handle dl_item dl_item2 ">
							 <div class="ctm-container">
							 	<div class="ctm-row">
							 		<div class="custom-col-10">
							 			<div class="bank_icon" style="display: inline-block;">
							 				<i class="icon bank_logo"></i>

							 			</div>
							 			<span class="hd">625808******1504</span>							 		 
							 		</div>
							 		<div class="custom-col-10" style="margin-left: -0.5rem">
							 			 
							 			<div class="custom-col-10" style="padding-left: 0.5rem">
							 			<p class="bank_name">广发银行丨安庆市</p>							 				
							 			</div>							 			

							 		</div>							 		
							 	</div>

							 </div>
						</div>
      				</li>
       				
      				
      			</ul>
      		</div> -->

	</div> 
	<!-- 信用卡  new-->	
	<script id="ccList" type="text/html">
      		<div class="box_wrap bank_list">
	      		<div class="title">
		      		代还信用卡
		      		<a class="icon add_back_card_icon" href="bind_credit_card"></a>
		      	</div>      		
      			<ul class="mui-table-view " id="creditList" data-type="credit">


  				{{if credit}}
  
  				  {{each credit as credit index}}
      				<li class="mui-table-view-cell" data-creditno="{{credit.md5CreditNo}}">


      					<div class="mui-slider-right ctm-silider-right mui-disabled"  >
							<a class="mui-btn mui-btn-red"  >删除</a>
						</div>

						<div class="mui-slider-handle dl_item">

						<input type="hidden" name="md5CreditNo" value="{{credit.md5CreditNo}}"/>
						<input type="hidden" name="bankKey" value="{{credit.bankKey}}"/>

							 <div class="ctm-container">
							 	<div class="ctm-row">
							 		<div class="custom-col-2">
							 			<div class="bank_icon">
							 				<i class="icon bank_logo"></i>
							 			</div>
							 		 
							 		</div>
							 		<div class="custom-col-8" style="margin-left: -0.5rem">
							 			<p class="hd">{{credit.creditNo}}</p>
							 			<p class="bank_name">{{credit.creditBank}}丨{{credit.creditCity}}</p>
							 		</div>							 		
							 	</div>

							 </div>
						</div>
      				</li>
					{{/each}}
				  {{else}}
					<li class="mui-table-view-cell">
					 <div class="dl_tips">请绑定信用卡</div>
					</li>
				  {{/if}}

      			</ul>
      		</div>
      		<div class="box_wrap bank_list mt30">
	      		<div class="title">
		      		还款借记卡
		      	</div>      		
      			<ul class="mui-table-view" id="cardList" data-type="card">
				{{if card}}
				  {{each card as card index}}
      				<li class="mui-table-view-cell">


      					<div class="mui-slider-right ctm-silider-right mui-disabled"  >
							<a class="mui-btn mui-btn-red"  >替换</a>
						</div>

						<div class="mui-slider-handle dl_item dl_item2 selected">

						<input type="hidden" name="md5CardNo" value="{{card.md5CardNo}}"/>
						<input type="hidden" name="cardBankKey" value="{{card.cardBankKey}}"/>

							 <div class="ctm-container">
							 	<div class="ctm-row">
							 		<div class="custom-col-10">
							 			<div class="bank_icon" style="display: inline-block;">
							 				<i class="icon bank_logo"></i>

							 			</div>
							 			<span class="hd">{{card.cardNo}}</span>							 		 
							 		</div>
							 		<div class="custom-col-10" style="margin-left: -0.5rem">
							 			 
							 			<div class="custom-col-10" style="padding-left: 0.5rem">
							 			<p class="bank_name">
												 {{if card.cardBank}}
													{{card.cardBank}}
												 {{/if}} 
												 {{if card.cardCity}}
													丨{{card.cardCity}}
												 {{/if}} 
										 </p>							 				
							 			</div>							 			

							 		</div>							 		
							 	</div>

							 </div>
						</div>
      				</li>

					{{/each}}
				{{else}}
					<li class="mui-table-view-cell">
					 <div class="dl_tips">请绑定借记卡</div>
					</li>
				  {{/if}}   				
      				
      			</ul>
      		</div>
			<div class="btn-wrap">
				<button type="button" class="btn l_wd btn-orange ctm-box-shadow" id="b1">代还信用卡</button>
			</div>
	</script> 
		
<!-- 信用卡 -->	
<script id="cList" type="text/html">
<div class="box_wrap">
  <div class="title">代还信用卡<a class="icon add_back_card_icon" href="bind_credit_card"></a></div>
  {{if credit}}
  
  	{{each credit as credit index}}
		<dl class="dl_item">
			<input type="hidden" name="md5CreditNo" value="{{credit.md5CreditNo}}"/>
			<input type="hidden" name="bankKey" value="{{credit.bankKey}}"/>
			<dt>
				<i class="icon bank_logo"></i>
			</dt>
				<dd>
					<span class="hd">{{credit.creditNo}}</span>
					<span class="bank_name">{{credit.creditBank}}丨{{credit.creditCity}}</span>
				</dd>
			</dl>
 	{{/each}}
  {{/if}}
 </div>
</div>

<div class="box_wrap mt30">
	<div class="title">还款借记卡</div>
  {{if card}}
  			{{each card as card index}}
				<dl class="dl_item dl_item2 selected">
				        <input type="hidden" name="md5CardNo" value="{{card.md5CardNo}}"/>
						<input type="hidden" name="cardBankKey" value="{{card.cardBankKey}}"/>
					<dt>
						<i class="icon bank_logo"></i>
					</dt>
					<dd>
						<span class="hd">${card.cardNo}{{card.cardNo}}</span>
					</dd>
					<dd class="bank_name">
					{{if card.cardBank}}
						{{card.cardBank}}
					{{/if}} 
					{{if card.cardCity}}
						丨{{card.cardCity}}
					{{/if}}  
					</dd>
				</dl>
  			{{/each}}
{{/if}}
    </div>
</div>
			<div class="btn-wrap">
				<button type="button" class="btn l_wd btn-orange ctm-box-shadow" id="b1">代还信用卡</button>
			</div>
</script>
 		
		
		<script src="<%=request.getContextPath()%>/resource/js/common/template.js" type="text/javascript" ></script>
		<script>
			var userId="${userSession.userId}";
		</script>
		<script src="<%=request.getContextPath()%>/resource/js/views/html/credit_card_01.js" type="text/javascript" ></script>  
</body>
</html>
