<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
<jsp:include page="../commen.jsp"></jsp:include>
<title>信贷GUI-银行卡信息1</title>
</head>
<body class="body">
	<div class="header">
		<a href="index" class="icon ico_back" ></a>
		银行卡信息
		</i><!--<i><img image src="images/card_bg@3x.png" alt="" />  -->
	</div>
	
		<div class="maincontainer">
			<%--  <div class="box_wrap">
				<div class="title">代还信用卡<a class="icon add_back_card_icon" href="bind_credit_card"></a></div>
				 <c:forEach items="${creditList}" var="credit">
					<dl class="dl_item">
						<input type="hidden" name="md5CreditNo" value="${credit.md5CreditNo}"/>
						<input type="hidden" name="bankKey" value="${credit.bankKey}"/>
						<dt>
							<i class="icon bank_logo"></i>
						</dt>
						<dd>
							<span class="hd">${credit.creditNo}</span>
							<span class="bank_name">${credit.creditBank}丨${credit.creditCity}</span>
						</dd>
					</dl>
				</c:forEach>  
			 
			</div>
			<div class="box_wrap mt30">
				<div class="title">还款借记卡</div>
		 
				  <c:forEach items="${cardList}" var="card">
				<dl class="dl_item dl_item2 selected">
				        <input type="hidden" name="md5CardNo" value="${card.md5CardNo}"/>
						<input type="hidden" name="cardBankKey" value="${card.cardBankKey}"/>
					<dt>
						<i class="icon bank_logo"></i>
					</dt>
					<dd>
						<span class="hd">${card.cardNo}</span>
					</dd>
					<dd class="bank_name">
					<c:if test="${card.cardBank!='null'}">
						${card.cardBank}
					</c:if><c:if test="${card.cardCity!='null'}">丨${card.cardCity}</c:if>
					</dd>
				</dl>
				</c:forEach>  
			</div>
			<div class="btn-wrap">
				<button type="button" class="btn l_wd btn-orange" id="b1">代还信用卡</button>
			</div> --%>
			</div>  
		
		
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
