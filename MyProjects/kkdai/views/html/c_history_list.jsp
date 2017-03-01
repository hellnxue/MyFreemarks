<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="../commen.jsp"></jsp:include>
<script type="text/javascript" src="<%=request.getContextPath()%>/resource/js/jquery.mobile-1.4.5.js"></script>
<title>产品详情</title>

</head>

<body style=" background-color:#efeff4;">
	<header class="ctm-header ctm-header-default">
		<a href="c_my_page" class="nav-left-icon" data-ajax="false"> <em></em> </a>
		<h1 class="ctm-header-title">历史交易</h1>
	</header>
    <div class="lishi_title">
      <a href="#" class="left current" type='2' data-ajax="false">出账交易</a>
      <a href="#" class="rt" type='1' data-ajax="false">入账交易</a>
    </div>
    <div id='lishi_list'>
    	<div data-type="2"></div>
    	<div data-type="1"></div>
	    <!-- <div class="lishi_content">
	      <div class="lishi_time">2016年12月12日</div>
	      <div class="lishi_text_box">
	        <div class="lishi_text">
	          <p><span class="lishi_1">申请时间：2016.11.11</span><span class="lishi_zt">申请成功</span></p>
	          <p><span class="lishi_2">招商银行（*0025）信用卡</span><span class="lishi_e">交易金额：10101101</span></p>
	        </div>
	        <div class="lishi_text lishi_text_last">
	          <p><span class="lishi_1">申请时间：2016.11.11</span><span class="lishi_zt">申请成功</span></p>
	          <p><span class="lishi_2">招商银行（*0025）信用卡</span><span class="lishi_e">交易金额：10101101</span></p>
	        </div>
	      </div>
	    </div> -->
   </div>
   
   <script type="text/javascript">
   
   var userId= '${userSession.userId}';
 </script>
 <script src="<%=request.getContextPath()%>/resource/js/views/html/c_history_list.js" type="text/javascript" ></script>  

</body>
</html>
