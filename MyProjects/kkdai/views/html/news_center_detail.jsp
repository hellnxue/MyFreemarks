<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="../commen_mui.jsp"></jsp:include>
<title>消息中心</title>
</head>

<body style=" background-color:#efeff4;">
	  <div class="maincontainer " style="position: static;">
		<header class="ctm-header ctm-header-default">
			<a href="javascript:history.go(-1);" class="nav-left-icon" > <em></em> </a> 
			<h1 class="ctm-header-title" data-title>给用户的一封信</h1>
	    </header>
	    
	    <div class="mui-iframe-wrapper" style="top: 0.8rem; bottom: 0px;">
	       <iframe src=""  ></iframe>
	    </div>
	    <!-- <div class="ctm-container news_center_detail m-t-lg">
	    	<div>
	    		<h3 class="text-center">给用户的一封信</h3>
	    		 <p>聚宝袋推出尊享信用卡日利率0.05% .聚宝袋推出尊享信用卡日利率0.05%聚宝袋推出尊享信用卡日利率0.05%聚宝袋推出尊享信用卡日利率0.05%聚宝袋推出尊享信用卡日利率0.05%聚宝袋推出尊享信用卡日利率0.05%聚宝袋推出尊享信用卡日利率0.05%聚宝袋推出尊享信用卡日利率0.05%聚宝袋推出尊享信用卡日利率0.05%聚宝袋推出尊享信用卡日利率0.05%聚宝袋推出尊享信用卡日利率0.05%聚宝袋推出尊享信用卡日利率0.05%聚宝袋推出尊享信用卡日利率0.05%聚宝袋推出尊享信用卡日利率0.05%聚宝袋推出尊享信用卡日利率0.05%聚宝袋推出尊享信用卡日利率0.05%聚宝袋推出尊享信用卡日利率0.05%</p>

	    	</div>


	    </div> -->
	    <!-- <div class="ctm-container news_center_detail m-t-lg"   >
	    	<div>
	    		 <iframe src="" style="width: 100%; height: 100%; " frameborder="0"  seamless  ></iframe>

	    	</div>


	    </div> -->
	    

	</div>  
	
<script>
  // var newsTitle="${param.newTitle}";
  // var url="${param.url}";
  
   var newTitle=sessionStorage.getItem("newTitle");
   var url=sessionStorage.getItem("url");
   
   if(newTitle&&newTitle!=""){
	  $("[data-title]").html(newTitle); 
   }
   
   if(url&&url!=""){
		  $("iframe").attr("src",url); 
	   }
   
     window.onload = function(){
	  
	   mui.plusReady(function(){
	     //关闭等待框
	     plus.nativeUI.closeWaiting();
	     
	     console.log( mui.currentWebview);
	     //显示当前页面
	     mui.currentWebview.show();
	   });
	 };  
   
</script>



   
	 
     
</body>
</html>
