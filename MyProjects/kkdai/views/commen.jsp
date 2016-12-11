<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,Chrome=1">
<meta content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,initial-scale=1" name="viewport">
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta content="telephone=no" name="format-detection" />
<meta name="apple-mobile-web-app-status-bar-style" content="white" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,initial-scale=1">
<script type="text/javascript" src="<%=request.getContextPath()%>/resource/js/jquery.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/resource/js/jquery.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/resource/js/htmlsize.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/resource/js/mobileBUGFix.mini.js"></script>

<link type="text/css" href="<%=request.getContextPath()%>/resource/css/common/commonStyle.css" rel="stylesheet" />
<link type="text/css" href="<%=request.getContextPath()%>/resource/css/base.css" rel="stylesheet" />
<link type="text/css" href="<%=request.getContextPath()%>/resource/css/custom.css" rel="stylesheet" />

<style type="text/css">

.shade_outer,.shade_outer_ajax {
    background: rgba(0, 0, 0, 0.5) none repeat scroll 0 0;
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    transition: opacity 0.15s linear 0s;
    z-index: 19891030;
}

.shade_window {
    top: 50%;
	width: 6rem;
	border-radius: 0.175rem;
	padding-bottom: 0.6rem;
	-webkit-transform: translate(-50%,-50%);
	-moz-transform: translate(-50%,-50%);
	-ms-transform: translate(-50%,-50%);
	-o-transform: translate(-50%,-50%);
	transform: translate(-50%,-50%);
	position: fixed;
	z-index: 19891060;
	left: 50%;
	background: #fff;
	animation:shadeAnimation  0.2s  ; /* 0.15s */
	-moz-animation:shadeAnimation  0.2s  ;
	-webkit-animation:shadeAnimation  0.2s  ;
	-ms-animation:shadeAnimation  0.2s  ;
	-o-animation:shadeAnimation  0.2s  ;
}

.w_title, .w_content {
    line-height: 0.40rem;
    text-align: center;
   /*  height: 0.40rem; */
}

.w_title {
	font-size: 0.45rem;
    margin-top: 0.2rem;
}

.w_content {
    font-size: 0.35rem;
    padding: 0.4rem;
}


@keyframes shadeAnimation{
	   
	   from{ 
			 top:42%;
		 }
	   to{ 
		   top:50%;
		   
		}
 }

/* <!-- 去掉jQuery Mobile 底部 loadin 样式 --> */
.ui-loader-default{ display:none}
.ui-mobile-viewport{ border:none;}
.ui-page {padding: 0; margin: 0; outline: 0} 

</style>

<div class='shade_outer none'></div>
<div class='shade_outer_ajax none'></div>
<div class='shade_window none'>
	<div class='w_title'>提示</div>
	<div class='w_content m-t-lg'></div>
	<div class='btn-wrap m-t-xxxl'>
		<button id='shade_window_close' class='btn s_wd btn-orange ctm-box-shadow' type='button'>确定</button>
	</div>
</div>

<script type="text/javascript">
function MessageWin(message, callback) {
	$(".w_content").text(message);
	$(".shade_outer, .shade_window").removeClass("none");
    $("#shade_window_close").bind("click", function(){
    $(".shade_outer, .shade_window").addClass("none");
    if(callback){
    	callback();
    }	
    });
}

$(function(){
	$(document).bind("ajaxStart", function() {
		$(".shade_outer_ajax").removeClass("none");
	}).bind("ajaxComplete", function() {
		$(".shade_outer_ajax").addClass("none");
		 
	});
});

</script>

