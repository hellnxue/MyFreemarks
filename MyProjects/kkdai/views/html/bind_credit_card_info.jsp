<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="../commen.jsp"></jsp:include>
<title>银行卡信息 </title>

</head>
<body>
    <div class="header">
		<!-- <a href="bind_credit_card" class="icon ico_back"></a> -->
		<a href="javascript:history.go(-1);" class="icon ico_back"></a>
		银行卡信息
	</div>
	<div class="maincontainer">
	    <div class="box_wrap2 mt20 font_size_1">
	        <div class="form-group">
	            <label class="control-label">卡类型</label>
	            <span class="current">
	                <bdo class="text_rt">${result.bankName}</bdo>
	                <bdo class="text_rt">${result.cardAtt}</bdo>
	            </span>
	        </div>
	        <div class="form-group">
	            <label class="control-label">银行预留手机号</label>
	            <input class="form-control input_text_rt" name="telephone" placeholder="139********" type="text">
	        </div>
	    </div>
	    <div class="tips_info gray_bg">请务必更改为银行预留手机号，否则会导致开户不成功。</div>
	    <div class="btn-wrap">
			<button id="next_type" class="btn_new" type="button">下一步</button>
		</div>
		<div id="hidden_dom" >
		    <input type='hidden' name='type' value='${result.type}'/>
		    <input type='hidden' name='cardNo' value='<%=request.getParameter("cardNo")%>'/>
		    <input type='hidden' name='cardBank' value='${result.bankName}'/>
		    <input type='hidden' name='cardCity' value='<%=request.getParameter("cardCity")%>'/>
		    <input type='hidden' name='name' value='<%=request.getParameter("name")%>'/>
		</div>
	</div>
	
	<script type="text/javascript">
	
		var code = '${code}', msg = '${msg}';
	
	</script>
	<script src="<%=request.getContextPath()%>/resource/js/views/html/bind_credit_card_info.js" type="text/javascript" ></script>
	
</body>
</html>