<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="../commen_mui.jsp"></jsp:include>
<title>芝麻信用</title>
</head>

<body style=" background-color:#efeff4;">

	  <div class="maincontainer " style="position: static;">
	  
		<header class="ctm-header ctm-header-default ctm-header-bottleGreen">
			<a href="javascript:history.go(-1);" class="nav-left-icon" > <em></em> </a> 
			<h1 class="ctm-header-title" data-title>芝麻信用</h1>
	    </header>
	    
	    <div class="mui-iframe-wrapper" style="top: 0.86rem; bottom: 0px;">
	       <iframe src=""  ></iframe>
	    </div>
	    

	</div>  
	
<script>
 
   var url=sessionStorage.getItem("url");
   
   if(url&&url!=""){
		  $("iframe").attr("src",url); 
	   }
   
</script>

</body>
</html>
