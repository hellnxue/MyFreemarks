<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="../commen_mui.jsp"></jsp:include>
<title>消息中心</title>
</head>

<body style=" background-color:#efeff4;">
	 
		<header class="ctm-header ctm-header-default">
			<a href="index" class="nav-left-icon" > <em></em> </a> 
			<h1 class="ctm-header-title">消息中心</h1>
	    </header>

	    <!-- <div class="news_center m-t-lg">
	    	<ul class="mui-table-view" data-news-items>
			    <li class="mui-table-view-cell hm-t-v-cell">
			        <a class="mui-navigate-right">
			        	<h5>给用户的一封信</h5>
			        	<p>10月12日 16:00</p>
			        </a>
			    </li>
			    <li class="mui-table-view-cell hm-t-v-cell">
			        <a class="mui-navigate-right">
			        	<h5>新注册用户获七天免息资格</h5>
			        	<p>10月12日 16:00</p>
			        </a>
			    </li>
			    <li class="mui-table-view-cell hm-t-v-cell">
			        <a class="mui-navigate-right">
			        	<h5>给用户的一封信</h5>
			        	<p>10月12日 16:00</p>
			        </a>
			    </li>
			</ul>

	    </div> -->
	    
	    <!--下拉刷新容器-->
		<div id="pullrefresh" class="mui-content mui-scroll-wrapper">
			<div class="mui-scroll">
				<!--数据列表-->
				<ul class="mui-table-view mui-table-view-chevron" data-news-items>
					
				</ul>
			</div>
		</div>
	 
	
	<form id="newsForm">
		<input type="hidden" name="newTitle">
		<input type="hidden" name="url">
	</form>
	
<script id="newsList" type="text/html">
	{{if result}}
		{{each result as news index}}

			    <li class="mui-table-view-cell hm-t-v-cell">
			        <a class="mui-navigate-right" data-url="{{news.url}}" data-title="{{news.newTitle}}">
			        	<h5>{{news.newTitle}}</h5>
			        	<p>{{news.createdDate}}</p>
			        </a>
			    </li>			
		{{/each}}
	{{/if}}
</script>
<script src="<%=request.getContextPath()%>/resource/js/views/html/news_center.js" type="text/javascript" ></script>  

</body>
</html>
