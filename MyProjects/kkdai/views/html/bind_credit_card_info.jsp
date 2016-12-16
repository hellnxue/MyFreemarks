<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="../commen.jsp"></jsp:include>
<title>银行卡信息 </title>
<script type="text/javascript">

$(document).ready(function(){
	var code = '${code}', msg = '${msg}';
	if("" != code && code != '0000') {
		function passFun(){
			window.location.href = 'bind_credit_card'
		}
		MessageWin(msg, passFun);
	}
	$("#next_type").bind("click", function(){
		var telephone = $('input[name=telephone]').val()
		if("" == telephone ){
			MessageWin("手机号不能为空", function(){})
			return false;
		} 
		$.ajax({
			async: false,
			type: 'post',
			dataType: 'json',
			url: 'phoneDynCode',
			data: {
				verifyKind:"BK",
				mobileNo: telephone
			},
			success: function(data) {
				if(data.code == '0000'){
					var dom = $("#hidden_dom").html();
					var str = "" + 
					"<div class='header'>" + 
						"<a href='#' class='icon ico_back'></a>" + 
						"填写验证码" + 
					"</div>" + 
					"<div class='maincontainer'>" + 
					"<form action='saveCard' method='post'>"+
					    "<div class='tips_info gray_bg'>请输入手机139********收到的短信验证码</div>" + 
						"<div>" + 
							"<input class='form-control-border mt20 input_boder_style' name='verifyCode' value='' placeholder='请输入验证码' type='text' required='required'>" + 
							"<input class='form-control-border mt20 button_boder_style' value='59秒后重发' type='button'>" + 
						"</div>" + 
						"<div class='btn-wrap'>" + 
						    dom + 
						    "<input type='hidden' name='telephone' value='" + telephone + "'/>" +
						    "<button class='btn_new' type='submit' >下一步</button>" + 
						"</div>" + 
					"</form>" + 
					"</div>";
					$("body").html(str);
				}else {
					MessageWin(data.msg, function(){});
				}
			}
		});
	})
	
})
</script>
</head>
<body>
    <div class="header">
		<a href="bind_credit_card" class="icon ico_back"></a>
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
</body>
</html>