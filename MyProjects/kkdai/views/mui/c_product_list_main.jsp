<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="../commen_mui.jsp"></jsp:include>
<title>产品详情</title>

</head>

<body style=" background-color:#efeff4;">

	<div id="main-wrapper">	
 
		<header class="ctm-header ctm-header-default">
			<a href="c_my_page" class="nav-left-icon"> <em></em>
			</a>
			<h1 class="ctm-header-title">借贷产品</h1>
		</header>

		<!-- <div class="ctm-container pro_list" data-product> </div> -->

		<div class="mui-content"></div>

	</div>	
	<jsp:include page="../html/foot.jsp"></jsp:include>
	
	<script type="text/javascript">
		mui.init({
			subpages:[{
				url:'c_product_list',
				id:'c_product_list',
				styles:{
					top: '0',
					bottom: '0',
				}
			}]
		});
	
	</script>
     
</body>
</html>
