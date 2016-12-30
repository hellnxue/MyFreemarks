<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="../commen.jsp"></jsp:include>
<title>芝麻信用授权</title>
</head>
<body>
    <div class="header">
        <a href="index" class="icon ico_back"></a>
		芝麻信用授权
	</div>
	<div class="maincontainer">
		<div class="zmxysq">
		   <span>立即授权<br>您的芝麻信用</span>
		</div>
	</div>
</body>
<script type="text/javascript">
$(document).ready(function(){
	$(".zmxysq").find("span").bind("click", function(){
		$.ajax({
			async: false,
			type: "post",
			dataType: 'json',
			url: 'zmxy',
			data: {type:"Q"},
			success: function(data) {
				if(data.code == '0000'){
					window.location.href= data.result;
					//window.location="bill_cancel_01?hh="+"http://dev.dcloud.net.cn/mui/";
				}
			}
		});
	})
})
</script>
</html>