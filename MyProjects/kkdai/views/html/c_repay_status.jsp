<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="../commen.jsp"></jsp:include>
<title>还款状态查询</title>
</head>

<body style=" background-color:#efeff4;">
    <div class="header header_y">
		<!-- <a href="#" class="icon hd_left"></a> -->
		<a href="index" class="icon ico_back"></a>
		还款状态查询
	</div>
    <div class="hk_jd_box">
        <div class="hk_jd1">
          <div class="hk_jd_bg"></div>
          <div class="hk_jd_text current">您的还款请求已提交</div>
        </div>
        <div class="hk_line line_current"></div>
        <div class="hk_jd1">
          <div class="hk_jd_bg2 hk_jd_bg2_current"></div>
          <div class="hk_jd_text current">银行正加紧处理中</div>
        </div>
       <!--  <div class="hk_line line_current"></div>
        <div class="hk_jd1">
          <div class="hk_jd_bg3 hk_jd_bg3_current"></div>
          <div class="hk_jd_text current">提交成功</div>
        </div> -->
        
         <div class="hk_line"></div>
        <div class="hk_jd1">
          <div class="hk_jd_bg3"></div>
          <div class="hk_jd_text">还款成功或失败</div>
        </div>
    </div>
   
</body>
</html>
