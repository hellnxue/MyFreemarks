<%@ page language="java" import="java.util.
*" pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="../commen.jsp"></jsp:include>
<title>个人中心</title>

</head>

<body class="ctm-white-bgc">

    <div class="me_top">15989987899</div>
    
    <div class="widget-list">
       <ul class="vip-list">
       		<li>
       			<a  href="c_history_list">
					<i class="arrows"></i>
					<img class="widget-icon"   src="<%=request.getContextPath()%>/resource/images/img/v1/past_icon@2x.png" width="28">
					<span class="widget-name">历史交易</span>
					<p>hello world</p>
				</a>
       		</li>
       		<li>
       			<a  href="credit_card_01" data-href="credit_card_01" data-check >
					<i class="arrows"></i>
					<img class="widget-icon"   src="<%=request.getContextPath()%>/resource/images/img/v1/cards_icon@2x.png" style="width:0.51rem;">
					<span class="widget-name">银行卡管理</span>
				</a>
       		</li>
       		<li>
       			<a  href="c_product_list">
					<i class="arrows"></i>
					<img class="widget-icon"   src="<%=request.getContextPath()%>/resource/images/img/v1/find_icon@2x.png" style="width:0.51rem;">
					<span class="widget-name">发现</span>
				</a>
       		</li>
       		<li>
       			<a  href="#">
					<i class="arrows"></i>
					<img class="widget-icon"   src="<%=request.getContextPath()%>/resource/images/img/v1/safety_icon@2x.png" style="width:0.48rem;">
					<span class="widget-name">安全信息修改</span>
				</a>
       		</li>
       		<li>
       			<a  href="#">
					<i class="arrows"></i>
					<img class="widget-icon"   src="<%=request.getContextPath()%>/resource/images/img/v1/help_icon@2x.png" style="width:0.49rem;">
					<span class="widget-name">帮助中心</span>
				</a>
       		</li>
       		<li>
       			<a  href="#">
					<i class="arrows"></i>
					<img class="widget-icon"   src="<%=request.getContextPath()%>/resource/images/img/v1/setting_icon@2x.png" style="width:0.5rem;">
					<span class="widget-name">设置</span>
				</a>
       		</li>       		       		
       </ul>
    </div>
    
    
<jsp:include page="foot.jsp"></jsp:include>

<script src="<%=request.getContextPath()%>/resource/js/views/html/c_my_page.js" type="text/javascript" ></script>  
</body>
</html>
