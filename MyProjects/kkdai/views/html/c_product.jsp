<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<jsp:include page="../commen.jsp"></jsp:include>
<title>产品详情</title>
<script type="text/javascript">
   (function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
        var clientWidth = docEl.clientWidth;
            docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
        }
	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
	})(document, window);
   
    var productCode = "<%=request.getParameter("productCode")%>";

	$(document).ready(function() {
		$.ajax({
			async : false,
			type : 'post',
			dataType : 'json',
			url : 'getProduct',
			data : {
				productCode : productCode
			},
			success : function(data) {
				$.each(data.result, function(i, obj) {
					$.each(obj, function(key, val) {
						var str = $("#content_dom").html();
						str = str.replace("#" + key + "#", val);
						$("#content_dom").html(str);
					})
				})
			}
		});
	})
</script>
</head>

<body style="background-color: #f3f3f3;">
<div id='content_dom'>
	<div class="header">
		<a href="#" class="icon hd_left"></a> 
		#productName#
	</div>
	<div class="pro_top_box">
		<div class="pro_top1">
			<p class="p1">#lossFeeDesc#</p>
			<p class="p2">分期利率（#period#期）</p>
			<p class="p3">#periodRate#%</p>
		</div>
		<div class="top2">
			<div class="top2_left">
				<p class="top2_left_p1">借款期限</p>
				<p class="top2_left_p2">#periods#</p>
			</div>
			<div class="top2_rt">
				<p class="top2_left_p1">手续费率</p>
				<p class="top2_left_p2">#handingRate#%</p>
			</div>
		</div>
	</div>
	<div class="pro_text_box">
		<div class="pro_text_ico"></div>
		<div class="pro_text1">
			<span>逾期费用：</span>#punishRateDesc#
		</div>
		<div class="pro_text2">
			<p>
				<span>提前清贷：</span>#payOffDesc#
			</p>
		</div>
	</div>
	<a href="productList"><div class="pro_bottom">立即代还信用卡</div></a>
</div>
</body>
</html>
