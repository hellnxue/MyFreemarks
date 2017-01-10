<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,Chrome=1">
<meta content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,initial-scale=1" name="viewport">
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta content="telephone=no" name="format-detection" />
<meta name="apple-mobile-web-app-status-bar-style" content="white" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,initial-scale=1">

<!--JavaScript-->
<script type="text/javascript" src="<%=request.getContextPath()%>/resource/js/jquery.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/resource/js/jquery.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/resource/js/htmlsize.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/resource/js/mobileBUGFix.mini.js"></script>
<!-- layer弹出层 -->
<script src="<%=request.getContextPath()%>/resource/js/common/layer.js" type="text/javascript"></script>
<!-- mui框架 -->
<script type="text/javascript" src="<%=request.getContextPath()%>/resource/mui/js/mui.min.js"></script>
<!-- 自定义公用JS-->
<script type="text/javascript" src="<%=request.getContextPath()%>/resource/js/utils/Utils.js"></script>

<script src="<%=request.getContextPath()%>/resource/js/common/template.js" type="text/javascript" ></script> 
<!--CSS-->

<!-- mui CSS-->
<link rel="stylesheet" href="<%=request.getContextPath()%>/resource/mui/css/mui.min.css">
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/resource/mui/css/app.css" />
<!-- 自定义公用CSS-->
<link type="text/css" href="<%=request.getContextPath()%>/resource/css/common/commonStyle.css" rel="stylesheet" />
<!-- 页面样式表-->
<link type="text/css" href="<%=request.getContextPath()%>/resource/css/base.css" rel="stylesheet" />
<link type="text/css" href="<%=request.getContextPath()%>/resource/css/custom.css" rel="stylesheet" />

<style type="text/css">


</style>

<!-- 公用弹出层  -->
<div class='shade_outer none'></div>
<div class='shade_outer_ajax none'></div>
<div class='shade_window none'>
	<div class='w_title'>提示</div>
	<div class='w_content m-t-lg'></div>
	<div class='btn-wrap '>
		<button id='shade_window_close' class='btn s_wd btn-orange ctm-box-shadow' type='button'>确定</button>
	</div>
</div>

