<%--
  Created by IntelliJ IDEA.
  User: caoc
  Date: 2016/9/21
  Time: 14:45
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,Chrome=1">
	<meta content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,initial-scale=1" name="viewport">
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta content="telephone=no" name="format-detection" />
	<meta name="apple-mobile-web-app-status-bar-style" content="white" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
    <title></title>
    <!-- mui框架 -->
	<script type="text/javascript" src="<%=request.getContextPath()%>/resource/mui/js/mui.min.js"></script>
	<!-- mui CSS-->
	<link rel="stylesheet" href="<%=request.getContextPath()%>/resource/mui/css/mui.min.css">
	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/resource/mui/css/app.css" />
	
</head>
<body>

	<script >
	
		mui.init();
		
		var info= ${errInfo} ;
		
		if(info&&info.code!="0000"){
			mui.alert(info.msg, '提示',"确认",function(){
				location="login";
			});
			
		}
	
	</script> 
</body>
</html>
