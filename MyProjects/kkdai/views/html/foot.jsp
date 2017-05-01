<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<%-- <jsp:include page="../commen.jsp"></jsp:include> --%>
<script type="text/javascript">
$(document).ready(function(){
	$(".footer>a").bind("click", function(){
		var dom = $(this);
		$(".footer>a").removeClass("footer_current");
		dom.attr("class", "footer_current");
		dom.find("i").css("filter","");
		dom.find("i").css("-webkit-filter","");
		$(".footer").find("i").css("-moz-filter","");
		$(".footer").find("i").css("-ms-filter","");
		$(".footer").find("i").css("-o-filter","");
	})
})
</script>
</head>
<body>
<br></br>
<br></br>
    <div class="footer ctm-footer">
        <a href="bill_manage_01_main">
			<span>
			   <i class='foot_ico_1' alt="" ></i>
			</span>
			<p>账单</p>
		</a>
        <a href="index" class='footer_current'>
			<span>
			    <i class='foot_ico_2 footer_current' alt="" ></i>
			</span>
			<p>首页</p>
		</a>
        <a href="c_my_page">
			<span>
			    <i class='foot_ico_3' alt="" ></i>
			</span>
			<p>我的</p>
		</a>
	</div>
</body>
</html>