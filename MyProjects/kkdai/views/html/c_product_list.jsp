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
   
   $(document).ready(function(){
	   $.ajax({
			async: false,
			type: 'post',
			dataType: 'json',
			url: 'getProduct',
			success: function(data) {
				if(data.code == "0000"){
					var str = "";
					$(data.result).each(function(i, obj){
						var jsonStr = "{";
						/* $.each(obj, function(key, val) { 
							alert("key" + key); 
							alert("val" + val);  
							jsonStr += '"' + key +  '":' + '"' + val + '",'
						}); 
						jsonStr = jsonStr.substring(0,jsonStr.length-1) + "}";*/
						str	+= "<li productCode=" + obj.productCode + ">"+
									"<div class='j_ul_text'>"+
										"<span>" + obj.productName + "</span><span class='jie_int'>" + obj.periodDesc + "</span>"+
									"</div>"+
									"<p class='j_ul_p1'>" + obj.rateDesc + "</p>"+
									"<p class='j_ul_p2'>" + obj.handingRateDesc + "</p>"+
									"<div class='jie_hot_ico'></div>"+
								"</li>";
					})
					$(".j_ul").html(str);
					
					$(".j_ul > li").bind("click", function(){
						window.location.href='c_product?productCode=' + $(this).attr("productCode")
					})
				}else {
					MessageWin(data.msg, function(){}); 
				}
			}
		});
   })
</script>
</head>

<body style=" background-color:#efeff4;">
    <div class="header">
		<a href="c_my_page" class="icon hd_left"></a>
		借贷产品
	</div>
    <ul class="j_ul">
     <li>
      <div class="j_ul_text"><span>7天免费</span><span class="jie_int">免费收到货后的</span></div>
      <p class="j_ul_p1">哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
      <p class="j_ul_p2">的点点哈哈哈哈哈哈哈哈滴滴</p>
      <div class="jie_hot_ico"></div>
     </li>
     <li>
      <div class="j_ul_text"><span>7天免费</span><span class="jie_int">免费收到货后的</span></div>
      <p class="j_ul_p1">哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
      <p class="j_ul_p2">的点点哈哈哈哈哈哈哈哈滴滴</p>
      <div class="jie_hot_ico"></div>
     </li>
     <li>
      <div class="j_ul_text"><span>7天免费</span><span class="jie_int">免费收到货后的</span></div>
      <p class="j_ul_p1">哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
      <p class="j_ul_p2">的点点哈哈哈哈哈哈哈哈滴滴</p>
      <div class="jie_hot_ico"></div>
     </li>
    </ul>
</body>
</html>
