<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="../commen_mui.jsp"></jsp:include>
<title>帮助中心</title>

</head>

<body style=" background-color:#efeff4;">

	<div id="main-wrapper">	
 
		<header class="ctm-header ctm-header-gray">
			<a href="javascript:history.go(-1);" class="nav-left-icon"> <em></em>
			</a> 
			<!-- <a href="withdraw_cash" class="nav-right-icon"> <span>确认</span>
			</a>   -->
			<h1 class="ctm-header-title">常见问题</h1>
		</header>

		<div class="mui-content"></div>

	</div>	
	
	
	<script type="text/javascript">
		mui.init({
			subpages:[{
				url:'faquestions',
				id:'faquestions',
				styles:{
					top: '0',
					bottom: '0',
				}
			}]
		});
	
	</script>
     
</body>
</html>
